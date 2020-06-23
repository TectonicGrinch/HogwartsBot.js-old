const commando = require ('discord.js-commando')

module.exports = class thanks extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'thanks',
			aliases: ['thank'],
			group: 'other',
			memberName: 'thanks',
			description: 'Thank someone.',
			throttling: {
				usages: 1,
				duration: 20,
			},
		});
	}
run(message) {
    var mention = message.mentions.users.first()
return message.reply(`Thank*ssSsSs*  ${mention|| ""} 🐍`, {files: ["./resources/gifs/thanks.gif"]});




}
}