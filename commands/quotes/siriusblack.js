const commando = require ('discord.js-commando')

module.exports = class siriusblackquote extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'siriusblackquote',
			aliases: ['siriusblack','sirius','siriusq'],
			group: 'quotes',
			memberName: 'siriusblackquote',
			description: 'Ask for a quote from Sirius Black',
		});
	}
    
    async run(message, args) {
        var siriusblackQuotes = [
        "“The world isn’t split into good people and Death Eaters.”",
        "“I want to commit the murder I was imprisoned for.”",
        "“We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.",
        "“If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.”",
        "“This is how it is — this is why you're not in the Order — you don't understand — there are things worth dying for!”",
        "“You think the dead we loved ever truly leave us?”",
        "“Well, [bad] times like that bring out the best in some people and the worst in others.”",
        "“The ones who love us never really leave us, you can always find them in here. *hand on heart*”",
        "“What's life without a little risk?”",
        "“Then you should have died! Died, rather than betray your friends, as we would have done for you.”",
        "“Normally, I have a very sweet disposition as a dog. In fact, more than once, James suggested that I make the change permanent. The tail I could live with. But the fleas, they’re murder. (said in the third film)”",

    ]

        var siriusblackquotelist = Math.floor(Math.random() * siriusblackQuotes.length);
    
         message.reply("__**Sirius Black Quote:**__ " + siriusblackQuotes[siriusblackquotelist]);
        }
       
    }

