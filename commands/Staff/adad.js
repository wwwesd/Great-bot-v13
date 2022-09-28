const { MessageEmbed } = require('discord.js');
const { COOLDOWN } = require('../../JSON/config.json');

module.exports = {
    name: 'add-roles',
    cooldown: 10000,
        execute(client, message) {
            
          
    if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("يا عمي توكل ماعندك بيرمشن وجاي تكلمني")


    let args = message.content.split(' ').slice(1);   

    if (!args[0]) return message.reply({ embeds: [new MessageEmbed()  .setColor('GREY')
        .setDescription(`**Command: role**\n\nAdd/remove a role(s) for a user.\n\n**Usage:**\n\n\+role\  \[user]\ \(+/-) [roles names separated by comma]\n\n \**Examples:**\n \+role <@${message.author.id}>`)] })
    
    let user = message.mentions.members.first();
    let role = message.mentions.roles.first();   


    if(!role) return message.reply("**ياورع منشن الرتبه**")
    let role2 = message.guild.roles.cache.find(r => r == role)
    user.roles.add(role2)
    message.reply(`✅ Changed roles for ${user} ${role}`)
        }
    }

    /*
    const { COOLDOWN } = require('../../JSON/config.json');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'role',
    aliases: ['t'], // يمديك تستخدم اكثر من اسم للأمر كمثال $test | $t | لو ما تبي تستخدم اكثر من واحد خلها كذا: aliases: []
    cooldown: COOLDOWN,
    execute(client, message, args) {


  if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("ما معك صلاحيات")
  if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("ما معي صلاحيات")
  let member = message.mentions.members.first();
    let role = message.mentions.roles.first();
  if(!member)return message.channel.send("منشن الشخص")
    if(!role)return  message.channel.send("منشن الرتبه")
    let role2 = message.guild.roles.cache.find(r => r == role)
    member.roles.add(role2)
    const embeds = new MessageEmbed()
    .setTitle("Role Add to Member")
    .setColor("GREEN")
    .setAuthor({name:message.guild.name,iconURL:message.guild.iconURL({dynamic:true})})
    .setDescription(`
    \n Member: <@${member.user.id}> \nBy: ${message.author} \nRole: ${role2} \n 
    `)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter({text: message.guild.name, iconURL: message.guild.iconURL({dynamic:true})})
    const channel = client.channels.cache.get('959349014380298300');
    message.channel.send({embeds: [embeds]})
  }
}   
*/