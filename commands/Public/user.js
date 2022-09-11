const { MessageEmbed } = require('discord.js');
const moment = require('moment'); // npm i moment

module.exports = {
    name: 'user',
    aliases: ["u"],
    cooldown: 8000,
    execute(client, message, args) {

        let target = message.mentions.users.first() || message.author;
        let member = message.guild.members.cache.get(target.id);
        let user = message.mentions.users.first() || message.author;
        let Embed = new MessageEmbed()
            .setColor('WHITE')
            .setFields(
                { name: 'Joined Discord :', value: `**<t:${Math.floor(member.user.createdAt / 1000)}:R>**`, inline: true },
                { name: 'Joined Server :', value: `**<t:${Math.floor(member.joinedAt / 1000)}:R>**`, inline: true },
            )
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setFooter(`${member.user.tag}`, member.user.avatarURL({ dynamic: true }))
            message.reply({embeds:[Embed], allowedMentions:[{repliedUser:false}]})
    }
}

