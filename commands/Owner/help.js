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
              label: '🌐 General Commands',
              description: 'to Viuo Public Commands',
              value: 'pul'
              },
              {
              label: '🛠 Admin Commands',
              description: 'to Viuo Admin Commands',
              value: 'adm'
              },
              {
              label: '🎈 : Play Commands',
              description: 'to Viuo Play Commands',
              value: 'mus'
              },
              
                
             
      ])
        )
 
            let embed = new MessageEmbed()
            .setDescription(`**Hey ${message.author.username} , iam ${client.user.username}

> A Discord Bot With Many Awesome Features

> Help Related To Weller  Bot Commands:

🌐 : General Commands
🛠  : Admin Commands
🎈 : Play Commands


✨ Select A Category From The Menu 
            **`)
            .setColor('DARK_PURPLE')
 
 
    let m = await message.channel.send({embeds : [embed], components :[row]})
 
    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
 
    collector.on('collect', async i => {
      if(i.values[0] === 'pul' || i.values[1] === 'pul'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `Welcome to General Commands 🌐 `, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('DARK_PURPLE')
          .setDescription(`
          > \`#user\`: **يظهر معلومات حسابك**
          > \`#avatar\`: **يظهر لك صورتك**
          > \`#report\`: **للبلاغ عن شخص**
          > \`#server\`: **لاظهار معلومات السيرفر**
          > \`#botinfo\`: **لاظهار معلومات البوت**
          > \`#new\`: **يسوي لك thread**
          > \`#afk\`: **لايوجد شي لشرحه**
          > \`#ping\`: **لمعرفه سرعة استجابت البوت**
          > \`#color\`: **لتغيير لونك**
          > \`#banner\`: **يظهر لك بنر الشخص**
          > \`#profile\`: **يظهر لك بروفايلك  **
          > \`#tax\`: ** لايوجد شي لشرحه **
          > \`#𝖲tatus\`: **لمعرفه البوت شغال ام لا**
          > \`#emoji\`: **لايوجد شي لشرحه**
          > \`#id\`: **لمعرفه الايدي **
          > \`#boost\`: **يظهر لك كم عدد البوستات **
          > \`#memes\`: **لاظهار ميمز**
          > \`#servers\`: **لمعرفه البوت كم داخل سيرفر**
          > \`#Request\`: **لطلب شي معين من الاداره**
          > \`#invites\`: **يظهر لك عدد الدعوات**
          > \`#top-invites\`: **يظهر لك اكثر شخص سوا دعوات  **
          > \`#allbots\`: **يظهر لك جميع البوتات**
          > \`#uptime\`: **لمعرفه البوت كم له شغال**
          > \`#blur\`: **تخلي الصوره موشوشه**
          > \`#search-netflix\`: **Netflix للبحث في **
          > \`#search-youtube\`: **Youtube للبحث في **
          > \`#emojiinfo\`: **  يظهر لك معلومات الايموجي  **
          > \`#roleinfo\`: **يظهر لك معلومات الرتبه **





          

          

        

          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
      }
      if(i.values[0] === 'adm' || i.values[1] === 'adm'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `Welcome to Admin Commands 🛠 `, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('DARK_PURPLE')
          .setDescription(`
          > \`#ban\`: **لتبنيد شخص**
          > \`#unban\` : **لفك الباند عن شخص**
          > \`#kick\`: **لطرد شخص **
          > \`#mute\`: **لاسكات شخص**
          > \`#unmute\`: **لفك الاسكات**
          > \`#lock\`: **لقفل الروم**
          > \`#unlock\`: **لفك قفل الروم**
          > \`#show\`: **لاظهار الروم للجميع**
          > \`#hide\` : **لاخفاء الروم **
          > \`#say\`: **يكرر كلامك**
          > \`#sayy\`: ** يكرر كلامك بي امبيد**
          > \`#warn\`: **لاعطاء شخص تحذير**
          > \`#swarns\`: **لمعرفه كم اخذ تحذير**
          > \`#restart\`: **لاعاده تشغيل البوت**
          > \`#se\` : **لاظهار ايموجي معين**
          > \`#clear\` : **لحذف عدد من الرسايل**
          > \`#Delete\` : **لحذف الروم**
          > \`#slow\`: **لوضع السلو مود في الروم**
          > \`#set-avatar\`: **لتغيير صوره البوت**
          > \`#set-playing\`: ** لتغيير حاله البوت**
          > \`#add-roles\`: **لاعطاء شخص رتبه معينه**
          > \`#setnick\`: **لتغيير اسم الشخص**
          > \`#create\`: **يسوي روم بمنشن الشخص**
          > \`#removes\`: ** يسحب الرتب من كل اللي في السيرفر**
          > \`#rename\`: **لتغيير اسم الروم**
          > \`#topic\`: **لتغيير اسم التوبيك**
          > \`#hide all\`: **لاخفاء جميع الرومات**
          > \`#show all\`: **لاظهار جميع الرومات**
          > \`#text\`: **لانشاء روم كتابي  **
          > \`#voice\`: **لانشاء روم صوتي  **
          > \`#emojis\`: **يظهر لك جميع الايموجيات في السيرفر**
          > \`#bans\`: **يظهر لك جميع الاشخاص  اللي تبندو **
          > \`#vkick\`: **يطرد شخص من الروم  **



          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
 
      }
 
      if(i.values[0] === 'mus' || i.values[1] === 'mus'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `Welcome to  Play Commands 🎈`, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('DARK_PURPLE')
          .setDescription(`
          > \`#akinator\`: **لعبه المارد الازرق**
          > \`#kt\`: **كت تويت على السريع**
          > \`#xo\`: ** xo لعبه **
          > \`#slap\`: ** تعطي واحد كف  **
          > \`#hug\`: ** لحضن شخص **
          > \`#iq\`: **iq لمعرفه ال **
          > \`#emoji\`: **لعبه الاسرع في كتابت الايموجي**

          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
        if(i.values[0] === 'tic' || i.values[1] === 'tic'){
 
         
            m.edit({embeds : [
              new MessageEmbed()
              .setAuthor({name : `Welcome to Ticket Commands 📩`, iconURL : client.user.avatarURL()})
              .setThumbnail(client.user.avatarURL())
              .setColor('DARK_PURPLE')
              .setDescription(`
              > \`#Rename\`: **لتغيير اسم التذكره**
              > \`#Add\`: **لاضافه شخص معين في التذكره**
              > \`#remove\`: **لازاله شخص معين في التذكره**
  
  
              `)
              .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
            ]})
   
 
    
        
      }
   
      }
    })
  }
}

*/