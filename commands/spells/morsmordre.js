const commando = require ('discord.js-commando')

module.exports = class morsmordre extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'morsmordre',
			aliases: ['morsem','morsemor'],
			group: 'spells',
			memberName: 'morsmordre',
			description: 'Make the sky above bare The Dark Lords mark. **Patreon**',
			throttling: {
				usages: 1,
				duration: 30,
			},
		});
	}
async run(message) {
	var morsmordreRoles = [
        'Dev',
        'Renowned Wizard',
        'Pheonix',
        'Moderator'
    ]
    var hasRole = false;
    morsmordreRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })

    if(hasRole === true){
		message.say("*You mark the sky with The Dark Lord's presence.*", {files: ['./resources/gifs/morsmordre.gif']})
        //code when has role
    }
    else{
		//code when has no role
		message.say('You are not powerful enough for this spell.')

    }




}
}