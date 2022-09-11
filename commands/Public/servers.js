/*const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "server",
    async execute(client, message, args) {
        await message.guild.members.fetch();
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache.size;
        const firstFiveEmojis = message.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
        const boostCount = message.guild.premiumSubscriptionCount;
        const verificationLevel = message.guild.verificationLevel;
        const rolesCount = message.guild.roles.cache.size;
        let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({ name: `${message.guild.name}'s Information`, iconURL: message.guild.iconURL({ dynamic: true }) })
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addFields(
                { name: ':id: Server ID:', value: `${message.guildId}`, inline: true },
                { name: ':calendar: Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
                { name: ':crown: Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
                { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
                { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
                { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}**\nRoles: **${rolesCount}**`, inline: true },
                { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
            )
            .setTimestamp()

        message.channel.send({ embeds: [embed] })
    }
}
*/