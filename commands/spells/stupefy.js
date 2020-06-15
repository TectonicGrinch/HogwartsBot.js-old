const commando = require ('discord.js-commando')

module.exports = class stupefy extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'stupefy',
			aliases: ['stupe','mute','stupid fly'],
			group: 'spells',
			memberName: 'stupefy',
			description: 'Rend a person stunned (mute)',
		});

	}
}

