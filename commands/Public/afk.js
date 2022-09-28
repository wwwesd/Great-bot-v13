const { COOLDOWN } = require('../../JSON/config.json')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'afk',
    cooldown: 8000,
        execute(client, message, args) {

        let embed = new MessageEmbed()
        .setTitle('Server Afk')
        .setColor('GREY')
        .setDescription(`
        > **The Afk Rooms is :**
        
        > **Click To join <#982201227603509248>**
        `)
        .setFooter(message.guild.name, message.guild.iconURL({dynamic: true})) 
        .setTimestamp()
        .setColor("GREY")
        message.channel.send({ embeds: [embed]}).then(msg => {msg.react("😴") })

    }
}