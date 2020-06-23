const commando = require ('discord.js-commando')

module.exports = class baddobby extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'baddobby',
			aliases: ['badd'],
			group: 'fun',
			memberName: 'baddobby',
			description: 'BAD DOBBY! BAD DOBBY!',
			throttling: {
				usages: 1,
				duration: 30,
			},
		});
	}
run(message) {
	var mention = message.mentions.users.first()
	return message.say(`**You is a Bad Dobby!** ${mention|| ""}`, {files: ["./resources/gifs/baddobby.gif"]});


}


};