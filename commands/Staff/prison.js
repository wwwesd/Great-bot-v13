const ms = require("ms");

module.exports = {
  name: "prison",
async execute(client, message, args) {
      try {
          if (!message.member.permissions.has("MANAGE_ROLES"))
              return message.channel.send("You don't have permissions");
              let member =
              message.mentions.members.first() ||
              message.guild.members.cache.get(args[0])
              let time = args[2]
            
          if (!member)
              return message.channel.send(
                  `**Please Mention user or Type the user ID/Username **`
              );
          if (member.id === message.author.id)
              return message.reply(`**You can't mute yourself**`);
          if (member.id === message.guild.me.id)
              return message.reply(`**You can't mute me**`);
          let mutedrole = message.guild.roles.cache.find((ro) => ro.id === `982176833908924417`);
          if(!mutedrole) {
  
      
            await message.guild.roles.create({
               name : 'prison',
               color: 'GREY'
             }).then(async() => {
               await message.guild.channels.cache.forEach((channel) => { 
                 channel.permissionOverwrites.edit(mutedrole, {
                   
                   SEND_MESSAGES: false,
                   ADD_REACTIONS: false
                   
               });
               });
             })
           }
          member.roles.add(mutedrole)
          message.channel.send(`**${member.user.username} Has been muted 🔇**`);
          setTimeout(async()=>{``
            if(!time)return;
            member.roles.remove(mutedrole)
          }, ms(time))
      } catch (e) {
          console.log(e)
      }
  }
}
