const commando = require ('discord.js-commando')
module.exports = class hiddenannouncements extends commando.Command {
	constructor(client) {
		super(client, {
      name: 'hiddenannouncements',
      aliases: ['ha'],
            group: 'admin',
            hidden: true,
			memberName: 'hiddenannouncements',
			description: 'hiddenannouncements',

			},
		);
	}
    async run(message) {
      var hiddenannouncementsRoles = [
        'Bot Dev',

    ]
    var hasRole = false;
    hiddenannouncementsRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    if(hasRole === true){

    if (message.author.bot) return undefined //bot does not reply to itself

    let msg = message.content.toLowerCase()
    let args = message.content
      .trim()
      .split(' ') //arguements
    let command = args.shift().toLowerCase() //shifts args to lower case letters


    let say = args.join(' ') //space
    message.delete() //deletes the message you sent
    const generalChannel = message.guild.channels.cache.find(channel => channel.name === "hogwartsbot-announcements")
    generalChannel.send(say)
  }else{

  }
}
}