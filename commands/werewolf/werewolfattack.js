const commando = require ('discord.js-commando')

module.exports = class werewolfattack extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'werewolfattack',
			group: 'werewolf',
			memberName: 'werewolfattack',
            description: 'Use your werewolf nature to attack someone (roleplay ability no infection is spread) **Lycan**',
            throttling: {
              usages: 1,
              duration: 10,
            },
                
                
			
		});
    
    }


    async run(message, user, args) {
    if(message.member.roles.cache.find(role => role.name === "Lycan")){
       let member = message.mentions.members.first();
       var lycanattackroll = Math.floor(Math.random() * 100) + 1;

    if (lycanattackroll < 40)

  

     message.reply(`*Your claws slice into ${member|| 'a student'} and they appear to be scarred.*`) 
  


    else if (lycanattackroll < 70)
     message.reply(`*Tries to attack ${member|| 'a student'} but ${member|| 'the student'} manages to stun you and gets away.* `);

    else

     message.reply(`*You try to locate ${member|| 'a student'} but they appear to be too far away.*`);

    }else{
     message.reply("You are not Lycan")



    


    }
  }
  }