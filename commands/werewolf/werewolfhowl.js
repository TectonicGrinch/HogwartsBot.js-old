const commando = require ('discord.js-commando')

module.exports = class werewolfhowl extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'werewolfhowl',
			group: 'werewolf',
			memberName: 'werewolfhowl',
            description: 'Howl at the moon **Lycan**',
            throttling: {
              usages: 1,
              duration: 10,
            },
                
                
			
		});
    
    }


    async run(message, user, args) {
    if(message.member.roles.cache.find(role => role.name === "Lycan")){
return message.reply('*Howls at the moon.*', {files:['./resources/gifs/werewolfhowl.gif']})
    }else{
return message.say('You are not Lycan')



  }
  }}