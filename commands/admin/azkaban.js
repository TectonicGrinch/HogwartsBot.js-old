const Discord = require("discord.js");
const commando = require ('discord.js-commando');
const Zoro = require("zoro-api");
module.exports = class azkaban extends commando.Command {
	constructor(client) {
		super(client, {
      name: 'azkaban',
      aliases: ['azkaban'],
            group: 'other',
            hidden: true,
			memberName: 'azkaban',
			description: 'Send someone to azkaban.',

			},
		);
	}
    async run(message) {

    	//Get user
        let user = message.mentions.users.first() || message.author;
        //Get the avatarUrl of the user
        let avatar = user.displayAvatarURL({ size: 256 }).replace(".webp", ".png")
        //Loading message
        const msg = await message.channel.send("Generating ...")
        //Generating the image
        let img = await Zoro.jail(avatar)
        //Adding the image as an attachement
        let attachment = new Discord.MessageAttachment(img, "blur.png");
        //Sending the image and delete the loading message
        message.channel.send(attachment) && msg.delete();
    }
}
 
    

