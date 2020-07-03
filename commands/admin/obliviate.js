const commando = require ('discord.js-commando')
module.exports = class sortinghat extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'obliviate',
			group: 'admin',
			memberName: 'obliviate',
			description: 'Obliviate a user or the dircord chat into forgetting messages(deleting messages)**Staff Only**',

			},
		);
	}



    async run(message, args) {
        if(['Dev',
        'Bot Dev',
        'Moderator'].some((r) => message.member.roles.cache.has(role => role.name == r))){
        const user = message.mentions.users.first();
        // Parse Amount
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        
        if (!amount) return message.reply('Must specify an amount to delete!');
        
        if (!amount && !user) return message.reply('Must specify a user and amount!');
        // Fetch 100 messages (will be filtered and lowered up to max amount requested)
        message.channel.messages.fetch({
            limit: amount > 20 ? 20 : amount,
           }).then((messages) => {
        messages = messages.filter(m => m.author.id === user.id).array();
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        });
        }else{
            message.reply('This Spell is too powerful for you.')
          }
         }
        }