const commando = require ('discord.js-commando')

module.exports = class dobbyquote extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'dobbyquote',
			aliases: ['dobby','dobq'],
			group: 'quotes',
			memberName: 'dobbyquote',
			description: 'Ask Dobby for a quote.',
		});
	}
    
    async run(message, args) {
        var dobbyQuotes = [
        "“Oh you is a bad elf, Dobby!”",
        "“Dobby is... free.”",
        "“Dobby has heard of your greatness, sir, but of your goodness, Dobby never knew..”",
        "“Dobby has come to protect, even if he does have to shut his ears in the oven door”",
        "“Dobby is very sorry, Dobby had to iron his hands...”",
        "“Dobby has never been asked to sit down by a wizard -- like an equal -- *sobs*”",
        "“Well...Yes Mr Potter, i am an elf”",
        "“Dobby never meant to kill. Dobby only meant to... just maim or seriously injure.”",
        "“Dobby has no master, Dobby is a free elf, and Dobby has come to save Harry Potter.”",
        "“Dobby is used to death threats, sir. Dobby gets them five times a day at home.”",
        "“Such a beautiful place, to be with friends. Dobby is happy to be with his friend, Harry Potter.”",
        "“Bad Dobby! Bad Dobby!”",
        "“:socks:Socks are Dobby's favourite, favourite clothes sir!”"
    ]

        var ql = Math.floor(Math.random() * dobbyQuotes.length);
    
         message.reply("__Dobby Quote:__ " + dobbyQuotes[ql]);
        }
       
    }

