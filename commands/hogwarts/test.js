const commando = require ('discord.js-commando')

module.exports = class test extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'test',
			group: 'hogwarts',
			memberName: 'test',
			description: 'test',

		});
	}

async run(message, args) {
const filter = (reaction, user) => {
    return reaction.emoji.name === '➡️' && user.id === message.author.id;
};

const collector = message.createReactionCollector(filter, { time: 15000 });

collector.on('collect', (reaction, user) => {
    console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
    message.say('true')
});



}}
