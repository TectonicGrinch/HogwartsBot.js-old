const commando = require ('discord.js-commando')

module.exports = class anapneo extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'anapneo',
			group: 'spells',
			memberName: 'anapneo',
			description: 'Clear someones or your own airway **Year 2 Spell**',
			throttling: {
				usages: 1,
				duration: 5,
			},
		});
	}
async run(message) {
	var anapneoRoles = [
		'Dev',
		'Bot Dev',
        'Renowned Wizard',
        'Pheonix',
        'Moderator',
        'Yr2',
        'Yr3',
        'Yr4',
        'Yr5',
        'Yr6',
        'Yr7'
    ]
    var hasRole = false;
    anapneoRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    var mention = message.mentions.users.first()

    if(hasRole === true){
		message.reply(`*Uses Anapneo to clear ${mention ||'their own' } airways.*`)
        //code when has role
    }else{
		//code when has no role
		message.reply('Incorrect Year')

    }




}
}