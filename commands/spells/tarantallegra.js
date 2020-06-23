//tarantallegra
//var mention = message.mentions.users.first()
const commando = require ('discord.js-commando')

module.exports = class tarantallegra extends commando.Command {
constructor(client) {
     super(client, {
       name: 'tarantallegra',
       group: 'spells',
       memberName: 'tarantallegra',
       description: 'disarm a target **Moderator Spell**',
     });
}
async run(message, args) {
    var tarantallegraRoles = [
        'Dev',
        'Moderator',
        'Helper'
    ]
    var hasRole = false;
    tarantallegraRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
if(hasRole === true){
    var mention = message.mentions.users.first()

    return message.reply(`casted Tarantallegra on ${mention || "a student" } and now ${mention || "the student"} is helplessly dancing around 💃`, {files: ["./resources/gifs/dance.gif"]})

}else{
    return message.reply('This spell is too powerful for you.')

 }
}}