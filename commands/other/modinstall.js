const commando = require ('discord.js-commando')

module.exports = class modinstall extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'modinstall',
			aliases: ['modi','modinst'],
			group: 'other',
			memberName: 'modinstall',
			description: 'Sends info on how to install mod.',
			hidden: true,
			throttling: {
				usages: 1,
				duration: 40,
			},
		});
	}
run(message) {
return message.author.send('So you would like to install the CK2: Wizarding World mod? . . . \n WELL OFCOURSE you want to that is why you used this command duh! anyway bellow you will find the resources and below that you will find how to install it. \n **MOD SITE:** \n ');




}
}