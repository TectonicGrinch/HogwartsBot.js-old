const commando = require ('discord.js-commando')

module.exports = class dumbledorequote extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'dumbledorequote',
			aliases: ['dumbledoreq','dumbleq'],
			group: 'quotes',
			memberName: 'dumbledorequote',
			description: 'Ask for a Dumbledore Quote.',
		});
	}
    
    async run(message, args) {
        var dumbledorequotelist = [
        "“It does not do to dwell on dreams and forget to live.”",
        "“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”",
        "“The truth. It is a beautiful and terrible thing, and should therefore be treated with caution.”",
        "“One can never have enough socks.”",
        "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
        "“You fail to recognize that it matters not what someone is born, but what they grow to be!”",
        "“Differences of habit and language are nothing at all if our aims are identical and our hearts are open.”",
        "“Numbing the pain for a while will make it worse when you finally feel it.”",
        "“Have you any idea how much tyrants fear the people they oppress? All of them realize that, one day, amongst their many victims, there is sure to be one that rises against them and strikes back!”",
        "“It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it.”",

    ]

        var dumbledoreQuotes = Math.floor(Math.random() * dumbledorequotelist.length);
    
         message.reply("__**Dumbledore Quote:**__ " + dumbledorequotelist[dumbledoreQuotes]);
        }
       
    }
