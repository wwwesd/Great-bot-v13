/*
const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");

module.exports = {
    name: "roles",
    
     async execute(client, message, args)  {
var roles = message.guild.roles.cache
 .sort((first, second) => second.position - first.position)
    .map(r => ` ${r.name} `)
    .join("\n")
    var embed = new MessageEmbed()
    .setTitle(`${message.guild.name} Role List`)
    .setDescription(`\`\`\`${roles}  \`\`\``)
message.channel.send({embeds : [embed]})


    }
} 
*/