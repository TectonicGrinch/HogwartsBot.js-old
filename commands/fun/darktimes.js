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
	var darktimesRoles = [
        'Dev',
        'Renowned Wizard',
        'Pheonix'
    ]
    var hasRole = false;
    darktimesRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
	})
	if(hasRole === true){
    return message.say('These are dark times. . .', {files: ["./resources/videos/darktimes.mp4"]});
	
    }else{
		return message.say('You are not a patreon')
 



    }
    
    
    
    }
    
}

