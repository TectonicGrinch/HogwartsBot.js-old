const commando = require ('discord.js-commando')

module.exports = class hagridquote extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'hagridquote',
			aliases: ['hagrid','hagridq'],
			group: 'quotes',
			memberName: 'hagridquote',
			description: 'Ask Hagrid for a quote.',
		});
	}
    
    async run(message, args) {
        var hagridQuotes = [
        "“Ah, go boil yer heads, both of yeh. Harry—yer a wizard.”",
        "“Well, yeh might’ve bent a few rules, Harry, bu’ yeh’re all righ’ really, aren’ you?”",
        "“No good sittin’ worryin’ abou’ it. What’s comin’ will come, an’ we’ll meet it when it does.”",
        "“Ah, *shut up,* ***Dursley,*** yeh great **prune.**”",
        "“Ah, well, people can be stupid abou’ their pets,” said Hagrid wisely. Buckbeak spat a few ferret bones onto Hagrid’s pillow.”",
        "“Don’ you worry, Harry. You’ll learn fast enough. Everyone starts at the beginning at Hogwarts, you’ll be just fine. Just be yerself. I know it’s hard. Yeh’ve been singled out, an’ that’s always hard. But yeh’ll have a great time at Hogwarts — I did — still do, ’smatter of fact”",
        "“I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.”",
        "“Seventeen, eh!” said Hagrid as he accepted a bucket-sized glass of wine from Fred.\n“Six years to the day we met, Harry, d’yeh remember it?”\n “Vaguely,” said Harry, grinning up at him. “Didn’t you smash down the front door, give Dudley a pig’s tail, and tell me I was a wizard?”\n “I forge’ the details,” Hagrid chortled.” ”",
        "“You all righ’?” he said gruffly.\m “Yeah,” said Harry.\n “No, yeh’re not,” said Hagrid. “’Course yeh’re not. But yeh will be.”"
    ]

        var hagridql = Math.floor(Math.random() * hagridQuotes.length);
    
         message.reply("**__Hagrid Quote:__** " + hagridQuotes[hagridql]);
        }
       
    }
