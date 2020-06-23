const commando = require ('discord.js-commando')

module.exports = class viridiancommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'viridiancommand',
			aliases: ['virc','viridian'],
			group: 'other',
			memberName: 'viridiancommand',
			description: 'Are you my creator ViridianZe? lets find out use this command.',
			hidden: true,
			throttling: {
				usages: 1,
				duration: 40,
			},
		});
	}
run(message) {
    //member id 184191493919997952
	if (message.author.id == "184191493919997952") {
		message.react('✅')
 message.say('You are indeed ViridianZe welcome home Master. . .', {files: ['./resources/gifs/welcomemaster.gif']})

}else{
	message.react('❌')
return message.say('Denied! you are not my Master...')





}
}}