const commando = require ('discord.js-commando')

module.exports = class ck2mod extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'ck2mod',
			aliases: ['ck2','ck2m'],
			group: 'other',
			memberName: 'ck2mod',
			description: 'Sends info on the CK2Mod Wizarding World',
			throttling: {
				usages: 1,
				duration: 40,
			},
		});
	}
run(message) {
return message.author.send('The __Crusader Kings II__ mod **Wizarding World** \n is a Harry Potter themed mod created by \n :blue_circle: Vahlgoul \n :blue_circle: Wayfire \n :blue_circle: Aleros \n https://www.moddb.com/mods/crusader-kings-2-wizarding-world');




}
}