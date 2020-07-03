const commando = require ('discord.js-commando')

module.exports = class shop extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'shop',
			group: 'gringottsbank',
			memberName: 'shop',
			description: 'Pull up the shop.',
		});
	}



	async run(message, args) {
	const items = await CurrencyShop.findAll();
return message.reply(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });

	}
}