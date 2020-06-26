const commando = require ('discord.js-commando')

module.exports = class slytherinmotto extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'slytherinmotto',
			aliases: ['slytherinm','slym'],
			group: 'house',
			memberName: 'slytherinmotto',
			description: 'Sends a message with house motto of *House* you are in. **It is house restricted.**',
			throttling: {
				usages: 1,
				duration: 10,
			},
		});
	}
run(message) {
    if(message.member.roles.cache.find(role => role.name === "Slytherin")){
    return message.say('*Slytherin will help you on your way to greatness*', {files: ["./resources/emotes/slytherin.png"]});
      }else{
    return message.say('*Incorrect House!*');
      }



}
}