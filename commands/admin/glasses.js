const Discord = require("discord.js");
const commando = require ('discord.js-commando');
const Zoro = require("zoro-api");
module.exports = class glasses extends commando.Command {
	constructor(client) {
		super(client, {
      name: 'glasses',
            group: 'other',
            hidden: true,
			memberName: 'glasses',
			description: 'Where are my glasses?',

			},
		);
	}
    async run(message) {

            var glassesRoles = [
              'Bot Dev',
              'Dev',
      
          ]
          var hasRole = false;
          glassesRoles.forEach(findrole =>{
              if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
          })
          if(hasRole === true){

    	//Get user
        let user = message.mentions.users.first() || message.author;
        //Get the avatarUrl of the user
        let avatar = user.displayAvatarURL({ size: 256 }).replace(".webp", ".png")
        //Loading message
        const msg = await message.channel.send("Generating ...")
        //Generating the image
        let img = await Zoro.trash(avatar)
        //Adding the image as an attachement
        let attachment = new Discord.MessageAttachment(img, "glasses.png");
        //Sending the image and delete the loading message
        message.channel.send(attachment) && msg.delete();
          }else{

    }
}
 
}


