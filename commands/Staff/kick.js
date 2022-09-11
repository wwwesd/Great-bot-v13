const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'kick',
    aliases: ['kick'],
    cooldown: 8000,
    execute: async (client, message, args) => {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply(`! 🙄ليس لديك صلاحيات`)
        if (!message.guild.me.permissions.has('KICK_MEMBERS')) return message.reply("! 🙄ليس لدي صلاحيات")
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.members.resolve(user);
        if (member) {
          member.kick({
              reason: 'They were bad!',
            })
            .then(() => {
                let Embed = new MessageEmbed()
              .setColor('WHITE')
              .setTitle(`**Successfully kicked ${user.tag}.**,`)
              .setFooter(`This feature is still in beta, so there can be issues.`)
  
              return message.reply({ embeds: [Embed], allowedMentions:[{repliedUser:false}]})
            })
            .catch(err => {
                let Embed = new MessageEmbed()
              .setColor('WHITE')
              .setTitle(`**I can't kick this member!**,`)
              .setFooter(`This feature is still in beta, so there can be issues.`)
  
              return message.reply({ embeds: [Embed], allowedMentions:[{repliedUser:false}]})
              console.error(err);
            });
        } else {
            let Embed = new MessageEmbed()
          .setColor('WHITE')
          .setTitle(`**There is no user with this username in this server!**,`)
          .setFooter(`This feature is still in beta, so there can be issues.`)
  
          return message.reply({ embeds: [Embed], allowedMentions:[{repliedUser:false}]})
        }
      } else {
        let Embed = new MessageEmbed()
          .setColor('WHITE')
          .setTitle(`**Please mention someone.**,`)
          .setFooter(`This feature is still in beta, so there can be issues.`)
  
          return message.reply({ embeds: [Embed], allowedMentions:[{repliedUser:false}]})
      }
    }
    }
  