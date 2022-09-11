const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'botinfo',
    description: 'Bot information',
    cooldown: 8000,
    execute(client, message, args) {
    let Embed = new MessageEmbed()
    .setAuthor({name: client.user.username, avatarURL: client.user.avatarURL({ dynamic: true, size: 2048})})
    .setTitle(`Bot information`)
    .setThumbnail(client.user.avatarURL({ dynamic: true }))
    .setFields(
    { name: `Name 📛`, value: `${client.user.tag}`, inline: true},
    { name: `Id 🆔`, value: `${client.user.id}`, inline: true},
    { name: `Owned by 👑`, value: `<@!719915319602184285>`, inline: true},
    { name: `Servers 🈂`, value: `${client.guilds.cache.size}`, inline: true},
    { name: `Users 👥`, value: `${client.users.cache.size}`, inline: true},
    { name: `Created On 📆`, value: `<t:${parseInt(client.user.createdTimestamp/ 1000)}:R>`, inline: true},
    { name: `Ping 🏓`, value: `${client.ws.ping}`, inline: true},
    )
    .setColor('WHITE')
    .setFooter({text: client.user.tag, value: client.user.displayAvatarURL({ dynamic: true, size: 2048})})
    return message.reply({ embeds: [Embed], allowedMentions:[{repliedUser:false}]})
  }
}