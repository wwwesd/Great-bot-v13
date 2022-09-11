module.exports = {
    name: "se",
    aliases: ['se'],
    description: "Get Emoji Url link",
    cooldown: 8000,
    execute(client, message, args) {
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
        const discord = require("discord.js");
        if (!args[0]) return message.reply(`اكتب الايموجي`);
        const lro = discord.Util.parseEmoji(args[0]);
        if (!lro.name || !lro.id) return message.reply({ content: 'لايوجد ايموجي مثل هذا' });
        const loryn = `${lro.name}: https://cdn.discordapp.com/emojis/${lro.id}.${lro.animated ? "gif" : "png"}`;
        message.reply(loryn);

    }
} 