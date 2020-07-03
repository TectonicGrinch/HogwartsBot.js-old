const commando = require ('discord.js-commando')

module.exports = class werewolfhowl extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'werewolfcount',
			group: 'werewolf',
			memberName: 'werewolfcount',
            description: 'Displays a count of werewolves',
            hidden: true,
            throttling: {
              usages: 1,
              duration: 10,
            },
                
                
			
		});
    
    }


    async run(message, user, args) {
    if(message.member.roles.cache.find(role => role.name === "Bot Dev")){
        let guild = await message.guild.members.fetch();
        let roleName = message.guild.roles.cache.find(x => x.name === "Lycan");
        let memberCount = guild.members.fetch(roleName).members.size;
return message.reply(`There are currently ${memberCount} Lycans`)
    }else{
return message.say('You are not Bot Dev')



  }
  }}