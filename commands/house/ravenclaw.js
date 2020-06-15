const commando = require ('discord.js-commando')

module.exports = class ravenclawmotto extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'ravenclawmotto',
			aliases: ['ravenclawm','ravm'],
			group: 'house',
			memberName: 'ravenclawmotto',
			description: 'Sends a message with house motto of *House* you are in. **It is house restricted.**',
			throttling: {
				usages: 1,
				duration: 10,
			},
		});
	}
run(message) {
    if(message.member.roles.find("name", "Ravenclaw")){
    return message.say('*Wit beyond measure is mans greatest treasure*', {files: ["./resources/emotes/ravenclaw.png"]});
      }else{
    return message.say('*Incorrect House!*');
      }



}
}