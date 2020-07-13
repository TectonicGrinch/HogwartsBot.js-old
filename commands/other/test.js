const commando = require ('discord.js-commando');
const unirest = require("unirest");
const bot = require('nodemw');
module.exports = class fsearch extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'fsearch',
			group: 'other',
			memberName: 'fsearch',
			description: 'fsearch',

		});
	}
async run(message) {

  var client = new bot({
          protocol: 'https',
          server: 'harrypotter.fandom.com',
          path: '/w'
      }),
      params = {
          action: 'ask',
          query: '[[Modification date::+]]|?Modification date|sort=Modification date|order=desc'
      };
   
  client.api.call(params /* api.php parameters */, function(err /* Error instance or null */, info /* processed query result */, next /* more results? */, data /* raw data */) {
      console.log(data && data.query && data.query.results);
  });


  let args = message.content
  .trim()
  .split(' ') //arguements
  var fansearch = bot.search(query)
  var fanurl = bot.fetchUrl(url, callback)
  let argsearch = args.slice(fansearch)[0];



 return message.say(`Search: ${argssearch}`)
}}

