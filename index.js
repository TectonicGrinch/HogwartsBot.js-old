const commando = require('discord.js-commando');
const bot = require('discord.js')
const Canvas = require('canvas');
const path = require('path');
const oneLine = require('common-tags').oneLine;
const Discord = require('discord.js.old');
const client = new commando.Client({
	owner: '184191493919997952',
	commandPrefix: '>',
	invite: 'https://discord.gg/YB8fmwe'
});

client.login( 'NzA3NjQ0NDA4MDM1NTQxMTM1.Xrg0rg.nK_gmW5vfVyvCDr0NE3AZCxCC58' ).token;

client
	.on('error', console.error)
	.on('warn', console.warn)
	.on('debug', console.log)
	.on('ready', () => {
		console.log(`Client ready; logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
	})
	.on('disconnect', () => { console.warn('Disconnected!'); })
	.on('reconnecting', () => { console.warn('Reconnecting...'); })
	.on('commandError', (cmd, err) => {
		if(err instanceof commando.FriendlyError) return;
		console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
	})
	.on('commandBlocked', (msg, reason) => {
		console.log(oneLine`
			Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
			blocked; ${reason}
		`);
	})
	.on('commandPrefixChange', (guild, prefix) => {
		console.log(oneLine`
			Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('commandStatusChange', (guild, command, enabled) => {
		console.log(oneLine`
			Command ${command.groupID}:${command.memberName}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('groupStatusChange', (guild, group, enabled) => {
		console.log(oneLine`
			Group ${group.id}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	});
	client.registry
.registerGroups([
	['basic', 'Basic'],
	['hogwarts', 'Hogwarts'],
	['gamemods', 'Game Mods'],
	['other', 'Other'],
	['admin', 'Admin'],
	['quotes', 'Quotes'],
	['roleplay', 'Roleplay'],
	['fun', 'Fun'],
	['house', 'House'],
	['spells', 'Spells'],
	['teams', 'Teams'],
])
	.registerDefaults()
	.registerTypesIn(path.join(__dirname, 'types'))
	.registerCommandsIn(path.join(__dirname, 'commands'));


    // Hagrid suggestion by vahl remember!!!! done. just here for memories 8)
	// Create an event listener for new guild members
	var welcometext = [
        "Welcome to Hogwarts!",
        "Welcome to Diagon Alley.",
        "Welcome to the server.",
        "Welcome to a new year at Hogwarts! Before we begin our banquet, I would like to say a few words. And here they are: Nitwit! Blubber! Oddment! Tweak! -Albus Dumbledore",
		"Welcome to the server.",
		"VELCOM TO MY LEIR AH AH AH AH AHHHH",
		"Welcome to Hogwarts, STAY OUT OF THE HIDDEN FOREST!",
		"Welcome to CK2 Wizarding World",
		"WHAT HOW DID YOU FIND US? uh? i mean Welcome!",
		"Welcome to the Wizarding World... No muggles allowed!",
		"I know whom thou seekest, for thou seekest Merlin; therefore seek no farther, for I am he. Welcome.",
		"you're a wizard Harry!", //Lucerys's one


    ]

		
	client.on("guildMemberAdd", async (member) => {
		const canvas = Canvas.createCanvas(492, 640);
		const ctx = canvas.getContext('2d');
	
		// Since the image takes time to load, you should await it
		const background = await Canvas.loadImage('./resources/pictures/acceptanceletter.jpg');
		// This uses the canvas dimensions to stretch the image onto the entire canvas
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		ctx.font = '28px sans-serif';
		ctx.fillStyle = '#ffffff';
		ctx.fillText(`${member.displayName} Welcome to the server!`, canvas.width / 2.5, canvas.height / 1.8);
		// Use helpful Attachment class structure to process the file for you
		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), './resources/pictures/acceptanceletter.png');
	
		var wtl = Math.floor(Math.random() * welcometext.length);
		  member.send("Welcome to CK2 Wizarding World\n here you may get all your Harry Potter CK2 needs and maybe some fun along the way ;) \n Here are some rules that are enforced on the server. \n -No Cursing \n -No Spamming \n -No Advertising \n -No Discrimination \n -No Racism \n -No Sexism \n -No Being Rude \n -No Trolling \n Overall if you are here for fun you will get fun if you are here to Troll you will be treated as such GIT UNDAH YA BRIDGE :bridge_at_night: jokes aside just don't be a Jerk :).");
		  client.channels.get('711633590445670421').send(' ' + welcometext[wtl])


    
	})



	//client.on("snowflake(id)")