const commando = require ('discord.js-commando')

module.exports = class snapeobviously extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'snapesobviously',
			aliases: ['snapeo','obviously'],
			group: 'fun',
			memberName: 'snapeobviously',
			description: 'obviously Year 5 command',
		});
	}
run(message) {
	if(message.member.roles.find("name", "year5")){
    return message.say('** Obviously...**', {files: ["./resources/gifs/snapeobviously.gif"]});
      }else{
    return message.say('**Incorrect Year!*');
      }



}
}