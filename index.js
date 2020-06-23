const commando = require('discord.js-commando');
const bot = require('discord.js')
const Canvas = require('canvas');
const path = require('path');
const oneLine = require('common-tags').oneLine;
const Discord = require('discord.js.old');
/*
const ReactionRole = require("reaction-role");
const reactionRole = new ReactionRole("NzA3NjQ0NDA4MDM1NTQxMTM1.Xrg0rg.nK_gmW5vfVyvCDr0NE3AZCxCC58");
*/
 
 

const client = new commando.Client({
	owner: '184191493919997952',
	commandPrefix: '>',
	invite: 'https://discord.gg/YB8fmwe'
});

client.login( 'NzA3NjQ0NDA4MDM1NTQxMTM1.Xrg0rg.nK_gmW5vfVyvCDr0NE3AZCxCC58' ).token;
const fs = require('fs');
const images = require("./images.js");
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
	client.on('message', async msg => {
		if(!msg.member || !msg || !msg.guild){
			return;
		}
		//console.log(msg.member.user.username)
		let joined = new Date(msg.member.joinedAt);
		let now = new Date();
		let interval = now - joined; //in milliseconds
		//console.log(interval);
		let weeks = Math.floor(interval / (7 * 24 * 60 * 60 * 1000));//divided bt one week in ms to see how many weeks
		
		let role = "";
		//get the role they deserve
		if(weeks >= 14)
		{
			role = "Yr7";
		}
		else if(weeks >= 12)
		{
			role = "Yr6";
		}
		else if(weeks >= 8)
		{
			role = "Yr5";
		}
		else if(weeks >= 6)
		{
			role = "Yr4";
		}
		else if(weeks >= 4)
		{
			role = "Yr3";
		}
		else if(weeks >= 2)
		{
			role = "Yr2";
		}
		else
		{
			role = "Yr1";
		}
		//console.log(msg.guild.roles)
		if(!msg.guild.roles.cache.find(x => x.name == role))
		{
			//role doesn't exist - create it
			msg.guild.roles.create({
				name: role,
				
			}).then(r => msg.member.roles.add(r));
		}
		else
		{
			//check if the user already has the role
			if(!msg.member.roles.cache.find(x => x.name == role))
			{
				let r = msg.guild.roles.cache.find(x => x.name == role);
				if(r)
					msg.member.roles.add(r);
			}
			
		}

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
		let letter = await images.join_scroll(member.user.username);
		member.createDM();
		await member.send({files: [
			letter
		]});
		//delete the file to save space
		await fs.unlinkSync(letter);
		//const attachment = new Discord.MessageAttachment(canvas.toBuffer(), './resources/pictures/acceptanceletter.png');
	
		var wtl = Math.floor(Math.random() * welcometext.length);
		member.send("Welcome to CK2 Wizarding World\n here you may get all your Harry Potter CK2 needs and maybe some fun along the way ;) \n Here are some rules that are enforced on the server. \n -No Cursing \n -No Spamming \n -No Advertising \n -No Discrimination \n -No Racism \n -No Sexism \n -No Being Rude \n -No Trolling \n Overall if you are here for fun you will get fun if you are here to Troll you will be treated as such GIT UNDAH YA BRIDGE :bridge_at_night: jokes aside just don't be a Jerk :).");
		//618270218849878056 CKII welcome channel ID
		//711633590445670421 test server welcome id
		guild.channels.get('711633590445670421').send(' ' + welcometext[wtl])


    
	})





	//client.on("snowflake(id)")

	//blacklist system
	client.on('message', async message => {


  //blacklisted words may god have mercy on my soul. . .
  let blacklisted = [
	  'fuck',
	  'shit',
	  'bitch',
	  'whore',
	  'cunt',
	  'faggot',
	  'tits',
	  'honky',
	  'dyke',
	  'penis',
	  'pussy',
	  'vagina',
	  'nigger',
	  'negro',
	  'nigga',
	  'n i g g e r',
	  'n i g g a',
	  'f u c k',
	  'b i t c h',
	  's h i t',
	  'c u n t',
	  'titties',
	  'tities',
	  'w h o r e',

] 

  let foundInText = false;
  for (var i in blacklisted) { // loops through the blacklisted list
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  // checks casesensitive words

  //deletes and responds
    if (foundInText) {

      message.delete();
     return message.reply('Mind your language, WARNING')
  }
});
/*client.on('messageReactionAdd', async(reaction, user) => {
	let testRole = message.guild.roles.cache.find(role => role.name === 'test1');

	if(message.id === "724134531652649000") {
	 if(emoji.name === "➡️") {


		member.roles.add(testRole);
	  }
	}
	}  
);*/

/*
//reaction module
let option1 = reactionRole.createOption("gryffindor:724204856385994822", "709348559052603423");
let option2 = reactionRole.createOption("slytherin:724204884769112114", "707867871786827776");


reactionRole.createMessage("724207378085576704", "709100684653494303", true, option1, option2);

reactionRole.init();
*/