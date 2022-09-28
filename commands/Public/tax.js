const { MessageEmbed } = require("discord.js")

module.exports = {
  name: `tax`,
  execute(client, message, args) {
    const probot = require("probot-tax");
    const num = args[0];

      let embed = new MessageEmbed()
      .setColor('GREY')
      .setFields(
     {name:"Amount : ", value: `**${num}**`},
     {name:"Total with tax :  ", value:`**${probot.taxs(num)}**`}
      )
      .setFooter({ text: `Requested By: ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()
      message.reply({embeds: [embed]})
     }
    }