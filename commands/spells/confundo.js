const commando = require ('discord.js-commando')

module.exports = class confundo extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'confundo',
			group: 'spells',
			memberName: 'confundo',
			description: 'Confuses the target basically minus 100IQ **Year 6 Spell**',
			throttling: {
				usages: 1,
				duration: 20,
			},
		});
	}
async run(message) {
	var confundoRoles = [
		'Dev',
		'Bot Dev',
        'Renowned Wizard',
        'Pheonix',
        'Moderator',
        'Yr6',
        'Yr7'
    ]
    var hasRole = false;
    confundoRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    var mention = message.mentions.users.first()

    if(hasRole === true){
		message.reply(`*Uses Confundo on ${mention ||'a student' } and they are now in a confused state.*`, {files:['./resources/gifs/confundo.gif']})
        //code when has role
    }
    else{
		//code when has no role
		message.reply('This spell is too powerful for you.')

    }




}
}