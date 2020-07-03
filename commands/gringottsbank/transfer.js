const commando = require ('discord.js-commando')

module.exports = class transfer extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'transfer',
			group: 'gringottsbank',
			memberName: 'transfer',
			description: 'Transfer Money between balances(people)',
		});
	}



	async run(message, args) {
		const currentAmount = currency.getBalance(message.author.id);
const transferAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
const transferTarget = message.mentions.users.first();

if (!transferAmount || isNaN(transferAmount)) return message.reply(`Sorry ${message.author}, that's an invalid amount.`);
if (transferAmount > currentAmount) return message.reply(`Sorry ${message.author}, you only have ${currentAmount}.`);
if (transferAmount <= 0) return message.reply(`Please enter an amount greater than zero, ${message.author}.`);

currency.add(message.author.id, -transferAmount);
currency.add(transferTarget.id, transferAmount);

return message.reply(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${currency.getBalance(message.author.id)}💰`);

	}
}