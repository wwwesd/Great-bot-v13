const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dice',
        execute(client, message, args) {

    const random = [
      "**```your guess : 3```** ",
      "**```your guess : 1```** ",
      "**``` your guess: 2```** ",
      "**``` your guess: 4```** ",
      "**```your guess : 5```** ",
      "**```your guess : 6```** ",
  
  
  
  
  
    ]
  
    var result = random[Math.floor(Math.random() * random.length)];
  
      let embed = new MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setTitle("dice")
        .setDescription(result)
        .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setColor("WHITE")
  
      message.channel.send({ embeds: [embed] })
    }
  };