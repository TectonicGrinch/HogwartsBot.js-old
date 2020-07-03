const commando = require ('discord.js-commando')
const Discord = require('discord.js')
module.exports = class adventure extends commando.Command {
	constructor(client) {
		super(client, {
      name: 'adventure',
      aliases: ['adv'],
            group: 'roleplay', 
			memberName: 'adventure',
			description: 'Go on an adventure!',

			},
		);
	}

    async run(message) {

        message.reply("yes or no");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "yes") {
                message.channel.send("you chose yes");
            } else if (message.content == "no") {
                message.channel.send("you choose no");
            }
        })

    
    
    
    
    }
}