const commando = require ('discord.js-commando')

module.exports = class darktimes extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'darktimes',
			aliases: ['dtimes'],
			group: 'fun',
			memberName: 'darktimes',
			description: 'These are dark times... **Patreon Restricted**',
			throttling: {
				usages: 1,
				duration: 60,
			},
		});
	}
run(message) {
    if(message.member.roles.find("name", "Pheonix")){

        return message.say('These are dark times. . .', {files: ["./resources/videos/darktimes.mp4"]});
    }else{
        if(message.member.roles.find("name", "Renowned Wizard")){
        return message.say('These are dark times. . .', {files: ["./resources/videos/darktimes.mp4"]});
    }else{

  return message.say('*Patreon restricted.*');



    }
    
    
    
    }
    
}

};