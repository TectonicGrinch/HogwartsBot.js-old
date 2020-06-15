const commando = require ('discord.js-commando')
const Discord = require('discord.js');


module.exports = class homenumrevelio extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'homenum revelio',
			aliases: ['homenumr'],
			group: 'spells',
			memberName: 'homenumrevelio',
			description: 'check the player count',
			throttling: {
				usages: 1,
                duration: 30,
                
                
			},
		});
	}
run(message) {
    const client = new Discord.Client();
       
            let RoleName = "year2";
            let guildid = ("621848781045891093");
            let memberWithRole = client.member.roles.find("name", RoleName).members.map(m=>m.user.username)
    
            return message.say("There is ${RoleName}");
        }
    }
    

