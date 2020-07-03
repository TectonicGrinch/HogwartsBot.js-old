const commando = require ('discord.js-commando')
const db = require('../../database.js');


class addpoints extends commando.Command {
    constructor(client) {
        super(client, {
        name: 'addpoints',
        group: 'teams',
        memberName: 'addpoints',
        description: 'adds points to a team',
        });
    }
    async run(message, args) {
        var addpointsRoles = [
            'Dev',
            'Bot Dev',
            'Moderator',
            'Professor'
        ]
        var hasRole = false;
        addpointsRoles.forEach(findrole =>{
            if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
        })
    
        if(hasRole === true){
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
            //add points to the team
            let old_points = await db.get_team(teamname, "points");
            let new_points = old_points + points;
            db.update_team(teamname, "points", new_points);
            //update the team channel
            let channel_id = await db.get_team(teamname, "channel_id");
            if(channel_id)
            {
                //channel set -- update the channel name to display points for the team
                let guild = message.guild;
                let channel = guild.channels.cache.get(channel_id);
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
    
            return message.channel.send(`\`${points}\` points added to \`${teamname}\``);
        
      
    
        
        }else{
            //code when has no role
            message.reply('Incorrect Role')
    
        }
    
    
    
    
    }
    }


module.exports = addpoints;




