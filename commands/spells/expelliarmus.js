const commando = require ('discord.js-commando')

module.exports = class expelliarmus extends commando.Command {
constructor(client) {
     super(client, {
       name: 'expelliarmus',
       group: 'spells',
       memberName: 'expelliarmus',
       description: 'disarm a target **Year 4 command**',
     });
}
async run(message, args) {
  var expelliarmusRoles = [
    'Dev',
    'Yr4',
    'Yr5',
    'Yr6',
    'Yr7'
]
var hasRole = false;
expelliarmusRoles.forEach(findrole =>{
    if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
})
if(hasRole === true){
  // store the first User object on the Map in variable mention
  var mention = message.mentions.users.first()
  var expell = Math.floor(Math.random() * 100) + 1;
      if (expell < 50)
       message.reply(` ${mention || "The Target Dummy"} was hit by Expelliarmus and is disarmed.`)
      else if (expell < 70)
       message.reply(`The spell was blocked by ${mention || "The Target Dummy"}.`)
      else
      message.reply(`Your spell missed ${mention || "The Target Dummy"}.`)
  
}else{
  return message.say('This spell is too powerful for your year.')
  
  }

}}