const commando = require ('discord.js-commando')

module.exports = class gryffindormotto extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'gryffindormotto',
			aliases: ['gryffindorm','grym'],
			group: 'house',
			memberName: 'gryffindormotto',
			description: 'Sends a message with house motto of *House* you are in. **It is house restricted.**',
			throttling: {
				usages: 1,
				duration: 10,
			},
		});
	}

	run(message) {
    if(message.member.roles.cache.find(role => role.name === "Gryffindor")){
    return message.say('*Their daring, nerve and chivalry set Gryffindors apart*', {files: ["./resources/emotes/gryffindor.png"]});
      }else{
    return message.say('*Incorrect House!*');
      }
	};
}



