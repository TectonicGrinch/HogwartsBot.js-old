const commando = require ('discord.js-commando');
const sequelize = require('sequelize');
const Discord = require('discord.js');
const currency = new Discord.Collection();


module.exports = class balance extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'balance',
			aliases: ['bal'],
			group: 'gringottsbank',
			memberName: 'balance',
			description: "Request your balance or another user's balance.",
		});
	}





    async run(message, args) {

const target = message.mentions.users.first() || message.author;
return message.say(`${target.tag} has ${currency.getBalance(target.id)}💰`);

    }
}