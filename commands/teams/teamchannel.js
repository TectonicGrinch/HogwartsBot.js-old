const commando = require ('discord.js-commando')
const db = require('../../database.js');

class teamchannel extends commando.Command {
    constructor(client) {
        super(client, {
        name: 'teamchannel',
        group: 'teams',
        memberName: 'teamchannel',
        description: 'links a team to a channel',
        });
    }
    async run(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR'))
{
return message.channel.send('you must be an administrator to use this command');
}
        
        let teamname = args.split(' ')[0];
        let channel_id = args.split(' ')[1];
        //check if teamname missing
        if(!teamname)
        {
            return message.channel.send('team name missing');
        }
        if(!channel_id)
        {
            return message.channel.send('channel id missing');
        }
        //check if team is not already created
        if(!(await db.team_exists(teamname)))
        {
            return message.channel.send(`team not found`);
        }
        let guild = message.guild;
        let channel = guild.channels.cache.get(channel_id);
        if(!channel)
        {
            return message.channel.send('channel not found');
        }
        //update channel in database
        db.update_team(teamname, "channel_id", channel.id);
        //update channel in discord to display team
        let points = await db.get_team(teamname, "points");
        channel.setName(`${teamname} - ${points} points`);

        return message.channel.send(`team \`${teamname}\` linked to channel \`${channel.name}\``);
    }
  
}
module.exports = teamchannel;