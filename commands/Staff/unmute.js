const { COOLDOWN } = require('../../JSON/config.json')
const ms = require("ms");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unmute",
    cooldown: 8000,
    execute(client,Message,args){
      if(!Message.member.permissions.has('ADMINISTRATOR')) return;  
         const target = Message.mentions.users.first();
         if(target){
             let mainrole= Message.guild.roles.cache.find(roles => roles.id === '982202081916100618');//هنا حط ايدي رتبة الميوت
             let mainrole2= Message.guild.roles.cache.find(roles => roles.id === '982202081916100618');
             let muterole3= Message.guild.roles.cache.find(roles => roles.id === '982202081916100618');

             let memberTarget = Message.guild.members.cache.get(target.id);

             if(!args[1]){
                memberTarget.roles.remove(mainrole.id);
                memberTarget.roles.remove(mainrole2.id);
                memberTarget.roles.remove(muterole3.id);
                Message.channel.send(`:blush: <@${memberTarget.user.id}> **not muted.**`);
                return;
             }
             memberTarget.roles.remove(mainrole.id);
             memberTarget.roles.add(muterole.id);
             Message.channel.send(`<@${memberTarget.user.id}> has been unmuted for ${ms(ms(args[1]))}`);

             setTimeout(function(){
                memberTarget.roles.remove(muterole.id);
                memberTarget.roles.add(mainrole.id);
                Message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
             },ms(args[1]));
         }else{
            Message.channel.send({ embeds: [new MessageEmbed()      .setColor('GREY')
            .setDescription(`**Command: unmute**\n\nUnmute a member./voice channels so they cannot type.\n\n**Usage:**\n\n\`#unmute\` \`[user]\``)] })
         }
    } 
}