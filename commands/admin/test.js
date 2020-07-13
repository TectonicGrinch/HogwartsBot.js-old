const Discord = require("discord.js");
const commando = require ('discord.js-commando');
const Zoro = require("zoro-api");
module.exports = class cgif extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'cgif',
			group: 'admin',
			memberName: 'cgif',
			description: 'cgif',

			},
		);
	}



async run(message, args) {
    var cgifRoles = [
        'Dev',
        'Bot Dev',

    ]
    var hasRole = false;
    cgifRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
//Helper roles
if(hasRole === true){
 //Get args (link)
       let messageArray = message.content.split(' ');
       let args = messageArray.slice(1);
       //Get user
       let user = message.mentions.users.first() || message.author;
       //Get the avatarUrl of the user
       let avatar = user.displayAvatarURL({ size: 512 }).replace(".webp", ".png")
       //If no link
       if (!args[0]) return message.channel.send("Please indicate the link of an image !")
       //Loading message
       const msg = await message.channel.send("Generating ...")

       try {

           //Generating the image
           let img = await Zoro.cgif(avatar, args.join(" "))
           //Adding the image as an attachement
           let attachment = new Discord.MessageAttachment(img, "cgif.gif");
           //Sending the image and delete the loading message
           message.channel.send(attachment) && msg.delete();

       } catch (e) {

           //The bot sends the error to the console
           console.log(e)
           //Error message
           return message.channel.send("An error occured, please check the link of your image !") && msg.delete();

       }
    }else{

       }
    }
}
