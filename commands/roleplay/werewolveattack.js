const commando = require ('discord.js-commando')



module.exports = class lycanattack extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'lycanattack',
			aliases: ['lycana','lycanatt'],
			group: 'roleplay',
			memberName: 'lycanattack',
            description: 'use your Lycan(werewolve) form to attack someone once a month :full_moon: chance to infect them on use **Lycan restricted** :wolf:',
            throttling: {
              usages: 1,
              duration: 604800,
            },
                
                
			
		});
    
    }


    async run(message, user, args) {
      if(message.member.roles.find("name", "Lycan")){
      const lycanRole = message.guild.roles.find(role => role.name === 'Lycan');
      let member = message.mentions.members.first();
      var lycanroll = Math.floor(Math.random() * 100) + 1;

    if (lycanroll < 10)
    member.addRole(lycanRole),
  

     message.reply(`*goes on the hunt to find* ${member} you find them near hogsmead and infect them with your **Lycan curse** \n ${member} is now a **Lycan** :wolf: :full_moon:`) 
  


    else if (lycanroll < 20)
     message.reply(` ${member} was attacked and they managed to escape back to hogwarts maybe ${member} shouldn't sneak out so often.`);

     else

     message.reply(`you go on the hunt for ${member} but they are protected by the walls of hogwarts maybe next moon. :full_moon:`)

    }else{
     message.reply("You are not Lycan")



    


    }
  }
  }
/*
    const allowedRole = message.guild.roles.find(role => role.name === 'Streamer'); // isn't used
    const gRole = message.guild.roles.find(role => role.name === 'Stream 1');
    const member = message.mentions.members.first();
    if (message.content === 'addRole') {
        member.addRole(gRole);
    }*/
