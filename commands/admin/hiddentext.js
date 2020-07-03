const commando = require ('discord.js-commando')
module.exports = class hiddentext extends commando.Command {
	constructor(client) {
		super(client, {
      name: 'hiddentext',
      aliases: ['ht'],
            group: 'admin',
            hidden: true, //<--- This is an addon to commando that will hide the command off the command menu if you have it simply enable this function
			memberName: 'hiddentext',
			description: 'hiddentext',

			},
		);
	}
    async run(message) {
      //insert roles into the array 
      var hiddentextRoles = [
        'Bot Dev',
        'Dev',

    ]
    var hasRole = false;
    hiddentextRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    if(hasRole === true){
      let msg = message.content.toLowerCase()
      let args = message.content
        .trim()
        .split(' ') //arguements
      let command = args.shift().toLowerCase() //shifts args to lower case letters
  
    let channelname = args.slice(' ')[0];
    let say = (args.slice(1).join(' '))
    if(!channelname)
    {
      return message.say('Please provide a channel name.')
    }
    if(!say)
    {
      return message.say('Please provide your text.')
    }

//should your message delete after the bot reads it? delete message.delete() if you don't want it to delete your message
    message.delete()
    
    const namedChannel = message.guild.channels.cache.find(channel => channel.name === channelname)
    namedChannel.send(say)
  }else{

  }
}
}