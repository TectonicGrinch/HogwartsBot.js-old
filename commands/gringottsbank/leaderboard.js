const commando = require ('discord.js-commando')

module.exports = class leaderboard extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'leaderboard',
			aliases: ['lboard'],
			group: 'gringottsbank',
			memberName: 'leaderboard',
			description: 'See the top balance.',
		});
	}



	async run(message, args) {
		return message.reply(
			currency.sort((a, b) => b.balance - a.balance)
				.filter(user => client.users.cache.has(user.user_id))
				.first(10)
				.map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
				.join('\n'),
			{ code: true }
		);



	}
}