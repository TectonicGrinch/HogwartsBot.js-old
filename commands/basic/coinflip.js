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
  let tailsCount = 0;
  let headsCount = 0; 
    
  var flip = Math.floor(Math.random() * 100) + 1;

 
    if (flip >= 51) {



      headsCount++

      message.reply (`<:galleon:727038073678069811>*flips a coin and it lands on* **Heads** ${headsCount} `);


     }   
    

 else if(flip <= 50) {



    tailsCount++

    message.reply (`<:galleon:727038073678069811>*flips a coin and it lands on* **Tails**${tailsCount} `);

}
}
}

module.exports = coinflip;