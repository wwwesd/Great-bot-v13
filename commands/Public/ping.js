const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'ping',
    execute(client, message, args) {

var states = "🟢 Excellent";
            var states2 = "🟢 Excellent";
            var msg = `${Date.now() - message.createdTimestamp}`;
            var api = `${Math.round(client.ws.ping)}`;
            if (Number(msg) > 70) states = "🟢 Good";
            if (Number(msg) > 170) states = "🟡 Not Bad";
            if (Number(msg) > 350) states = "🔴 Soo Bad";
            
            if (Number(api) > 70) states2 = "🟢 Good";
            if (Number(api) > 170) states2 = "🟡 Not Bad";
            if (Number(api) > 350) states2 = "🔴 Soo Bad";
            let embed = new MessageEmbed()
                .setAuthor(`client response time 🏓`)
                .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)
                .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
                .setTimestamp()
                .setColor('GREY')
                    message.reply({ embeds: [embed], allowedMentions: [{repliedUser: false}] }).catch(console.log);
} 
}