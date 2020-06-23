const commando = require ('discord.js-commando')

module.exports = class snapeslap extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'snapeslap',
			aliases: ['snapesl'],
			group: 'fun',
			memberName: 'snapeslap',
			description: 'get snape slaped',
			throttling: {
				usages: 1,
				duration: 30,
			},
		});
	}
run(message) {
	var snapeslapRoles = [
        'Dev',
        'Yr7'
    ]
    var hasRole = false;
    snapeslapRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
	})
	if(hasRole === true){
	return message.say('Control your emotions. Discipline your mind!', {files: ["./resources/gifs/snapeslap.gif"]});
}else{
return message.say('Incorrect Year')
}
}
}
