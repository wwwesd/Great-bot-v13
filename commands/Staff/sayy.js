const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'sayy',
    cooldown: 8000,
    async execute(client, message, args ) {
if(!message.member.permissions.has("ADMINISTRATOR")) return message.content = "سري ما عندك ادمن استريتر" 
var args = message.content.split(" ").slice(1);
  var msg = args.join(" ");
      
    let embed = new MessageEmbed()
      .setColor("GREY")
      .setDescription(msg)
      .setImage(`https://cdn.discordapp.com/attachments/991754431316115568/1007265964603224104/unknown-1.png`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.delete()
    message.channel.send({ embeds: [embed]
                         })
                         }
    }
    