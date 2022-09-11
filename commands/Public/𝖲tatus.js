    const { MessageEmbed } = require('discord.js');

    module.exports = {
        name: '𝖲tatus',
            execute(client, message, args) { 



        const random = [
        "**𝖲tatus Bot Online** ",
    
    
        ] 
    
    var result = random[Math.floor(Math.random() * random.length)];
    
    let embed = new MessageEmbed()
    .setAuthor(`${message.guild.name}` , message.guild.iconURL({dynamic:true}))
    .setTitle("𝖲tatus")
    .setDescription(result)
    .setFooter(message.author.username , message.author.avatarURL({ dynamic: true }))
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setTimestamp()
    .setColor("WHITE") 
    
    message.channel.send({embeds: [embed]})
    }}