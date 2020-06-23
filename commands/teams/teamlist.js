const commando = require ('discord.js-commando')
const db = require('../../database.js');
const { MessageEmbed } = require('discord.js');

class housepoints extends commando.Command {
    constructor(client) {
        super(client, {
        name: 'housepoints',
        group: 'house',
        memberName: 'housepoints',
        description: 'List the house points in realtime',
        });
    }
    async run(message, args) {
        //check if there are any teams
        if(!(await db.team_count()))
        {
            return message.channel.send(`no teams found`);
        }
        //get a list of all teams
        const teams = await db.get_all_teams();
        const embed = new MessageEmbed();
        embed.title = `House Points:`;
        embed.description = "";
        embed.color = 0x3ca1c9;
        for (const team of teams) {
            //team = a string name of the team
            const points = await db.get_team(team, "points");
            embed.description += `${team}: ${points} points\n`;
        }
        return message.channel.send(embed);
    }
  
}
module.exports = housepoints;


