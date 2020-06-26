const commando = require ('discord.js-commando')

module.exports = class cantis extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'cantis',
			group: 'spells',
			memberName: 'cantis',
			description: 'make someone break into song **Year 7 Spell**',
			throttling: {
				usages: 1,
				duration: 15,
			},
		});
	}
async run(message) {
	var anteoculatiaRoles = [
		'Dev',
		'Bot Dev',
        'Renowned Wizard',
        'Pheonix',
        'Moderator',
        'Yr7'
    ]
    var hasRole = false;
    anteoculatiaRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    var mention = message.mentions.users.first()

    if(hasRole === true){
		message.reply(`*Uses Cantis to make ${mention ||'a student' } break out into song*🎵`, {files: ['./resources/gifs/singing.gif']})
        //code when has role
    }
    else{
		//code when has no role
		message.reply('Incorrect Year')

    }




}
}