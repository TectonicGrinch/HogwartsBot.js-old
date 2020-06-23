const commando = require ('discord.js-commando')

module.exports = class besthouse extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'besthouse',
			group: 'other',
			memberName: 'besthouse',
            description: 'best house ever',
            hidden: true,
			throttling: {
				usages: 1,
				duration: 40,
			},
		});
	}
run(message) {
return message.reply('Slytherin is the best house no cap');




}
}