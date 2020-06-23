const commando = require ('discord.js-commando')

module.exports = class vahlcommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'vahlcommand',
			aliases: ['vahc','vahlc'],
			group: 'other',
			memberName: 'vahlcommand',
			description: 'Are you Vahlgoul lets find out?.',
			hidden: true,
			throttling: {
				usages: 1,
				duration: 10,
			},
		});
	}
run(message) {
    //member id 477724737250787338
    if (message.author.id == "477724737250787338") {
		message.react('✅')
return message.say('*Darkness descends*... You are indeed **Vahlgoul** :skull_crossbones: ', {files: ['./resources/gifs/vahl.gif']}) 

}else{
	message.react('❌')
return message.say('Denied! you are not Vahlgoul', {files: ['./resources/gifs/denied.gif']})




}
}}
