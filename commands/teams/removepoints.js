const commando = require ('discord.js-commando')
const db = require('../../database.js');

class removepoints extends commando.Command {
    constructor(client) {
        super(client, {
        name: 'removepoints',
        group: 'teams',
        memberName: 'removepoints',
        description: 'removes points from a team',
        });
    }
    async run(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR'))
{
return message.channel.send('you must be an administrator to use this command');
}
        
        let teamname = args.split(' ')[0];
        let points = parseInt(args.split(' ')[1]);
        //check if teamname missing
        if(!teamname)
        {
            return message.channel.send('team name missing');
        }
        if(!points)
        {
            return message.channel.send('points missing');
        }
        //check if team is not already created
        if(!(await db.team_exists(teamname)))
        {
            return message.channel.send(`team not found`);
        }
        //remove points from the team
        let old_points = await db.get_team(teamname, "points");
        let new_points = old_points - points;
        if(new_points <= 0)//don't allow negative point values
            new_points = 0;
        db.update_team(teamname, "points", new_points);
        //update the team channel
        let channel_id = await db.get_team(teamname, "channel_id");
        if(channel_id)
        {
            //channel set -- update the channel name to display points for the team
            let guild = message.guild;
            let channel = guild.channels.get(channel_id);
            if(channel)
            {
                channel.setName(`${teamname} - ${new_points} points`);
            }
            else
            {
                //channel not found - remove from db
                db.update_team(teamname, "channel_id", "");
            }
        }

        return message.channel.send(`\`${points}\` points removed from \`${teamname}\``);
    }
  
}
module.exports = removepoints;