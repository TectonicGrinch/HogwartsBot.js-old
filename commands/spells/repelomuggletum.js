//repelomuggletum
const commando = require ('discord.js-commando')
module.exports = class repelomuggletum extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'repelomuggletum',
			group: 'spells',
			memberName: 'repelomuggletum',
            description: 'This spell can be used to create an area that muggles cant see famously used on Hogwarts **Year 2 Spell**',
        
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
        'Yr2',
        'Yr3',
        'Yr4',
        'Yr5',
        'Yr6',
        'Yr7'
    ]
    var hasRole = false;
    repelomuggletumRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
    if(hasRole === true){
message.reply('Creates an invisble barrier to protect from **muggles**.')
    }else{
        message.reply('This spell is too powerful for you.')

    }
}
}