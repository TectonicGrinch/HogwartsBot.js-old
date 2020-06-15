const commando = require ('discord.js-commando')
const db = require('../../database.js');

class createteam extends commando.Command {
    constructor(client) {
        super(client, {
        name: 'createteam',
        group: 'teams',
        memberName: 'createteam',
        description: 'creates a team',
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
        //check if team is already created
        if(await db.team_exists(teamname))
        {
            return message.channel.send('team already exists');
        }
        //create the team in the db
        db.insert_team(teamname);
        return message.channel.send(`team \`${teamname}\` created`);
    }
  
}
module.exports = createteam;