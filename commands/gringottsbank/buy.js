const commando = require ('discord.js-commando')

module.exports = class buy extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'buy',
			group: 'gringottsbank',
			memberName: 'buy',
			description: 'Buy something.',
		});
	}

	async run(message, args) {
		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: commandArgs } } });
		if (!item) return message.reply(`That item doesn't exist.`);
		if (item.cost > currency.getBalance(message.author.id)) {
			return message.reply(`You currently have ${currency.getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
		}
		
		const user = await Users.findOne({ where: { user_id: message.author.id } });
		currency.add(message.author.id, -item.cost);
		await user.addItem(item);
		
		message.reply(`You've bought: ${item.name}.`);
	}
}