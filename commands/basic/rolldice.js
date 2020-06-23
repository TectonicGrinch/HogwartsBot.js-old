const commando = require ('discord.js-commando')

class DiceRollCommand extends commando.Command {
constructor(client) {
     super(client, {
       name: 'roll',
       group: 'basic',
       memberName: 'roll',
       description: 'Rolls a 100 sided die',
     });
}
async run(message, args) {
    var roll = Math.floor(Math.random() * 100) + 1;
    message.reply ("you roll the d100 die and it lands on. " + roll);

     }   

}

module.exports = DiceRollCommand;