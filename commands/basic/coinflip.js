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
            var msg = flip()
            message.reply(msg);
        }

        function flip() {
            var flip = Math.floor(Math.random() * 100) + 1;
            var currentFlip = null;
            if (flip >= 50) {
                currentflip == 'Heads'
                coinflip.counter[currentflip]++
            } else {
                currentflip == 'Tails'
                coinflip.counter[currentflip]++
            }
            return `<:galleon:727038073678069811>*flips a coin and it lands on* **${currentflip}** ${coinflip.counter[currentflip]}`
        }

        module.exports = coinflip;
