
const {MessageEmbed} = require("discord.js")

module.exports = {
    name: 'hide',
    cooldown: 8000,
    execute(client, message, args) {
        
        
  
  
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
        let everyone = message.guild.
          roles.cache.find(m => m.name === '@everyone');
  
      let channel = message.mentions.channels.first()  ||message.guild.channels.cache.get(args[1])  || message.channel;
  
        channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL: false,
        })
  
      let embed = new MessageEmbed()
      .setTitle(`Channel Hide`)
      .setDescription(`Done hide ${channel}`)
      .setColor('WHITE')
      message.channel.send({embeds : [embed]})
    
  
  
  
    }
  }
