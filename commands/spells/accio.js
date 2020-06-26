const commando = require ('discord.js-commando')

module.exports = class accio extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'accio',
			aliases: ['acci0'],
			group: 'spells',
			memberName: 'accio',
			description: 'Use a magical force to pull an object towards you.',
			throttling: {
				usages: 1,
                duration: 15,
                
                
			},
		});
	}
run(message) {
		const args = message.content.split(" ");
		args.shift();
	
		const subject = args[0];
		
		if (!subject) {
			return message.say("*you use accio but nothing happens*")
		} else if (subject === "cup") {
			return message.say("*A cup comes flying towards you.*");
		} else if (subject === "meme") {
            var number = 43; 
            var imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            return message.say("*A Meme comes flying towards the chat.*", {files: ['./resources/memes/' + imageNumber + ".jpg"]} );
        } else if (subject === "bowl") {
            return message.say("*A bowl comes flying towards you.*");
        } else if (subject === "broom") {
            return message.say("*Your broom comes flying towards you.* :broom:");
        } else if (subject === "death") {
            return message.say("*From the midst of the darkness a figure emerges...* :skull_crossbones:");
        } else if (subject === "dumbledore") {
            return message.say("*You hear an explosion in the distance and see what appears to be an object flying towards you. As it lands in front of you, you realise what you'd done... Dumbledore's decrepit body lies at your feet...* :cry:");
        } else if (subject === "mercy") {
            return message.say("*I have no mercy >:D*");
        } else if (subject === "accio") {
            return message.say("*You try to accio accio, but accio does nothing.*");
        } else if (subject === "fork") {
            return message.say("*A fork flies into your open hand.*");
        } else if (subject === "spoon") {
            return message.say("*A spoon flies into your open hand.*");
        } else if (subject === "knife") {
            return message.say("*A knife flies into your open hand.*");
        } else if (subject === "nose") {
            return message.say("*I hear Voldemort still searches for you.*:nose: ");
        } else if (subject === "hogwartsbot") {
            return message.say("** Am i a joke to you?**");
        } else if (subject === "remote") {
            return message.say("*A remote flies into your hand.*");
        } else if (subject === "ball") {
            return message.say("*A ball bounces towards you.*");
        } else if (subject === "life") {
            return message.say("It's not that simple...");
        } else if (subject === "key") {
            return message.say("*A key flies into your hand.*");
        } else if (subject === "keys") {
            return message.say("*A bunch of keys fly into your hand.*");
        } else if (subject === "horcrux") {
            return message.say("*the spell fizzles...*");
        } else if (subject === "sortinghat") {
            return message.say("I know. . . **Better be. . .** *The Sorting Hat flies towards you,* *You catch it* \n ***Sorting Hat:*** How the devil did I end up here?");
        } else if (subject === "brick") {
            return message.say("*A brick flies into your hand.*");
        } else if (subject === "magazine") {
            return message.say("*A magazine flies into your hand.*");
        } else if (subject === "pillow") {
            return message.say("*A pillow flies at your face.*");
        } else if (subject === "book") {
            return message.say("*A book flies into your hand.*");
        } else if (subject === "sword") {
            return message.say("*A sword flies toward you, and you grab it mid air!*");
        } else if (subject === "newspaper") {
            return message.say("*The paper slaps you in the face!* 🗞️");
        } else if (subject === "biscuit") {
            return message.say("*A biscuit lands in your hand.*");
        } else if (subject === "hat") {
            return message.say("*A hat lands on your head.*");
        } else if (subject === "floo_powder") {
            return message.say("*A bag of floo powder lands into your hand.*");
        } else if (subject === "cloak") {
            return message.say("*A cloak lands infront of you.*");
        } else if (subject === "tea") {
            return message.say("*A cup of tea flies at you, and you realise that maybe you shouldn't had done that.*");
        } else if (subject === "mcgonagall") {
            return message.say("*You see an object hurtling toward you and hear a rather loud howling following it. The object lands at your feet and appears to be a cat, tabby in color. As you reach to touch it, it hisses and leaves a rather large scratch on the top of your hand.*");
        } else if (subject === "voldemort") {
            return message.say("*You try to call upon voldemorts body but nothing happens. It is as if he is hidden or protected from magic.*");
        } else if (subject === "cauldron") {
            return message.say("*A cauldron lands on your head! Ouch!* 💢");
        } else if (subject === "wand") {
            return message.say("*Your wand flies into your hand!* <:elderwand:725739359734726716>");
        } else if (subject === "butterbeer") {
            return message.say("*A butterbeer launches into your hand. Cheers!* 🍺");
        } else if (subject === "galleons") {
            return message.say("*Your galleons are now scattered across the ground!* 💰");







            
            


        }
    }
}