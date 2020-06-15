const commando = require ('discord.js-commando')

module.exports = class snapequote extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'snapequote',
			aliases: ['snape','snapeq'],
			group: 'quotes',
			memberName: 'snapequote',
			description: 'Ask Severus Snape for a quote.',
		});
	}
    
    async run(message, args) {
        var snapeQuotes = [
        "“There is no need to call me *‘sir’*, **Professor**.”",
        "“*The Dark Arts are many, varied, ever-changing, and eternal.* Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before. You are fighting that which is *unfixed, mutating, indestructible*.”",
        "“Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears. “After all this time?” *“Always,”* said Snape.””",
        "“That is just as well, Potter,” said Snape coldly, “because you are neither *special* nor *important*, and it is **not** up to you to find out what the Dark Lord is saying to his Death Eaters.” “**No** — that’s *your* job, isn’t it?” Harry shot at him. He had not meant to say it; it had burst out of him in temper. For a long moment they stared at each other, Harry convinced he had gone too far. But there was a curious, almost satisfied expression on Snape’s face when he answered. “*Yes*, Potter,” he said, his eyes glinting. “That **is** my job.”",
        "“Well, it may have escaped your notice, but *life isn’t fair.*”",
        "“You are here to learn the subtle science and exact **art** of potion-making. As there is little foolish wand-waving here, many of you will hardly believe this is magic. I don’t expect you will really understand the *beauty of the softly simmering cauldron with its shimmering fumes, the delicate power of liquids that creep through human veins, bewitching the mind, ensnaring the senses. . . I can teach you how to bottle fame, brew glory, even stopper death* — if you aren’t as big a bunch of dunderheads as I usually have to teach.”",
        "“**Albus Severus,**” Harry said quietly, so that nobody but Ginny could hear, and she was tactful enough to pretend to be waving to Rose, who was now on the train, “you were named for two headmasters of Hogwarts. **One of them** was a Slytherin and he was probably the bravest man I ever knew.”",
        "“Then **you** will find yourself *easy prey* for the Dark Lord! Fools who wear their hearts proudly on their sleeves, who cannot control their emotions, who wallow in sad memories and allow themselves to be provoked this *easily* — **weak people,** in other words — they stand no chance against his powers! He will *penetrate* your mind with absurd **ease**, Potter!”",
        "“Mr. Moony presents his compliments to Professor Snape, and begs him to keep his *abnormally* **large** nose out of other people’s business. Mr. Prongs agrees with Mr. Moony, and would like to add that Professor Snape is an ugly git. Mr. Padfoot would like to register his astonishment that an *idiot* like that ever became a professor. Mr. Wormtail bids Professor Snape good day, and advises him to wash his hair, the *slimeball*.”",
        "“*Ah yes*,” he said softly, “*Harry Potter. Our new* — **celebrity**.”",
        "“Yes, it is easy to see that nearly six years of magical education have not been **wasted** on you, Potter. *Ghosts are transparent.*”",
        "“That is the **second** time you have spoken out of turn, Miss Granger,” said Snape coolly. “Five more points from Gryffindor *for being an insufferable know-it-all.*”",
        "“*Kill me then,*” panted Harry, who felt no fear at all, but only rage and contempt. “*Kill me like you killed him, you coward —*”",
        "“Her son **lives**. He has her eyes, **precisely** her eyes. *You remember the shape and color of Lily Evans’s eyes, I am sure?*” “**DON’T!**” bellowed Snape. “*Gone… dead…*” “Is this remorse, Severus?” “*I wish… I wish I were dead…*” “*And what use would that be to anyone?*” said Dumbledore **coldly.**”",
        "“There was a long pause, and slowly Snape regained control of himself, mastered his own breathing. At last he said, ‘Very well. Very well. But never – **never tell,** Dumbledore! This must be between us! Swear it! I cannot bear… especially *Potter’s son…* I want your **word!**’ ‘My word, Severus, that I shall never reveal the best of you?’ Dumbledore sighed, looking down into Snape’s ferocious, anguished face. ‘*If you insist…*’”",
        "“I have *spied* for you and *lied* for you, put myself in mortal danger for you. *Everything was supposed to be to keep Lily Potter’s son safe.* Now you tell me you have been raising him like a *pig for slaughter —*”",
        "“*The mind is **not** a book, to be opened at will and examined at leisure.*”",
        "“Would you like me to do it **now?**” asked Snape, his voice heavy with irony. “*Or would you like a few moments to compose an epitaph?*”",
        "“But somebody else had spoken Snape’s name, quite softly. “*Severus . . .*” The sound frightened Harry beyond anything he had experienced all evening. For the first time, Dumbledore was pleading. Snape gazed for a moment at Dumbledore, and there was revulsion and hatred etched in the harsh lines of his face. “*Severus . . . please . . .*” Snape raised his wand and pointed it directly at Dumbledore. “**Avada Kedavra!**” A jet of green light shot from the end of Snape’s wand and hit Dumbledore squarely in the chest. Harry’s scream of horror never left him; *silent and unmoving, he was forced to watch as Dumbledore was blasted into the air.* For a split second, he seemed to hang suspended beneath the shining skull, and then he fell slowly backward, like a great rag doll, over the battlements and out of sight.”",
        "“Tut, tut — fame *clearly* isn’t everything.”",
        "*“Look...at...me...*” he whispered. The green eyes found the black, but after a second, something in the depths of the dark pair seemed to vanish, leaving them fixed, blank, and empty. The hand holding Harry thudded to the floor, and Snape moved no more.”",
	    "*“It is real, isn’t it? It’s not a joke?* Petunia says you’re lying to me. Petunia says there isn’t a Hogwarts. *It is real, isn’t it?*” *“It’s real for us,”* said Snape. **“Not for her.”**",
	    "“Detention, Saturday night, my office,” said Snape. “I do not take cheek from anyone, Potter . . . *not even ‘the Chosen One.’*”",
	    "“The mind is a complex and many-layered thing, Potter... *or at least, most minds are...*”",
	    "“And what will you give me in return, Severus?’ ‘In – in return?’ Snape gaped at Dumbledore, and Harry expected him to protest, but after a long moment he said, *‘Anything...*”",
	    "“Severus Snape wasn't yours, Snape was Dumbledore's, Dumbledore's from the moment you started hunting down my mother!... He was Dumbledore's spy from the moment you threatened her, and he's been working against you ever since!”",
	    "“Maybe he's left, because he missed out on the Defence Against the Dark Arts job again!” “Or he might have been sacked! I mean, everyone hates him —” “Or maybe he's waiting to hear why you two didn't arrive on the school train.”",
	    "“*Well, well, well*, I never thought I'd meet a third-year class who wouldn't even recognise a werewolf when they saw one. I shall make a point of informing Professor Dumbledore how very behind you all are.”",
	    "“Ah, yes. The time has come for answers, whether he wants to give them or not. Have you bought the Veritaserum?” “I'm afraid you have used up all my stores interrogating students... Unless you wish to poison Potter — and I assure you, I would have the greatest sympathy if you did — I cannot help you.”"
		
    ]

        var sql = Math.floor(Math.random() * snapeQuotes.length);
    
         message.reply("__Snape Quote:__ " + snapeQuotes[sql]);
        }
       
    }

//  quotes "“text”",

//suggested and edited by KingMyrddin