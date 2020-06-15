const commando = require ('discord.js-commando')

module.exports = class morsmordre extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'morsmordre',
			aliases: ['morsem','morsemor'],
			group: 'spells',
			memberName: 'morsmordre',
			description: 'Make the sky above bare The Dark Lords mark. **Death Eater Restricted**',
			throttling: {
				usages: 1,
				duration: 30,
			},
		});
	}
run(message) {
    if(message.member.roles.find("name", "Death Eater")){

    return message.say('*You mark the sky with the presence of The Dark Lord* ', {files: ["./resources/gifs/morsmordre.gif"] });
}else{
    return message.say('*Death Eater restricted.*');
}



}
}