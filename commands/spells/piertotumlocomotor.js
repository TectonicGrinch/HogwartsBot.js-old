const commando = require ('discord.js-commando')

module.exports = class piertotumlocomotor extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'piertotum locomotor',
			aliases: ['piertotum','plocomotor'],
			group: 'spells',
			memberName: 'piertotumlocomotor',
			description: 'Allows you to animate a statue. **Helper Restricted**',
			throttling: {
				usages: 1,
				duration: 30,
			},
		});
	}
run(message) {
    if(message.member.roles.find("name", "Helper")){
        var piertotuml = [
            "**You tell the statue to watch its step as it passes you by**",
          "**You realise the teachers are not going to be happy about this one**",
            "**You quickly run from the scene of the crime >.>**",
            "**You cringe at the sound of the statue moving its joints**",
            "**You hear a clatter behind and see a student standing idly. You remember them from the sorting ceremony earlier this year. You quickly swear them to secrecy.**"
        ]
    
            var piertotumr = Math.floor(Math.random() * piertotuml.length);
    
    return message.say('*You animate one of the Hogwarts statues to life* ' + piertotuml[piertotumr], {files: ["./resources/gifs/statue.gif"] });
}else{
    return message.say('*Helper restricted.*');
}



}
}