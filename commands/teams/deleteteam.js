const commando = require ('discord.js-commando')
const db = require('../../database.js');

class deleteteam extends commando.Command {
    constructor(client) {
        super(client, {
        name: 'deleteteam',
        group: 'teams',
        memberName: 'deleteteam',
        description: 'deletes an existing team',
        });
    }
    async run(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR'))
{
return message.channel.send('you must be an administrator to use this command');
}
        
        let teamname = args.split(' ')[0];
        //check if teamname missing
        if(!teamname)
        {
            return message.channel.send('team name missing');
        }
        //check if team is not already created
        if(!(await db.team_exists(teamname)))
        {
            return message.channel.send(`team \`${teamname}\` not found`);
        }
        //create the team in the db
        db.delete_team(teamname);
        return message.channel.send(`team \`${teamname}\` deleted`);
    }
  
}
module.exports = deleteteam;