const { COOLDOWN } = require('../../JSON/config.json');
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: 'join',
    aliases: ['j'],
    cooldown: 8000,
    execute(client, message, args) {

        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
}