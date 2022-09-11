const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js'); 


module.exports = { 

name: 'on', 

description: 'on', 

async execute (client, message, args) {

 let embed = new MessageEmbed() 

.setTitle(`اثبت نفسك`) 

const row = new MessageActionRow() 

.addComponents( 

new MessageButton() 

.setLabel(` اثبت نفسك`) 

.setCustomId(`اثبت نفسك`) 

.setStyle("PRIMARY") 

.setEmoji(`✅`) // لو تبي تحط ايموجي 

)

 

message.channel.send({ embeds: [embed], components: [row]}) 

const collector = message.channel.createMessageComponentCollector(); 

 

collector.on('collect', async button => { 

 

if(button.user.id !== message.author.id) return; 

button.deferUpdate(); 

 

if(button.customId === "لتثبيت نفسك اضغط على الرياكشن") { 
    const role = button.guild.roles.cache.get("826042241259798545")
 const member = button.user.id
  message.member.roles.add(role.id)
  
} 




  
    
})}} 
