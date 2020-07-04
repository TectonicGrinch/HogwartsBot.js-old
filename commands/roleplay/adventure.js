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

        message.reply(`You wake up in your room and jump up to peer out your window, You wonder what you are going to do when you get to Hogwarts the following evening. You start to wonder what classes you would have to take and the friends you will make along the way. You get dressed for the day and hear a *knocking* at the door it is your Mother. ${message.author} 'breakfast is ready are you coming down?' \n **yes** or **no**`);
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "yes") {
                message.reply("**Yes** I'm coming down.");
                message.channel.send('You head down stairs for breakfast. on the table you see Bacon and eggs')

            } else if (message.content == "no") {
                message.reply("**No** im not very hungry.");
                message.channel.send("you decide to stay in your room and continue to pack for Hogwarts.");
            }
        })

    
    
    
    
    }
}