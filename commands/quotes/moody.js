const commando = require ('discord.js-commando')

module.exports = class alastormoody extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'alastormoody',
			aliases: ['amoody','moodyq'],
			group: 'quotes',
			memberName: 'alastormoody',
			description: 'Ask Alastor Moody for a quote',
		});
	}
    
    async run(message, args) {
        var alastormoodyQuotes = [
        "“At that moment, Harry fully understood for the first time why people said Dumbledore was the only wizard Voldemort had ever feared. The look upon Dumbledore's face as he stared down at the unconscious form of Mad-Eye moody was more terrible than Harry could have ever imagined. There was no benign smile upon Dumbledore's face, no twinkle in the eyes behind the spectacles. There was cold fury in every line of the ancient face; a sense of power radiated from Dumbledore as though he were giving off burning heat.”",
        "“**Decent** people are so easy to manipulate, Potter.”",
        "“Even You-Know-Who can't split himself into seven.”",
        "“Someone creeping into his yard in the dead of night? More likely there's a very shell-shocked cat wandering somewhere, covered in potato peelings.”",
        "“Course Dumbledore trusts you,” *growled* ***Moody.*** “He’s a trusting man, isn’t he? Believes in second chances. But me — I say there are spots that don’t come off, Snape. Spots that never come off, d’you know what I mean?”",
        "“To Harry Potter — ***the boy who lived!***”",
        "“Mad Eye' Moody on the Avada Kedavra curse: \n “Not nice,” he said calmly. “Not pleasant. And there's no counter curse. There's no blocking it. Only one known person has ever survived it, and he's sitting right in front of me.”",
        "“I say there are spots that don't come off.... Spots that never come off, d'you know what I mean?”",
        "“Nothing like a nighttime stroll to give you ideas.”",
        "“And do I look like the kind of man that can be intimidated?” barked Uncle Vernon. “Well...” said Moody, pushing back his bowler hat to reveal his sinisterly revolving eye. Uncle Vernon lept backward in horror and collided painfully with a luggage trolley. “Yes, I'd have to say you do, Dursley.”",
    ]

        var amq = Math.floor(Math.random() * alastormoodyQuotes.length);
    
         message.reply("__**Alastor Moody Quote:**__ " + alastormoodyQuotes[amq]);
        }
       
    }