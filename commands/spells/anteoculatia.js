const commando = require ('discord.js-commando')

module.exports = class anteoculatia extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'anteoculatia',
			group: 'spells',
			memberName: 'anteoculatia',
			description: 'make someone grow antlers **Year 3 Spell**',
			throttling: {
				usages: 1,
				duration: 5,
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
        'Yr3',
        'Yr4',
        'Yr5',
        'Yr6',
        'Yr7'
    ]
    var hasRole = false;
    anteoculatiaRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    var mention = message.mentions.users.first()

    if(hasRole === true){
		message.reply(`*Uses Anteoculatia to make ${mention ||'a student' } grow antlers* 🦌`)
        //code when has role
    }
    else{
		//code when has no role
		message.reply('Incorrect Year')

    }




}
}