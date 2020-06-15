const commando = require ('discord.js-commando')

class Credits extends commando.Command {
constructor(client) {
     super(client, {
       name: 'credits',
       group: 'basic',
       memberName: 'credits',
       description: 'Supplies you with the credit list of HogwartsBot',
     });
}
async run(message, args) {

     return message.author.send(" __Developer:__ **ViridianZe** \n __Code Helper and Tester:__ **JuicyShark** \n __Idea Master, Encourager, Punctuation Corrector and Main Tester:__ **Vahlgoul** \n __Idea Master, Punctuation Corrector and Tester:__ **KingMyrddin**");

     }   

}

module.exports = Credits;