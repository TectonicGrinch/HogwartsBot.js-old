const commando = require ('discord.js-commando')
module.exports = class caveinimicum extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'caveinimicum',
			group: 'spells',
			memberName: 'caveinimicum',
            description: 'Creates an invisible barrier like repelo muggletum but you are cloaked from everyone around you **Year 4 Spell**',
        
			throttling: {
				usages: 1,
                duration: 10,
                
                
			},
		});
	}
run(message) {
    var caveinimicumRoles = [
        'Dev',
        'Bot Dev',
        'Yr4',
        'Yr5',
        'Yr6',
        'Yr7'
    ]
    var hasRole = false;
    caveinimicumRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    if(hasRole === true){
message.reply(`*Creates a barrier to hide themselves in.*`)
    }else{
        message.reply('This spell is too powerful for you.')

    }
}
}