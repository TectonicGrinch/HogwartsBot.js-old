const commando = require ('discord.js-commando')
module.exports = class sortinghat extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'sortinghat',
			group: 'admin',
			memberName: 'sortinghat',
			description: 'Allows you create a Sorting Hat channel **Developer Only**',

			},
		);
	}



async run(message, args) {
    var sortinghatRoles = [
        'Dev',
        'Bot Dev',

    ]
    var hasRole = false;
    sortinghatRoles.forEach(findrole =>{
        if(message.member.roles.cache.some(role => role.name === findrole)) hasRole = true; //if user has role, sets bool to true
    })
//Helper roles
if(hasRole === true){
    return message.say('Welcome to The Sorting Hat when you are ready there are four houses to choose from. \n **Gyrffindor:** <:gryffindor:724204856385994822> \n **Slytherin:** <:slytherin:724204884769112114> \n **Hufflepuff:** <:hufflepuff:724204870764199957> \n **Ravenclaw:** <:ravenclaw:724204894482857996> \n Your house will be like your family. Your triumphs will earn you house points. Any rule breaking, and you will lose points. At the end of the month, the house with the most points is awarded the house cup.', {files: ['./resources/pictures/sortinghat.png']})
}else{

    return message.say('You are not a Developer!')
   
   
   
   
   
   

}}
}
