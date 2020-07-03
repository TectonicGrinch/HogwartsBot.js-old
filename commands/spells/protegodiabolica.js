
const commando = require ('discord.js-commando')
module.exports = class protegodiabolica extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'protegodiabolica',
			group: 'spells',
			memberName: 'protegodiabolica',
            description: 'Create a circle of dark flames to kill any enemy that steps within **Dark Arts Spell**',
        
			throttling: {
				usages: 1,
                duration: 10,
                
                
			},
		});
	}
run(message) {
    var repelomuggletumRoles = [
        'Dev',
        'Bot Dev',
    ]
    var hasRole = false;
    repelomuggletumRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    if(hasRole === true){
        var mention = message.mentions.users.first()
message.reply(`Creates a circle of flames to protect from ${mention || '**Enemies**.'}`, {files:['./resources/gifs/protegodiabolica.gif']})
    }else{
        message.reply('This spell is too powerful for you.')

    }
}
}