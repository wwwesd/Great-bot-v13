const { COOLDOWN } = require('../../JSON/config.json')
const { MessageEmbed } = require('discord.js'); // npm i discord.js
const { PREFIX } = require('../../JSON/config.json')

module.exports = {
    name: 'report',
    cooldown: COOLDOWN,
    execute(client, message, args) {

        const reason = message.content.split(" ").slice(2).join(" ");
const user = message.mentions.users.first();user
if(!user) return message.channel.send(`${PREFIX} + report { منشن الشخص } { القصة والدلائل }`);
if(!reason) return message.channel.send(`${PREFIX} + report { منشن الشخص } { القصة والدلائل }`);
message.delete()
message.channel.send("  تم ارسال بلاغك بنجاح ✅ ")//الرسالة اذا حذف الرابط
// logs 
let reportschannel = client.channels.cache.get('982201354753802251')//////ايدي روم الوق
let embedmsg = new MessageEmbed() /// !  
.setColor("GREY")
.setTitle(" report : ")
.setThumbnail(message.author.avatarURL)
.setDescription(`
**الي عليه البلاغ**

user : ${user}

------------------------    
** صاحب البلاغ **

user : <@${message.author.id}>

--------------------------
**السبب**

السبب : ${reason}`
)
.setTimestamp()


reportschannel.send({embeds: [embedmsg]})

    }
}