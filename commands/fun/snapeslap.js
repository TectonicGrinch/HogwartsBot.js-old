const commando = require ('discord.js-commando')

module.exports = class snapeslap extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'snapeslap',
			aliases: ['snapesl'],
			group: 'fun',
			memberName: 'snapeslap',
			description: 'get snape slaped',
			throttling: {
				usages: 1,
				duration: 30,
			},
		});
	}
run(message) {
	return message.say('Control your emotions. Discipline your mind!', {files: ["./resources/gifs/snapeslap.gif"]});


}
}