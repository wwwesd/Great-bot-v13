/*const { MessageActionRow ,MessageSelectMenu , MessageEmbed} = require('discord.js');
const { PREFIX } = require('discord.js');

module.exports = {
  name: 'help', 
  cooldown: 80000,
  async execute(client, message, args) {
      
    let row = new MessageActionRow()
    
    .addComponents(
      new MessageSelectMenu()
          .setPlaceholder('click me to view commands')
          .setCustomId('menu-select')
          .addOptions([
            {
              label: 'π General Commands',
              description: 'to Viuo Public Commands',
              value: 'pul'
              },
              {
              label: 'π  Admin Commands',
              description: 'to Viuo Admin Commands',
              value: 'adm'
              },
              {
              label: 'π : Play Commands',
              description: 'to Viuo Play Commands',
              value: 'mus'
              },
              
                
             
      ])
        )
 
            let embed = new MessageEmbed()
            .setDescription(`**Hey ${message.author.username} , iam ${client.user.username}

> A Discord Bot With Many Awesome Features

> Help Related To Weller  Bot Commands:

π : General Commands
π   : Admin Commands
π : Play Commands


β¨ Select A Category From The Menu 
            **`)
            .setColor('DARK_PURPLE')
 
 
    let m = await message.channel.send({embeds : [embed], components :[row]})
 
    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
 
    collector.on('collect', async i => {
      if(i.values[0] === 'pul' || i.values[1] === 'pul'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `Welcome to General Commands π `, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('DARK_PURPLE')
          .setDescription(`
          > \`#user\`: **ΩΨΈΩΨ± ΩΨΉΩΩΩΨ§Ψͺ Ψ­Ψ³Ψ§Ψ¨Ω**
          > \`#avatar\`: **ΩΨΈΩΨ± ΩΩ Ψ΅ΩΨ±ΨͺΩ**
          > \`#report\`: **ΩΩΨ¨ΩΨ§ΨΊ ΨΉΩ Ψ΄Ψ?Ψ΅**
          > \`#server\`: **ΩΨ§ΨΈΩΨ§Ψ± ΩΨΉΩΩΩΨ§Ψͺ Ψ§ΩΨ³ΩΨ±ΩΨ±**
          > \`#botinfo\`: **ΩΨ§ΨΈΩΨ§Ψ± ΩΨΉΩΩΩΨ§Ψͺ Ψ§ΩΨ¨ΩΨͺ**
          > \`#new\`: **ΩΨ³ΩΩ ΩΩ thread**
          > \`#afk\`: **ΩΨ§ΩΩΨ¬Ψ― Ψ΄Ω ΩΨ΄Ψ±Ψ­Ω**
          > \`#ping\`: **ΩΩΨΉΨ±ΩΩ Ψ³Ψ±ΨΉΨ© Ψ§Ψ³ΨͺΨ¬Ψ§Ψ¨Ψͺ Ψ§ΩΨ¨ΩΨͺ**
          > \`#color\`: **ΩΨͺΨΊΩΩΨ± ΩΩΩΩ**
          > \`#banner\`: **ΩΨΈΩΨ± ΩΩ Ψ¨ΩΨ± Ψ§ΩΨ΄Ψ?Ψ΅**
          > \`#profile\`: **ΩΨΈΩΨ± ΩΩ Ψ¨Ψ±ΩΩΨ§ΩΩΩ  **
          > \`#tax\`: ** ΩΨ§ΩΩΨ¬Ψ― Ψ΄Ω ΩΨ΄Ψ±Ψ­Ω **
          > \`#π²tatus\`: **ΩΩΨΉΨ±ΩΩ Ψ§ΩΨ¨ΩΨͺ Ψ΄ΨΊΨ§Ω Ψ§Ω ΩΨ§**
          > \`#emoji\`: **ΩΨ§ΩΩΨ¬Ψ― Ψ΄Ω ΩΨ΄Ψ±Ψ­Ω**
          > \`#id\`: **ΩΩΨΉΨ±ΩΩ Ψ§ΩΨ§ΩΨ―Ω **
          > \`#boost\`: **ΩΨΈΩΨ± ΩΩ ΩΩ ΨΉΨ―Ψ― Ψ§ΩΨ¨ΩΨ³ΨͺΨ§Ψͺ **
          > \`#memes\`: **ΩΨ§ΨΈΩΨ§Ψ± ΩΩΩΨ²**
          > \`#servers\`: **ΩΩΨΉΨ±ΩΩ Ψ§ΩΨ¨ΩΨͺ ΩΩ Ψ―Ψ§Ψ?Ω Ψ³ΩΨ±ΩΨ±**
          > \`#Request\`: **ΩΨ·ΩΨ¨ Ψ΄Ω ΩΨΉΩΩ ΩΩ Ψ§ΩΨ§Ψ―Ψ§Ψ±Ω**
          > \`#invites\`: **ΩΨΈΩΨ± ΩΩ ΨΉΨ―Ψ― Ψ§ΩΨ―ΨΉΩΨ§Ψͺ**
          > \`#top-invites\`: **ΩΨΈΩΨ± ΩΩ Ψ§ΩΨ«Ψ± Ψ΄Ψ?Ψ΅ Ψ³ΩΨ§ Ψ―ΨΉΩΨ§Ψͺ  **
          > \`#allbots\`: **ΩΨΈΩΨ± ΩΩ Ψ¬ΩΩΨΉ Ψ§ΩΨ¨ΩΨͺΨ§Ψͺ**
          > \`#uptime\`: **ΩΩΨΉΨ±ΩΩ Ψ§ΩΨ¨ΩΨͺ ΩΩ ΩΩ Ψ΄ΨΊΨ§Ω**
          > \`#blur\`: **ΨͺΨ?ΩΩ Ψ§ΩΨ΅ΩΨ±Ω ΩΩΨ΄ΩΨ΄Ω**
          > \`#search-netflix\`: **Netflix ΩΩΨ¨Ψ­Ψ« ΩΩ **
          > \`#search-youtube\`: **Youtube ΩΩΨ¨Ψ­Ψ« ΩΩ **
          > \`#emojiinfo\`: **  ΩΨΈΩΨ± ΩΩ ΩΨΉΩΩΩΨ§Ψͺ Ψ§ΩΨ§ΩΩΩΨ¬Ω  **
          > \`#roleinfo\`: **ΩΨΈΩΨ± ΩΩ ΩΨΉΩΩΩΨ§Ψͺ Ψ§ΩΨ±ΨͺΨ¨Ω **





          

          

        

          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
      }
      if(i.values[0] === 'adm' || i.values[1] === 'adm'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `Welcome to Admin Commands π  `, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('DARK_PURPLE')
          .setDescription(`
          > \`#ban\`: **ΩΨͺΨ¨ΩΩΨ― Ψ΄Ψ?Ψ΅**
          > \`#unban\` : **ΩΩΩ Ψ§ΩΨ¨Ψ§ΩΨ― ΨΉΩ Ψ΄Ψ?Ψ΅**
          > \`#kick\`: **ΩΨ·Ψ±Ψ― Ψ΄Ψ?Ψ΅ **
          > \`#mute\`: **ΩΨ§Ψ³ΩΨ§Ψͺ Ψ΄Ψ?Ψ΅**
          > \`#unmute\`: **ΩΩΩ Ψ§ΩΨ§Ψ³ΩΨ§Ψͺ**
          > \`#lock\`: **ΩΩΩΩ Ψ§ΩΨ±ΩΩ**
          > \`#unlock\`: **ΩΩΩ ΩΩΩ Ψ§ΩΨ±ΩΩ**
          > \`#show\`: **ΩΨ§ΨΈΩΨ§Ψ± Ψ§ΩΨ±ΩΩ ΩΩΨ¬ΩΩΨΉ**
          > \`#hide\` : **ΩΨ§Ψ?ΩΨ§Ψ‘ Ψ§ΩΨ±ΩΩ **
          > \`#say\`: **ΩΩΨ±Ψ± ΩΩΨ§ΩΩ**
          > \`#sayy\`: ** ΩΩΨ±Ψ± ΩΩΨ§ΩΩ Ψ¨Ω Ψ§ΩΨ¨ΩΨ―**
          > \`#warn\`: **ΩΨ§ΨΉΨ·Ψ§Ψ‘ Ψ΄Ψ?Ψ΅ ΨͺΨ­Ψ°ΩΨ±**
          > \`#swarns\`: **ΩΩΨΉΨ±ΩΩ ΩΩ Ψ§Ψ?Ψ° ΨͺΨ­Ψ°ΩΨ±**
          > \`#restart\`: **ΩΨ§ΨΉΨ§Ψ―Ω ΨͺΨ΄ΨΊΩΩ Ψ§ΩΨ¨ΩΨͺ**
          > \`#se\` : **ΩΨ§ΨΈΩΨ§Ψ± Ψ§ΩΩΩΨ¬Ω ΩΨΉΩΩ**
          > \`#clear\` : **ΩΨ­Ψ°Ω ΨΉΨ―Ψ― ΩΩ Ψ§ΩΨ±Ψ³Ψ§ΩΩ**
          > \`#Delete\` : **ΩΨ­Ψ°Ω Ψ§ΩΨ±ΩΩ**
          > \`#slow\`: **ΩΩΨΆΨΉ Ψ§ΩΨ³ΩΩ ΩΩΨ― ΩΩ Ψ§ΩΨ±ΩΩ**
          > \`#set-avatar\`: **ΩΨͺΨΊΩΩΨ± Ψ΅ΩΨ±Ω Ψ§ΩΨ¨ΩΨͺ**
          > \`#set-playing\`: ** ΩΨͺΨΊΩΩΨ± Ψ­Ψ§ΩΩ Ψ§ΩΨ¨ΩΨͺ**
          > \`#add-roles\`: **ΩΨ§ΨΉΨ·Ψ§Ψ‘ Ψ΄Ψ?Ψ΅ Ψ±ΨͺΨ¨Ω ΩΨΉΩΩΩ**
          > \`#setnick\`: **ΩΨͺΨΊΩΩΨ± Ψ§Ψ³Ω Ψ§ΩΨ΄Ψ?Ψ΅**
          > \`#create\`: **ΩΨ³ΩΩ Ψ±ΩΩ Ψ¨ΩΩΨ΄Ω Ψ§ΩΨ΄Ψ?Ψ΅**
          > \`#removes\`: ** ΩΨ³Ψ­Ψ¨ Ψ§ΩΨ±ΨͺΨ¨ ΩΩ ΩΩ Ψ§ΩΩΩ ΩΩ Ψ§ΩΨ³ΩΨ±ΩΨ±**
          > \`#rename\`: **ΩΨͺΨΊΩΩΨ± Ψ§Ψ³Ω Ψ§ΩΨ±ΩΩ**
          > \`#topic\`: **ΩΨͺΨΊΩΩΨ± Ψ§Ψ³Ω Ψ§ΩΨͺΩΨ¨ΩΩ**
          > \`#hide all\`: **ΩΨ§Ψ?ΩΨ§Ψ‘ Ψ¬ΩΩΨΉ Ψ§ΩΨ±ΩΩΨ§Ψͺ**
          > \`#show all\`: **ΩΨ§ΨΈΩΨ§Ψ± Ψ¬ΩΩΨΉ Ψ§ΩΨ±ΩΩΨ§Ψͺ**
          > \`#text\`: **ΩΨ§ΩΨ΄Ψ§Ψ‘ Ψ±ΩΩ ΩΨͺΨ§Ψ¨Ω  **
          > \`#voice\`: **ΩΨ§ΩΨ΄Ψ§Ψ‘ Ψ±ΩΩ Ψ΅ΩΨͺΩ  **
          > \`#emojis\`: **ΩΨΈΩΨ± ΩΩ Ψ¬ΩΩΨΉ Ψ§ΩΨ§ΩΩΩΨ¬ΩΨ§Ψͺ ΩΩ Ψ§ΩΨ³ΩΨ±ΩΨ±**
          > \`#bans\`: **ΩΨΈΩΨ± ΩΩ Ψ¬ΩΩΨΉ Ψ§ΩΨ§Ψ΄Ψ?Ψ§Ψ΅  Ψ§ΩΩΩ ΨͺΨ¨ΩΨ―Ω **
          > \`#vkick\`: **ΩΨ·Ψ±Ψ― Ψ΄Ψ?Ψ΅ ΩΩ Ψ§ΩΨ±ΩΩ  **



          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
 
      }
 
      if(i.values[0] === 'mus' || i.values[1] === 'mus'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `Welcome to  Play Commands π`, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('DARK_PURPLE')
          .setDescription(`
          > \`#akinator\`: **ΩΨΉΨ¨Ω Ψ§ΩΩΨ§Ψ±Ψ― Ψ§ΩΨ§Ψ²Ψ±Ω**
          > \`#kt\`: **ΩΨͺ ΨͺΩΩΨͺ ΨΉΩΩ Ψ§ΩΨ³Ψ±ΩΨΉ**
          > \`#xo\`: ** xo ΩΨΉΨ¨Ω **
          > \`#slap\`: ** ΨͺΨΉΨ·Ω ΩΨ§Ψ­Ψ― ΩΩ  **
          > \`#hug\`: ** ΩΨ­ΨΆΩ Ψ΄Ψ?Ψ΅ **
          > \`#iq\`: **iq ΩΩΨΉΨ±ΩΩ Ψ§Ω **
          > \`#emoji\`: **ΩΨΉΨ¨Ω Ψ§ΩΨ§Ψ³Ψ±ΨΉ ΩΩ ΩΨͺΨ§Ψ¨Ψͺ Ψ§ΩΨ§ΩΩΩΨ¬Ω**

          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
        if(i.values[0] === 'tic' || i.values[1] === 'tic'){
 
         
            m.edit({embeds : [
              new MessageEmbed()
              .setAuthor({name : `Welcome to Ticket Commands π©`, iconURL : client.user.avatarURL()})
              .setThumbnail(client.user.avatarURL())
              .setColor('DARK_PURPLE')
              .setDescription(`
              > \`#Rename\`: **ΩΨͺΨΊΩΩΨ± Ψ§Ψ³Ω Ψ§ΩΨͺΨ°ΩΨ±Ω**
              > \`#Add\`: **ΩΨ§ΨΆΨ§ΩΩ Ψ΄Ψ?Ψ΅ ΩΨΉΩΩ ΩΩ Ψ§ΩΨͺΨ°ΩΨ±Ω**
              > \`#remove\`: **ΩΨ§Ψ²Ψ§ΩΩ Ψ΄Ψ?Ψ΅ ΩΨΉΩΩ ΩΩ Ψ§ΩΨͺΨ°ΩΨ±Ω**
  
  
              `)
              .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
            ]})
   
 
    
        
      }
   
      }
    })
  }
}

*/