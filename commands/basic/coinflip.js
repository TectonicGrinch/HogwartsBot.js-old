const commando = require ('discord.js-commando')

class coinflip extends commando.Command {
constructor(client) {
     super(client, {
       name: 'coinflip',
       aliases: ['cf'],
       group: 'basic',
       memberName: 'coinflip',
       description: 'Flip a coin 50/50 chance.',
     });
}
async run(message, args) {
    
    var flip = Math.floor(Math.random() * 100) + 1;
 
    if (flip > 51) {
 
 
 
    message.reply ("<:galleon:727038073678069811>*flips a coin and it lands on* **Heads**");

     }   
    

 else if(flip <= 50) {
    message.reply ("<:galleon:727038073678069811>*flips a coin and it lands on* **Tails**");

}
}
}

module.exports = coinflip;