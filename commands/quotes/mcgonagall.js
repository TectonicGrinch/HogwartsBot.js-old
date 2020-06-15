const commando = require ('discord.js-commando')

module.exports = class McGonaGall extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'mcgonagallquote',
			aliases: ['mcgq','mcgonagall'],
			group: 'quotes',
			memberName: 'mcgonagallquote',
			description: 'Ask Prof.McGonagall for a quote.',
		});
	}
    
    async run(message, args) {
        var mcgonagallQuotes = [
        "“We teachers are rather good at magic, you know.”",
        "“Harry witnessed Professor McGonagall walking right past Peeves who was determinedly loosening a crystal chandelier and could have sworn he heard her tell the poltergeist out of the corner of her mouth, It unscrews the other way”",
        "“Don’t tell me what I can and can’t do, Potter.”",
        "“Now, the Vanishing Spell –    **Hem, hem.**    I wonder,   said Professor McGonagall in cold fury, turning on Professor Umbridge,   how you expect to gain an idea of my usual teaching methods if you continue to interrupt me? You see, I do not generally permit people to talk when I am talking.”",
        "“**Humph,** snorted Professor McGonagall [to Neville]. It’s high time your grandmother learned to be proud of the grandson she’s got, rather than the one she thinks she ought to have.  ”",
        "“**Hogwarts is threatened!** shouted Professor McGonagall. Man the boundaries, protect us, do your duty to our school!”",
        "“**Get back!** shouted Ron, and he, Harry and Hermione flattened themselves against a door as a herd of galloping desks thundered past, shepherded by a sprinting Professor McGonagall. She appeared not to notice them: her hair had come down and there was a gash on her cheek. As she turned the corner, they heard her scream: **CHARGE!**”",
        "“This boy has as much chance of becoming an Auror as Dumbledore has of ever returning to this school.”",
        "“*A very good chance, then,* said Professor McGonagall.”",
        "“I – I didn't think –That,*said Professor McGonagall, is obvious.”",
        "“My grandmother thinks Charms is a soft option, mumbled Neville.Take Charms, said Professor McGonagall, and I shall drop Augusta a line reminding her that just because she failed her Charms O.W.L., the subject is not necessarily worthless.”",
        "“So,” sneered Fudge, recovering himself, “you intend to take on Dawlish, Shacklebolt, Dolores, and myself single-handed, do you, Dumbledore?”“Merlin’s beard, no,” said Dumbledore, smiling. “Not unless you are foolish enough to force me to.”“He will not be single-handed!” said Professor McGonagall loudly, plunging her hand inside her robes.“Oh yes he will, Minerva!” said Dumbledore sharply. “Hogwarts needs you!”",
        "“*Is it true that you shouted at Professor Umbridge?* *Yes,* said **Harry.**You called her a liar?**Yes.**You told her He Who Must Not Be Named is back?**Yes.** Professor McGonagall sat down behind her desk, frowning at Harry. Then she said, *Have a biscuit, Potter.*”"

    ]

        var pmq = Math.floor(Math.random() * mcgonagallQuotes.length);
    
         message.reply("**__Professor McGonagall Quote:__** " + mcgonagallQuotes[pmq]);
        }
       
    }

    //suggested by Lucerys