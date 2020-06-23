const commando = require ('discord.js-commando')

module.exports = class snapeobviously extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'snapesobviously',
			aliases: ['snapeo','obviously'],
			group: 'fun',
			memberName: 'snapeobviously',
			description: 'Obviously. . . **Year 5** command',
		});
	}
run(message) {
	
	var snapeobviouslyRoles = [
        'Dev',
        'Yr5',
        'Yr6',
        'Yr7'
    ]
	var hasRole = false;
    snapeobviouslyRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })

    if(hasRole === true){
    return message.say('** Obviously...**', {files: ["./resources/gifs/snapeobviously.gif"]});
      }else{
    return message.say('**Incorrect Year!*');
      }



}
}