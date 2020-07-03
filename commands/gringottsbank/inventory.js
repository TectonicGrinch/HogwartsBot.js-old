const commando = require ('discord.js-commando')

module.exports = class inventory extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'inventory',
			aliases: ['inv'],
			group: 'gringottsbank',
			memberName: 'inventory',
			description: 'Request to see your stored items.',
		});
	}


	async run(message, args) {
		const target = message.mentions.users.first() || message.author;
const user = await Users.findOne({ where: { user_id: target.id } });
const items = await user.getItems();

if (!items.length) return message.reply(`${target.tag} has nothing!`);
return message.reply(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);


	}
}