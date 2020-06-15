const commando = require ('discord.js-commando')

class Expelliarmus extends commando.Command {
constructor(client) {
     super(client, {
       name: 'expelliarmus',
       group: 'spells',
       memberName: 'expelliarmus',
       description: 'disarm a target',
     });
}
async run(message, args) {
  // store the first User object on the Map in variable mention
  var mention = message.mentions.users.first()
  var expell = Math.floor(Math.random() * 100) + 1;
      if (expell < 50)
       message.reply(` ${mention} was hit by Expelliarmus and is disarmed.`)
      else if (expell < 70)
       message.reply(`The spell was blocked by ${mention}.`)
      else
      message.reply(`Your spell missed ${mention}.`)
  
  }
  
  }
module.exports = Expelliarmus;