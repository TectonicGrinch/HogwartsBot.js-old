const commando = require ('discord.js-commando')

module.exports = class hufflepuffmotto extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'hufflepuffmotto',
			aliases: ['hufflepuffm','hufm'],
			group: 'house',
			memberName: 'hufflepuffmotto',
			description: 'Sends a message with house motto of *House* you are in. **It is house restricted.**',
			hidden: false,
			throttling: {
				usages: 1,
				duration: 10,
			
			},
		});
	}
run(message) {
    if(message.member.roles.cache.find(role => role.name === "Hufflepuff")){
    return message.say('*Those patient Hufflepuffs are true, and unafraid of toil*', {files: ["./resources/emotes/hufflepuff.png"]});
      }else{
    return message.say('*Incorrect House!*');
      }



}
}