const commando = require ('discord.js-commando')

module.exports = class aguamenti extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'aguamenti',
			aliases: ['aguamentea'],
			group: 'spells',
			memberName: 'aguamenti',
			description: 'Make water shoot out of the end of your wand.',
			throttling: {
				usages: 1,
                duration: 30,
                
                
			},
		});
	}
run(message) {
		const args = message.content.split(" ");
		args.shift();
		var mention = message.mentions.users.first()
		const subject = args[0];
        
		
		if (!subject) {
			return message.say(`*you wand projects a stream of water*`)
		} else if (subject === mention) {
			return message.say(`*Your wand projects a stream of water at ${mention} and they are now soaked*`)
        } else if (subject === "cup") {
			return message.say("*you fill a cup full of water with aguamenti.* :cup_with_straw: ");
		} else if (subject === "bowl") {
			return message.say("*you fill a bowl full of water with aguamenti.*");
		} else if (subject === "cistern") {
			return message.say("*you fill a cistern full of water with aguamenti.*");
		} else if (subject === "container") {
			return message.say("*you fill a container full of water with aguamenti.*");
		} else if (subject === "mug") {
			return message.say("*you fill a mug full of water with aguamenti.*");
		} else if (subject === "lake") {
			return message.say("*you shoot aguamenti at a lake and nothing seems to happen*");
		} else if (subject === "discord") {
		    if(message.member.roles.find("name", "Dev")){
			return message.say("*you shoot aguamenti at the discord chat* **R.I.P**\n **WHY HAVE YOU FORSAKEN US!!!**", {files: ["./resources/gifs/tsunami.gif"]})
			}else{
				return message.say("**This spell is too powerful for you.**")

			}
		} else if (subject === "aguamenti") {
			return message.say("*Your spell backfires and you are feeling a little less dry then before* :sweat_drops: ")
		
		} else if (subject === "bath") {
			return message.say("*You fill a bath full of water with aguamenti* :bathtub: ")
		} else if (subject === "earth") {
		    if(message.member.roles.find("name", "Dev")){
			return message.say("*you shoot aguamenti at the earth*\n **WHAT IS WRONG WITH YOU** \n*screaming intensifies*", {files: ["./resources/gifs/aguamentiearth.gif"]})
			}else{
			return message.say("**This spell is too powerful for you.**")
			}



		
		
		
		
		}
	  



}
}