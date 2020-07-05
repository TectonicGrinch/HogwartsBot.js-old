const commando = require('discord.js-commando')

class coinflip extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: ['cf'],
            group: 'basic',
            memberName: 'coinflip',
            description: 'Flip a coin 50/50 chance.',
            counter: {
                Heads: 0,
                Tails: 0
            }
        });
    }
    async run(message, args) {
        message.reply(flip());
    }
}

function flip() {
    var roll = Math.floor(Math.random() * 100) + 1;
    var currentflip = null;
    if (roll >= 50) {
        currentflip = 'Heads'
        this.counter[currentflip]++
    } else {
        currentflip = 'Tails'
        this.counter[currentflip]++
    }
    return `<:galleon:727038073678069811> *flips a coin and it lands on* **${currentflip}**, ${currentflip}, has been flipped a total of ${this.counter[currentflip]} times`
}

module.exports = coinflip;