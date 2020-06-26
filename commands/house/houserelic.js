const commando = require ('discord.js-commando')

module.exports = class houserelic extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'houserelic',
			group: 'house',
			memberName: 'houserelic',
			description: 'Summon your houses relic',
			throttling: {
				usages: 1,
				duration: 20,
			},
		});
	}

	run(message) {
    if(message.member.roles.cache.find(role => role.name === "Gryffindor")){
    return message.reply('*Pulls the Sword of Gryffindor from The Sorting Hat*', {files: ["./resources/pictures/ragnuksword.jpg"]});
      }else{
        if(message.member.roles.cache.find(role => role.name === "Slytherin")){
            return message.reply('*Finds the locket of Salazar Slytherin*', {files: ["./resources/pictures/salazarlocket.jpg"]});
              }else{
                if(message.member.roles.cache.find(role => role.name === "Hufflepuff")){
                    return message.reply(`*Finds Hufflepuff's Cup*`, {files: ["./resources/pictures/helgacup.jpg"]});
                      }else{
                        if(message.member.roles.cache.find(role => role.name === "Ravenclaw")){
                            return message.reply(`*Finds Ravenclaw's Diadem*`, {files: ["./resources/pictures/rowenadiadem.jpg"]});
                              }else{
                                  return message.reply('No Houses found.')
      }
	};
              }
            }
        }
    }