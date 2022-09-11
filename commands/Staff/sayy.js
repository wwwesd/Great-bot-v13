const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'sayy',
    cooldown: 8000,
    async execute(client, message, args ) {
if(!message.member.permissions.has("ADMINISTRATOR")) return message.content = "سري ما عندك ادمن استريتر" 
var args = message.content.split(" ").slice(1);
  var msg = args.join(" ");
      
    let embed = new MessageEmbed()
      .setColor("#9784c4")
      .setDescription(msg)
      .setImage(``)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.delete()
    message.channel.send({ embeds: [embed]
                         })
                         }
    }
    