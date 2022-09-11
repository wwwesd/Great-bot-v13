const { Client, Intents, Collection, MessageEmbed,MessageActionRow,MessageButton,MessageSelectMenu,MessageAttachment, Modal, TextInputComponent, showModal  } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');
const { PREFIX } = require('discord.js');
const ban = require('./commands/Staff/ban');
const prefix = "#";

const client = new Client({
  partials: ["CHANNEL"],
 intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    
],

});

client.commands = new Collection();
client.events = new Collection();

['commands', 'events'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
console.log(prefix );

const logs = require('discord-logs');
logs(client, {
    debug: true
});
 

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
})
 /*
const { Player } = require('discord-player');
*/


client.on("messageCreate", message => {
    if (message.channel.id != "982200284510031912") return;
    if(message.author.id === client.user.id) return
    message.channel.send(`**Thanks For Boost 🤍 
    [ ||<@${message.author.id}>|| ]**`);
  
  });

  

  
//welcome
var { inviteTracker } = require("discord-inviter"), // npm i discord-inviter
  SLK = new inviteTracker(client);
SLK.on('guildMemberAdd', async (SRAJ, inviter) => {
 const SLKWelcome = client.channels.cache.get('982184584781373470')
 const { MessageEmbed } = require('discord.js'); // npm i discord.js
  let embedSLK = new MessageEmbed()
  .setTitle(`> **Welcome To ${SRAJ.guild.name}**`)
  .setColor('#9784c4')
  .setDescription(`**
  > Username : <@${SRAJ.user.id}>
  > Invited By : <@${inviter.id}>
  > Members Server : ${SRAJ.guild.memberCount}
  > Joined Discord : <t:${parseInt(SRAJ.user.createdAt / 1000)}:R>,<t:${Math.floor(SRAJ.joinedAt / 1000)}:R>
  **`)
  .setThumbnail(SRAJ.user.avatarURL({ dynamic: true }))
  .setFooter({text:SRAJ.guild.name, iconURL:SRAJ.guild.iconURL({ dynamic: true })})
  SLKWelcome.send({embeds: [embedSLK]})
})






client.on('guildMemberAdd', member => {
  member.createDM().then(function (channel) {
return channel.send("**حياك الله في سيرفر Brown واذا حسيت نفسك تحتاج مساعده تعال أسالنا هنا <#982212408531640330> !**")
  }
  )});


client.on('messageCreate', message => {
    if(message.content === 'hi') {
    
    
    message.reply('**hello**')
    }  
    })

   
        

    client.on('messageCreate', message => {
        if(message.content === 'الو') {
        
        
        message.reply('**هلا**')
        }
        })

      
        

        client.on('messageCreate', message => {
            if(message.content === 'السلام عليكم') {
            
            
            message.reply('**وعليكم السلام ورحمه الله وبركاته**')
            }                  
            })

            client.on('messageCreate', message => {
              if(message.content === '<@982199803272388659>') {
              
              
              message.reply('**Welcome Im <@982199803272388659> My Prefix Is #**')
              }                  
              })
            

             
            
            client.on('messageCreate' , message => {
                if (message.content === 'Rules') { /// الكلمة 
                  const { MessageEmbed } = require('discord.js');   
                  let embed = new MessageEmbed()
            
                  .setImage("") /// رابط الصورة
                  .setDescription("**Room <#832358138543865917>**") /// الرد
                
            
                  message.channel.send({ embeds: [embed]});        
                
            
                      }
              })

                 

              client.on("messageCreate", Npg => { 
                if(Npg.content === `<@!${client.user.id}>`) { 
                 Npg.reply({ content: ` > **welcome im <@${client.user.id}> my prefix is ${prefix}**`}) //تقدر تغير الرد
                  }
               });
              
            



              
              client.on("messageCreate" , message => {
                const random = [
                 "‎لو قالوا لك  تناول صنف واحد فقط من الطعام لمدة شهر . ‏وش بيكون اختيارك ؟",
                 "‎شخص تحب تستفزه ؟",
                 "‎لو حلمت في شخص وصحيت وحصلت رساله من نفس الشخص . ارسل ايموجيي مثل ردة فعلك.",
                 "‎هات صورة تحس إنك ابدعت بتصويرها.",
                 "‎على إيش سهران ؟",
                 "‎مين تتوقع يطالعك طول الوقت بدون ملل ؟",
                 "‎وين جالس الحين ؟",
                 "‎كم من عشرة تقيم يومك ؟", 
                 "‎أطول مدة نمت فيها كم ساعه ؟",
                 "‎أجمل سنة ميلادية مرت عليك ؟",
                 "‎أخر رسالة بالواتس جاتك من مين ؟",
                 "‎ليه مانمت ؟",
                 "‎تعتقد فيه أحد يراقبك ؟",
                 "‎كم من عشره تعطي حظك ؟",
                 "‎كلمه ماسكه معك الفترة هذي ؟",
                 "‎شيء مستحيل تمل منه ؟",
                 "‎متى تنام بالعادة ؟",
                 "‎كم من عشرة جاهز للدراسة ؟",
                 "‎منشن صديقك الفزعة",
                 "‎يوم نفسك يرجع بكل تفاصيله ؟",
                 "‎أجمل صورة بجوالك ؟",
                 "‎ايش أغرب مكان قد صحتوا فيه؟",
                 "‎اذا جاك خبر مفرح اول واحد تعلمه فيه مين ؟",
                 "‎شيء لو يختفي تصير الحياة جميلة ؟",
                 "‎كم من عشرة تشوف نفسك محظوظ ؟",
                 "‎امدح نفسك بكلمة وحدة بس",
                 "‎كلمة لأقرب شخص لقلبك ؟",
                 "‎قوة الصداقة بالمدة ولا بالمواقف ؟",
                 "‎حط@منشن.شخص وقوله : حركتك مالها داعي.",
                 "‎تتابع مسلسلات ولا م تهتم ؟",
                 "‎تاريخ يعني لك الكثير ؟",
                 "‎كم عدد اللي معطيهم بلوك ؟",
                 "‎من الغباء انك ؟",
                 "‎اكثر شيء محتاجه الحين ؟",
                 "‎حط@منشن شخص تقوله : بطل تفكر فيني ابي انام",
                 "‎ايش مسهرك ؟.",
                 "‎حزين ولا مبسوط ؟",
                 "‎تحب سوالف مين ؟",
                 "‎كم من عشرة روتينك ممل ؟",
                 "‎شيء مستحيل ترفضه ؟.",
                 "‎كم من عشرة الإيجابية فيك ؟.",
                 "‎تعتقد اشباهك الاربعين عايشين حياة حلوة ؟.",
                 "‎مين جالس عندك ؟",
                 "‎كم من عشرة تشوف نفسك انسان ناجح ؟",
                 "‎شيء حظك فيه حلو ؟.",
                 "‎كم من عشرة الصبر عندك ؟",
                 "‎أخر مرة نزل عندكم مطر ؟",
                 "‎اكثر مشاكلك بسبب ؟",
                 "‎اكره شعور ممكن يحسه انسان ؟",
                 "‎شخص تحب تنشبله ؟",
                 "‎تنتظر شيء ؟",
                 "‎جربت تسكن وحدك ؟",
                 "‎اكثر لونين تحبهم مع بعض ؟",
                 "‎متى تكره نفسك ؟",
                 "‎كم من عشرة مروق ؟",
                 "‎مدينة تتمنى تعيش وتستقر فيها طول عمرك ؟",
                 "‎لو للحياة لون إيش بيكون لون حياتك ؟",
                 "‎ممكن في يوم من الأيام تصبح شخص نباتي ؟.",
                 "‎عمرك قابلت شخص يشبهك ؟",
                 "‎اخر شخص تهاوشت معه ؟",
                 "‎قبل ساعة ايش كنت تسوي ؟",
                 "‎كلمة تقولها للي ببالك ؟",
                 "‎أكثر شيء مضيع وقتك فيه ؟",
                 "‎لو فتحتا خزانتك إيش اكثر لون بنشوف ؟",
                 "‎قوة خارقة تتمنى تمتلكها ؟",
                 "‎اكثر مصايبك مع مين ؟",
                 "‎اذا زعلت إيش يرضيك ؟",
                 "‎من النوع اللي تعترف بسرعه ولا تجحد ؟",
                 "‎من الاشياء البسيطة اللي تسعدك ؟",
                 "‎اخر مره بكيت",
                 "‎ردّك على شخص قال : انا بطلع من حياتك؟.",
                 "‎ايموجي يعبر عن وضعك الحين ؟",
                 "‎التاريخ المنتظر بالنسبة لك ؟",
                 "‎كلنا بنسمعك إيش بتقول ؟",
                 "‎مدينتك اللي ولدت فيها ؟",
                 "‎عندك شخص مستحيل يمر يوم وما تكلمه ؟",
                 "‎كلمة تقولها لنفسك ؟",
                 "‎كم من عشرة متفائل بالمستقبل ؟",
                 "‎ردك المعتاد اذا أحد ناداك ؟",
                 "حط @منشن لشخص وقله الله يسامحك بس",
                 "‎أكثر كلمه تسمعها من أمك ؟",
                 "‎إيش تفضل عمل ميداني ولاعمل مكتبي ؟",
                 "‎أكثر حيوان تحبه ؟",
                 "‎اكثر مشاكلك بسبب ؟",
                 "‎اكثر صوت تكرهه ؟",
                 "‎اشياء تتمنى انها م تنتهي ؟",
                 "‎اشياء صعب تتقبلها بسرعه ؟",
                 "‎كم من عشرة راضي عن وضعك الحالي ؟",
                 "‎متى م تقدر تمسك ضحكتك ؟",
                 "‎اخر شخص قالك كلمة حلوة ؟",
                 "‎اكثر شيء تحبه بنفسك ؟",
                 "‎شيء نفسك يرجع ؟",
                 "‎اغلب وقتك ضايع على ؟",
                 "‎كيف تعرفت على اعز صديق لك ؟",
                 "‎تؤمن ان في حُب من أول نظرة ولا لا ؟.",
                 "‎شايل هم شيء الفترة هذي ؟",
                 "‎شخص م تحب تناقشه ؟",
                 "تقييمك للديسكورد الفترة ذي ؟"
             
                 ] 
             
             var result = random[Math.floor(Math.random() * random.length)];
             
             if(message.content == prefix + "kt") {
              let embed = new MessageEmbed()
             .setAuthor(`${message.guild.name}` , message.guild.iconURL({dynamic:true}))
             .setTitle("Cut Tweet")
             .setDescription(result)
             .setFooter(message.author.username , message.author.avatarURL({ dynamic: true }))
             .setThumbnail(message.guild.iconURL({dynamic:true}))
             .setTimestamp()
             .setColor("#9784c4") 
             
             message.channel.send({embeds: [embed]})
             }
             });
        
             client.on("messageCreate" , message => {
              const random = [
               "**𝖲tatus Bot Online** ",
            
           
               ] 
           
           var result = random[Math.floor(Math.random() * random.length)];
           
           if(message.content == prefix + "𝖲tatus") {
            let embed = new MessageEmbed()
           .setAuthor(`${message.guild.name}` , message.guild.iconURL({dynamic:true}))
           .setTitle("𝖲tatus")
           .setDescription(result)
           .setFooter(message.author.username , message.author.avatarURL({ dynamic: true }))
           .setThumbnail(message.guild.iconURL({dynamic:true}))
           .setTimestamp()
           .setColor("#9784c4") 
           
           message.channel.send({embeds: [embed]})
           }
           });

  client.on("messageCreate" , message => {
      const random = [
       "**```your guess : 3```** ",
                       "**```your guess : 1```** ",
                       "**``` your guess: 2```** ",
                       "**``` your guess: 4```** ",
                       "**```your guess : 5```** ",
       "**```your guess : 6```** ",



    
   
       ] 
   
   var result = random[Math.floor(Math.random() * random.length)];
   
   if(message.content == prefix + "dice") {
    let embed = new MessageEmbed()
   .setAuthor(`${message.guild.name}` , message.guild.iconURL({dynamic:true}))
   .setTitle("dice")
   .setDescription(result)
   .setFooter(message.author.username , message.author.avatarURL({ dynamic: true }))
   .setThumbnail(message.guild.iconURL({dynamic:true}))
   .setTimestamp()
   .setColor("#9784c4") 
   
   message.channel.send({embeds: [embed]})
   }
   });


          
        
        const rooom = '984469062073589802'
        client.on('messageCreate', D7M => {
        if (D7M.author.bot) return;
        if(D7M.channel.id != rooom) return;   
        D7M.channel.send({content : "https://cdn.discordapp.com/attachments/790515111752237067/980111928930230352/unknown.png"})
        })
const chanenl13 = '988506229003415632'
client.on('messageCreate', D7M => {
if(D7M.channel.id != chanenl13) return; 
D7M.channel.send({content : "https://cdn.discordapp.com/attachments/790515111752237067/980111928930230352/unknown.png"})
})

 client.on("message", message => {
      if(message.author.bot) return;
      if(message.channel.id == "982182727610695682") {////ايدي روم التقيم
      message.react("<a:913226418589143081:967486722701131857>")
         message.react("<a:885032511497965599:967486660231192608>")
      } else { return; }
      })
          
/*

client.on("messageCreate", function(message) {
    let args = message.content.split(" ").slice('').join(" ");
    if(message.author.bot)return;
    const sugch = message.channel.id === "982182727610695682"
    if (!sugch) return false;
    if(message.content.startsWith('')){
      message.delete()
    const embed = new MessageEmbed()
    .setAuthor(message.author.username,message.author.avatarURL())
    .setColor("#9784c4")
    .setThumbnail(message.author.avatarURL())
    .setDescription(`${args}`)
    .setTimestamp()
    message.channel.send({ embeds: [embed] }).then(msg => {
      msg.react('<a:913226418589143081:967486722701131857>').then( r => {
        msg.react("<a:885032511497965599:967486660231192608>")
        
      })
    
    }) 
  }
  }); 
  
client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if(message.channel.id !== "982182727610695682") return; // Room
  let embed = new MessageEmbed()
.setDescription(`${message.content}`)
.setColor("#9784c4")
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTimestamp()
await message.delete()
  await message.channel.send({ embeds: [embed] }).then(async (m) => {
    await m.react("<a:913226418589143081:967486722701131857>") //emoji
    await m.react("<a:885032511497965599:967486660231192608>") //emoji
    await message.channel.send({ 
files: ["https://cdn.discordapp.com/attachments/790515111752237067/980111928930230352/unknown.png"] }) // line
  }).catch(err => console.log(err))
})  
     */
client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if(message.channel.id !== "982183524318715934") return; // Room
  let embed = new MessageEmbed()
.setDescription(`${message.content}`)
.setColor("#9784c4")
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTimestamp()
await message.delete()
  await message.channel.send({ embeds: [embed] }).then(async (m) => {
    await m.react("<:image38:930614208586997811>") //emoji
    await m.react("<:image38:930614208586997811>") //emoji
    await message.channel.send({ 
files: ["https://cdn.discordapp.com/attachments/790515111752237067/980111928930230352/unknown.png"] }) // line
  }).catch(err => console.log(err))
})  
     
 


  


client.on('message', Npg => {
  if (Npg.content.includes("https://discord.gg")){
    let muterole = Npg.guild.roles.cache.find(r => r.name === "Muted");// حط اسم الرتبة مكان Muted
    Npg.delete()
    Npg.channel.send("**Links Are Not Allowed :x:**")//الرسالة اذا حذف الرابط
    Npg.member.roles.add(muterole)
    let roomNpg = client.channels.cache.get('982201958595190784')//////ايدي روم الوق 
    const { MessageEmbed } = require('discord.js'); // npm i discord.js
    let embedNpg = new MessageEmbed()
  .setColor('#9784c4') // لون الامبد الي يجي باللوق
  .setFields(
  { name: 'تم اسكات :', value: `<@${Npg.author.id}>` },// الرسالة الي تجي باللوق
  { name: 'السبب:' , value: `**${Npg.content}**`}
  )
  .setThumbnail(Npg.author.avatarURL)
  roomNpg.send({embeds: [embedNpg]})
  }
})





  client.on('guildMemberAdd', SLK => {
    if (SLK.guild.id === "826042241259798538")//Server Id
    {
    const role = SLK.guild.roles.cache.find(rol => rol.id == '982181413099028511');//role id 
    SLK.roles.add(role);
    }
    });



   

    client.on("guildMemberUpdate", function(oldMember, newMember) {
      if (newMember.roles.cache.has("982176833908924417")) {
          oldMember.roles.remove("982181413099028511");
      };
  });


  client.on('messageCreate', async message => {
if (message.content == prefix + 'Delete') {
  
      if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('ماعندك بيرمشن يا الحبيب')
    
  
      let chl = message.mentions.channels.first() || message.channel ;
      if(!chl) return message.reply('منشن الروم')
      message.guild.channels.create(chl.name , { type: "GUILD_TEXT" }).then(k7l => {
        message.channel.delete();[]
      })

    }
  });

  const akinator = require("discord.js-akinator");//npm i discord.js-akinator
client.on("messageCreate", async message => {
    if(message.content.startsWith(prefix+`akinator`)) {
        akinator(message, {
            language: 'ar',
            childMode: false,
            gameType: "character",
            useButtons: true
        });
    }
});

client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase().startsWith(prefix + "slow")) {
   if (message.author.bot) return;
   if (message.channel.type == "dm") {
     return;
   }
   var args = message.content.split(" ")
   if (isNaN(args[1])) return message.reply('ضع رقم فقط!')
   message.reply('** تم وضع السلو مود الى ' + args[1] + ' ثانيه **')
   message.channel.setRateLimitPerUser(args[1])
 }
})














  let Owner = ['719915319602184285']//هنا ايديك
  client.on('messageCreate', oqdl => {
    const args = oqdl.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase();  
    if(cmd === 'set-avatar'){
      if(!Owner.includes(oqdl.author.id)) return
      const args = oqdl.content.split(" ").slice(1).join(" ")
      if(!args) return oqdl.reply('**حط رابط الصوره**')
    client.user.setAvatar(`${args}`)
    oqdl.channel.send('تم')
    }
  })

  let owner = "719915319602184285"
  client.on('message', async message => {
    if(message.content.startsWith(prefix + 'set-playing')) {
    if(!owner.includes(message.author.id)) return;
    const ac = message.content.split(" ").slice(1).join(" ")
    if(!ac) return message.channel.send('**Activity ?**')
    client.user.setActivity(ac,{ type : 'PLAYING' })
    message.channel.send(`**Set Activity ${ac} ✅**`)
    }
    if(message.content.startsWith(prefix + 'set-listening')) {
    if(!owner.includes(message.author.id)) return;
    const ac = message.content.split(" ").slice(1).join(" ")
    if(!ac) return message.channel.send('**Activity ?**')
    client.user.setActivity(ac,{ type : 'LISTENING' })
    message.channel.send(`**Set Activity ${ac} ✅**`)
    }
    if(message.content.startsWith(prefix + 'set-watching')) {
    if(!owner.includes(message.author.id)) return;
    const ac = message.content.split(" ").slice(1).join(" ")
    if(!ac) return message.channel.send('**Activity ?**')
    client.user.setActivity(ac,{ type : 'WATCHING' })
    message.channel.send(`**Set Activity ${ac} ✅**`)
    }
    if(message.content.startsWith(prefix + 'set-competing')) {
    if(!owner.includes(message.author.id)) return;
    const ac = message.content.split(" ").slice(1).join(" ")
    if(!ac) return message.channel.send('**Activity ?**')
    client.user.setActivity(ac,{ type : 'COMPETING' })
    message.channel.send(`**Set Activity ${ac} ✅**`)
    }
    if(message.content.startsWith(prefix + 'set-streaming')) {
    if(!owner.includes(message.author.id)) return;
    const ac = message.content.split(" ").slice(1).join(" ")
    if(!ac) return message.channel.send('**Activity ?**')
    client.user.setActivity(ac,{ type : 'STREAMING', url : `https://www.twitch.tv/${ac}`})
    message.channel.send(`**Set Activity ${ac} ✅**`)
    }
  });

  
 
  

client.on('messageCreate', function (message) {
    let args = message.content.split(" ").slice('').join(" ");
    if (message.author.bot) return;
    const sugch = message.channel.id === "982202969665732619";
    if (!sugch) return false;
    if (message.content.startsWith('')) {
        message.delete();
        const embed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor("#9784c4")
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .setDescription(`${message.author}\n> **${args}**`)
            .setFooter(`Weller Bot`)
            .setTimestamp()
        message.channel.send({ embeds: [embed] }).then(msg => {
            msg.react('<a:928380639646994443:967488334484111390>')
            msg.react('<a:928380639626010694:967488350443433994>');
        })
    }
});

client.on('messageCreate', function (message) {
  let args = message.content.split(" ").slice('').join(" ");
  if (message.author.bot) return;
  const sugch = message.channel.id === "954791972135112724";
  if (!sugch) return false;
  if (message.content.startsWith('')) {
      message.delete();
      const embed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor("#9784c4")
          .setThumbnail(message.author.avatarURL({ dynamic: true }))
          .setDescription(`${message.author}\n> **${args}**`)
          .setFooter(`Weller Bot`)
          .setTimestamp()
      message.channel.send({ embeds: [embed] }).then(msg => {
          msg.react('<a:928380639646994443:967488334484111390>')
          msg.react('<a:928380639626010694:967488350443433994>');
      })
  }
});

client.on('messageCreate', function (message) {
  let args = message.content.split(" ").slice('').join(" ");
  if (message.author.bot) return;
  const sugch = message.channel.id === "978318730830438400";
  if (!sugch) return false;
  if (message.content.startsWith('')) {
      message.delete();
      const embed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor("#9784c4")
          .setThumbnail(message.author.avatarURL({ dynamic: true }))
          .setDescription(`${message.author}\n> **${args}**`)
          .setFooter(`Weller Bot`)
          .setTimestamp()
      message.channel.send({ embeds: [embed] }).then(msg => {
          msg.react('<a:928380639646994443:967488334484111390>')
          msg.react('<a:928380639626010694:967488350443433994>');
      })
  }
});

client.on('messageCreate', message => {
  if(message.content === prefix +'id'){
    let target = message.mentions.users.first() || message.author;
        let member = message.guild.members.cache.get(target.id);
    let embed = new MessageEmbed()
    .setColor('#9784c4')
    .setAuthor(member.user.id)
    .setFields(
      { name: 
        'Joined Discord :'
        , value: 
      `**<t:${Math.floor(member.user.createdAt / 1000)}:R>**`, inline: true },
      { name: 
        'Joined Server :', 
        value: 
      `**<t:${Math.floor(member.joinedAt / 1000)}:R>**`, inline: true },
  )
    message.channel.send({embeds:[embed]})
  }
  })
  
client.on('messageCreate', message => {
  if(message.content === prefix +'Roles'){
    message.reply('**ياخي كاتب لك فوق كم عدد الرول !**')
  }
  })


    client.on("messageCreate", message => {
      if (message.content == prefix + 'boost') {
        if (message.author.bot || !message.guild) return message.channel.send({ content: "**Sorry, but this is for servers only**" })
        let level = message.guild.premiumTier === 0 ? "No Level" : `${message.guild.premiumTier.toLocaleString()}`;
    
        let boost = message.guild.premiumSubscriptionCount;
    
        let embed = new MessageEmbed()
          .setTitle(`Boost of ${message.guild.name}`)
    
          .addField("🔮:・Boost", `${boost}`)
          
          .addField("📋:・Level", `${level}`)
          .setColor("#9784c4")
        message.channel.send({ embeds: [embed] })
      }
    });
      
    

  client.on('messageCreate', message => {
    if (message.content === prefix + 'الاستبيان') {
      let embed = new MessageEmbed()
        
         .setDescription(`
    **اسمك :**
    
    **عمرك :**
    
    **من وين :**
    
    **كم مدة تفاعلك :**
    
    **وش راح تفيد السيرفر :**
    `)
         .setColor("#9784c4")
         message.delete();
        message.channel.send({embeds:[embed]});
    }
    }); 
    const db = require('pro.db');
      const mb = require("muslim-bag")
      client.on('messageCreate', async message =>{
        if (message.content.startsWith(prefix + 'zkr')) {
          
        
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`ماعندك ادمن ستريتر`);
        let channel = message.mentions.channels.first();
        if(!channel)return message.channel.send("منشن الروم")
        db.set(`channel_azkar_${message.guild.id}` , channel.id)
        const ok = db.get(`channel_azkar_${message.guild.id}`)
        if(!ok)return;
      
        let chl = message.guild.channels.cache.get(ok)
        message.delete();
      message.channel.send("تم")
      
        setInterval(() => {
          chl.send(mb.Azkar())
        }, ms('15m'));
        
      }}
      
      )
      
  


client.on('messageCreate' , message =>{
  const simplydjs = require("simply-djs")
  if(message.author.bot || !message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase()
  if(cmd == "xo") {
    simplydjs.tictactoe(message, {xEmoji: '❌',oEmoji: '⭕',idleEmoji: '➖',embedColor: '#9784c4'})
    }
  })

  



 
    
    client.on("messageCreate", async Theo => {
      if (Theo.author.bot) return;
      if (
        Theo.content.startsWith( prefix + "Request")  
      ) {
        await Theo.delete();
        let ra3d22 = Theo.content
          .split(" ")
          .slice(1)
          .join(" ");
        if (!ra3d22)
          return Theo.channel
            .send(`> **يرجاء كتابه طلبك بعد الامر**`)
            .then(msg01 => {
              
              setTimeout(() => {
             
             msg01.delete();
            }, 2500); 
            });
            let orderchannelid1 = "982201421040615434"; ///تعبديل مهم
        let room = Theo.guild.channels.cache.find(
          ro => ro.id === orderchannelid1
        );
        if (!room)
          return Theo.channel.send(`> **لم استطع العثور على روم الطلبات**`);
        let send21 = new MessageEmbed()
          .setTitle(`**طلب جديد من الاعضاء :**`)
          .setAuthor(
            client.user.username,
            client.user.displayAvatarURL({ dynamic: true })
          )
          .setDescription(`الطلب
          > **${ra3d22}**`, )
          .setColor('#9784c4')
          .setThumbnail(Theo.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
        await room.send(`طلب جديد من الاعضاء :`);   ////here
        await room.send({ embeds: [send21]});
      }
      
    })


    const {Util} = require("discord.js")






    let Owners = ['719915319602184285','790513798314065921']
    let ms = require('ms')//npm i ms in shell
    client.on('messageCreate', message =>{
      if (message.content.startsWith(prefix + 'create')) {
        if(!Owners.includes(message.author.id)) return;
      let user = message.mentions.members.first();
      if(!user)return message.reply({content: '> **Set the user**'});
      let time = message.content.split(" ")
      if(!time)return message.reply({content: '> **Set Channel time**'});
      message.reply({content: `> **Done create the chanenl \`${user.user.username}-room\`**`})
      let everyone = message.guild.roles.cache.find(role => role.name === '@everyone');
        message.guild.channels.create(`${user.user.username}-room`,{type: 'GUILD_TEXT'}).then(nah =>{
        let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setTimestamp()
        .setTitle(message.guild.name)
        .addField(`صاحب الروم:`, `${user}`, false)
        .addField(`منشأء الروم`,`${message.author}`,false)
        .addField(`ينتهي في: `,`${time[2]}`)
        .setColor("#9784c4")
        nah.send({embeds:[embed]})
        nah.permissionOverwrites.create(user.id, { VIEW_CHANNEL: true, SEND_MESSAGES: true});
        nah.permissionOverwrites.edit(everyone, { VIEW_CHANNEL: true,SEND_MESSAGES: false }).then(setTimeout(() => {
          nah.delete();
        }, ms(time[2])))
    })
    }
    })
    
        client.on('message', async message => {
          if(!message.content.startsWith(prefix) || message.author.bot) return;
          const args = message.content.slice(prefix.length).trim().split(/ +/);
          const command = args.shift().toLowerCase();
         
          if(command === "removes"){


            if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('  يحليلك بس مسوي خوي ')

            
            let role = await message.mentions.roles.first() || await message.guild.roles.cache.get(args[0]);
         
            if(!role) return await message.channel.send('Role ?');
         
            try {
            await message.guild.members.cache.forEach(member => {member.roles.remove(role)});
            await message.channel.send(`Done`);
            } catch (err) {
              await message.channel.send(`Erorr : ${err}`)
            }
          }
        });

     
        client.on('message' , message =>{
          if (message.content.startsWith(prefix + "rename")) {
            if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('! 🙄 ليس لديك صلاحيات')
            if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply('! 🙄 ليس لدي صلاحيات')
              let newname = message.content.split(" ").slice(1).join(" ")
              if(!newname) return message.channel.send("name ?")
              message.channel.setName(newname)
          message.channel.send(`> تم تغير اسم الروم إلى \`${newname}\` `)
        }})
         
        client.on('message' , message =>{
            if (message.content.startsWith(prefix + "topic")) {
              if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`! 🙄 ليس لديك صلاحيات`)
              if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply("! 🙄 ليس لدي صلاحيات")
                let newtopic = message.content.split(" ").slice(1).join(" ")
                if(!newtopic) return message.channel.send("name ?")
                message.channel.setTopic(newtopic)
        message.channel.send(`> تم تغير اسم التويبيك إلى \`${newtopic}\` `)
        }})
      
       
    
        const pretty = require("pretty-ms");
        client.on('messageCreate', Theo => {
          if(Theo.content.startsWith(prefix + "uptime")){
        //code
            let embed = new MessageEmbed()
        
            .setDescription(`${pretty(client.uptime)}`)
            .setColor("#9784c4")
            Theo.channel.send({ embeds: [embed]})
        
          }
        })  
  


  client.on("message", message =>{
    if(message.content === prefix + "help"){
            message.react('✅');
    const embed = new MessageEmbed()
  }
})






client.on("messageCreate", (message) => {
  if (message.content === prefix + "servers") {
   
    
    const embed = new MessageEmbed()
      .setColor("#9784c4")
      .addField(`** - Users:**`, `${client.users.cache.size}`, true)
      .addField(`** - Channels:**`, `${client.channels.cache.size}`, true)
      .addField(`** - Servers**`, ` ${client.guilds.cache.size}`, true);

    message.channel.send({ embeds: [embed] });
  }
});



client.on('messageCreate', (message) => {
  if (message.content.startsWith( prefix + "emojiinfo")) {
      const args = message.content.slice(prefix).trim().split(/ +/g);

      if (!args.length) return message.channel.send(`Please provide emoji.`);

      for (const raw of args) {
          const parsed = Util.parseEmoji(raw);

          if (parsed.id) {
              const ex = parsed.animated ? ".gif" : ".png";
              const url = `https://cdn.discordapp.com/emojis/${parsed.id + ex}`;
              const embed = new MessageEmbed()
                  .setAuthor(`${parsed.name}`, url)
                  .addField(`Name: `, `${parsed.name}`, true)
                  .addField(`Id: `, `${parsed.id}`, true)
                  .addField(`Extention: `, `${ex}`, true)
                  .setImage(url)
                  .setColor('#9784c4')
              message.channel.send({ embeds: [embed] })
          }
      }
  }
})

client.on('messageCreate', (message) => {
  if (message.content === prefix + "emojis") {
    var emojis = message.guild.emojis;
      if (emojis.cache.size == 0) return message.channel.send(`There is no any emoji`);
      if (emojis.cache.size > 2048) return message.channel.send(`There are a lot of emojis.`)
      if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('  يحليلك بس مسوي خوي ')
      var embed = new MessageEmbed()
          .setColor('#9784c4')
          .setTimestamp()
          .setTitle(message.guild.name + '\'s Emojis list')
          .setThumbnail(message.guild.iconURL({ dynamic: true }) || message.author.avatarURL({ dynamic: true }))
          .setDescription(`**Not Animated** : ${emojis.cache.filter(e => !e.animated).map(e => e).join(' ') || "Not Found"}\n\n\n**Animated** : ${emojis.cache.filter(e => e.animated).map(e => e).join(' ') || "Not Found"}`)
      message.channel.send({ embeds: [embed] });
  }
})

client.on('message', message => {
  if (message.channel.type === 'DM' || message.author.bot) return;

  if (message.content.startsWith(prefix + 'roleinfo')) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
      const args = message.content.split(" ").slice(1)
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args);

      if(!role) return message.channel.send({ content: `Mention role.` });

      const embed = new MessageEmbed()
          .setTitle(`Info about ${role.name}`)
          .addField(`Name and ID:`, `${role.name}(ID: ${role.id})`, true)
          .addField(`Mentionable:`, `${role.mentionable}`, true)
          .addField(`Hex color:`, `${role.hexColor}`, true)
          .addField(`Member with this role:`, `${role.members.size}`, true)
          .addField(`Role position:`, `${role.position}`, true)
          .addField(`Created at:`, `${role.createdAt}`, true)
          .setColor('#9784c4')

      message.channel.send({ embeds: [embed] })
      
                         

  }
})

client.on('messageCreate', async Theo => {
  if (Theo.content.startsWith(prefix + 'hug')) {
      let args = Theo.content.toLowerCase().split(" ");
      let user = Theo.mentions.users.first() || Theo.guild.members.cache.get(args[0])
      if(!user) return Theo.channel.send('**منشن الشخص**')
      let e2 = new MessageEmbed()
      .setTitle('Hmmm.. You are so lonely 😔')
      .setColor('#9784c4')
      .setFooter(Theo.guild.name, Theo.guild.iconURL({dynamic: true})) 
              .setImage('https://cdn.nekos.life/cuddle/cuddle_018.gif')
      .setTimestamp()

      Theo.channel.send({ embeds: [e2], content: `<@${Theo.author.id}> Hugged ${user}`})

      
  }
})




client.on('guildMemberAdd', async member => {


  let embed = new MessageEmbed()
  .setAuthor({name: member.guild.name, iconURL: member.guild.iconURL({dynamic: true})})
  .setColor('WHITE')
  .setTitle('كيف عرفت السيرفر؟')
  .setTimestamp()
  .setFooter({text: member.user.tag, iconURL: member.user.avatarURL({dynamic: true})})
  let row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setStyle('SECONDARY')
    .setLabel('👑عن طريق رابط السيرفر')
    .setCustomId('ser'),
    new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('💎عن طريق رابط صديق')
    .setCustomId('frd'),
    new MessageButton()
    .setStyle('PRIMARY')
    .setLabel('اخر ❔')
    .setCustomId('owr'),
  )

 let m = await member.send({embeds: [embed], components: [row]}).catch(()=>{return;})
 const collector = m.createMessageComponentCollector({componentType: 'BUTTON', max: 1})
 const chl = member.guild.channels.cache.get('982203269386485800')

 let em = new MessageEmbed()
 .setAuthor({name: member.guild.name, iconURL: member.guild.iconURL({dynamic: true})})
 .setColor('#9784c4')
 .setTimestamp()
 .setFooter({text: member.user.tag, iconURL: member.user.avatarURL({dynamic: true})})

 collector.on('collect', async i =>{
   if (i.customId === 'ser') {
     chl.send({embeds: [em.setDescription(`<@${member.user.id}> دخل عن طريق رابط السيرفر `)]})
     member.send('شكرا لك . نتمنى لك وقتا ممتعا')
   }else if (i.customId === 'frd') {
    chl.send({embeds: [em.setDescription(`<@${member.user.id}> دخل عن طريق رابط صديق `)]})
    member.send('شكرا لك . نتمنى لك وقتا ممتعا')
  }else if (i.customId === 'owr') {
    var msg4;
                    i.channel.send(`اكتب كيف عرفت السيرفر الان`).then(i => {
                      i.channel.awaitMessages({ max: 1, time: 90000, errors: ['time'] }).catch(()=> {return;})
                    .then(collected => {
                      msg4 = collected.first().content;

                      chl.send({embeds: [em.setDescription(`<@${member.user.id}> دخل عن طريق  \`${msg4}\` `)]})
                      member.send('شكرا لك . نتمنى لك وقتا ممتعا')
                        })})
  }
 })
})

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "message")){
  if (message.attachments.size == 0){
  if(message.guild) return message.channel.send({ content: `خاص بس` })
  var aaa = message.content.split(' ')
  const aa = aaa[1]
  if(!aa) return message.channel.send({ content: `#message زاجل ايدي الشخص السؤال` })
  const user = client.users.cache.get(aa)
  if(!user) return 
  const args = message.content.split(' ').slice(2).join(' ')
  if(!args) return message.channel.send({ content: `#message زاجل ايدي الشخص السؤال` })
  var c = client.channels.cache.get('984024193710575646')
  let embedd = new MessageEmbed()
  .setTitle(`${user.username}`)
  .setDescription(`> ${args}`)
  .setTimestamp()
  .setThumbnail(user.avatarURL({dynamic: true}))
  .setColor('#9784c4')
  .setFooter(user.tag, user.avatarURL({dynamic: true}))
  c.send({content: `<@${user.id}> <a:917361731704090625:967492548979486841> `, embeds: [embedd]} )
  message.channel.send({ content: `تم الارسال`})
  } else {
  
  if(message.guild) return
  var aaa = message.content.split(' ')
  const aa = aaa[1]
  if(!aa) return message.channel.send({ content: `#message ايدي الشخص السؤال` })
  const user = client.users.cache.get(aa)
  if(!user) return 
  var c = client.channels.cache.get('984024193710575646')
  let embedd = new MessageEmbed()
  .setTitle(`${user.username}`)
  .setImage(`${message.attachments.first().url}`)
  .setTimestamp()
  .setThumbnail(user.avatarURL({dynamic: true}))
  .setColor('#9784c4')
  .setFooter(user.tag, user.avatarURL({dynamic: true}))
  c.send({content: `<@${user.id}> <a:917361731704090625:967492548979486841> `, embeds: [embedd]})
  message.channel.send({ content: `تم الارسال` })
  
  }
  }
  })

 /*
client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if (message.channel.type == "DM") {
        if (message.content.startsWith(prefix + "ad")) {
            const channel = client.channels.cache.get("984024193710575646")
            const member = client.users.cache.get(args[1])
            const messageContent = message.content.slice(24).split(" ").join(" ")

            if (!member) {
                let embed = new MessageEmbed()
                    .setDescription(`Use: #send userID message\nEx - #send 719915319602184285 i love you`)
                .setColor('#9784c4')
                return message.reply({ embeds: [embed] })
            } else if (!messageContent) {
                let embed = new MessageEmbed()
                    .setDescription(`Use: #send userID message\nEx - #send 719915319602184285 i love you`)
                .setColor('#9784c4')
                return message.reply({ embeds: [embed] })
            }

            let embed = new MessageEmbed()
                .setTitle("New Zajil🕊")
               .setColor('#9784c4')
                .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                .setDescription(`${messageContent}`)
            channel.send({ content: `وصلك زاجل ${member}`, embeds: [embed] })
        }
    }
})
*/
 
  client.on('messageCreate', async message => {
    if (message.content.startsWith(prefix + 'avatar')) {
      let args = message.content.toLowerCase().split(" ");
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]) || message.author

        if (!user) return message.reply('منشن الشخص')

        const png = member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        const jpg = member.user.displayAvatarURL({ dynamic: false, format: 'jpg' });
        const webp = member.user.displayAvatarURL({ dynamic: false, format: 'webp' });
        const gif = member.user.displayAvatarURL({ dynamic: true });


        let embed = new MessageEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setColor("#9784c4")
            .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setDescription(`Download Avatar Image At:\n**[png](${png}) | [jpg](${jpg}) | [gif](${gif}) | [webp](${webp})**` || `**[png](${png}) | [jpg](${jpg})**`)
            .setFooter(`Requested by: ${user.username}`, user.displayAvatarURL({ dynamic: true }))

         message.channel.send({embeds: [embed]}) 
    }
})





client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "setlog")) {
  let ch = message.mentions.channels.first()
  if(!ch) return message.reply(`:x: | **Mention a channel**`)
  message.reply(`> **Done added <#${ch.id}> to the DB **`)
  db.set(`channel2_${message.guild.id}`, ch.id)
  }
  });
  
  client.on("messageCreate" , message => {
    let now = new Date()
    let moment = require("moment")
    if(message.content.startsWith(prefix + "warn")) {
      let channel2 = db.get(`channel2_${message.guild.id}`)
      let channel = message.guild.channels.cache.get(channel2)
      if(!message.member.permissions.has("ADMINISTRATOR")) return;
      let user = message.mentions.users.first()
      if(!user) return message.reply(":x: | **Mention a user**")
      if(user.bot) return message.reply(":rolling_eyes: | **You can't warn a bot**")
      if(user.id == message.member.id) return message.reply(":rolling_eyes: | **You can't warn yourself**")
      let reason = message.content.split(" ").slice(2).join(" ")
      if(!reason) return message.reply(":x: | **Put a reason**")
      if(!channel2) return message.reply(":x: | **Set log channel first by using : \`${prefix}setlog\` command**")
      db.add(`warns_${user.id}` , 1)
      db.set(`reason_${user.id}` , reason)
      db.set(`messageauthor_${user.id}` , message.author.id)
      db.set(`time_${user.id}` , moment(now).format("M/D/YYYY"))
      let embed = new MessageEmbed()
      .setAuthor(message.author.username , message.author.displayAvatarURL())
      .setDescription(`> **You have warned in server : ${message.guild.name}**\n> **Reason : ${reason}**\n> **Warned by : <@${message.author.id}>**\n> **Warned at : ${moment(now).format("M/D/YYYY")}**`)
                                .setColor("#9784c4")
      .setThumbnail(message.guild.iconURL())
      .setFooter(user.username , user.displayAvatarURL())
      let embed2 = new MessageEmbed()
      .setAuthor(message.author.username , message.author.displayAvatarURL())
      .setTitle("**User were warned !**")
                    .setColor("#9784c4")
      .setDescription(`> **User : ${user}**\n> **Reason : ${reason}**\n> **Warned by : <@${message.author.id}>**\n> **Warned at : ${moment(now).format("M/D/YYYY")}**`)
      .setThumbnail(message.guild.iconURL())
      .setFooter(user.username , user.displayAvatarURL())
      user.send({embeds:[embed]})
      channel.send({embeds:[embed2]})
      message.reply(`> **Done warned ${user}**`)
    }
  });
  
  client.on("messageCreate" , message => {
    if(message.content.startsWith(prefix + "allwarns")) {
      let user = message.mentions.users.first()
      if(!user) return message.reply(":x: | **Mention a user**")
      let warns = db.get(`warns_${user.id}`)
      if(!warns) return message.reply("> **This user have 0 warns**")
      let reason = db.get(`reason_${user.id}`)
      let warnedby = db.get(`messageauthor_${user.id}`)
      let time = db.get(`time_${user.id}`)
      let embed = new MessageEmbed()
      .setAuthor(message.author.username , message.author.displayAvatarURL())
      .setDescription(`> **-This user have ${warns} warns**\n> **-Reason : ${reason}**\n> **-Warned by : <@!${warnedby}>**\n> **-Warned at : ${time}**`)
                    .setColor("#9784c4")
      .setThumbnail(message.guild.iconURL())
      .setFooter(message.guild.name , message.guild.iconURL())
      message.reply({embeds:[embed]})
    }
  });
  
  client.on("messageCreate" , message => {
    if(message.content.startsWith(prefix + "removewarn")) {
      if(!message.member.permissions.has("ADMINISTRATOR")) return;
      let user = message.mentions.users.first()
      if(!user) return message.reply(":x: | **Mention a user**")
      if(user.bot) return message.reply(":rolling_eyes: | **Bots don't have warns**")
      if(user.id == message.member.id) return message.reply(":rolling_eyes: | **You can't remove from yourself**")
      if(!db.has(`warns_${user.id}`)) return message.reply(":x: | **This user doesn't have any warns**")
      db.subtract(`warns_${user.id}` , 1)
      message.reply(`> **Done removing 1 warn for ${user}**`)
    }
  });
client.on('messageCreate',  message =>{


  let k7l = prefix + 'setnick'
  
  if(!message.content.startsWith(k7l))return;

    
    if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply(`ماعنك بيرمشن`)

    let member = message.mentions.members.first();
    let nikc =  message.content.split(" ").slice('2').join(" ");



    if(!member) return message.reply('منشن الشخص')
    if(!nikc) return message.reply('اكتب الاسم الي تبيه')

    
    message.reply(`دن غيرت اسم ${member} الى **${nikc}**`).then(m =>{
      member.setNickname(nikc)
    })





})

client.on('messageCreate', async message => {
  if(message.channel.type === 'DM'){
   const log = client.channels.cache.get('988065316397527100')
    let aziz = new MessageEmbed()
    .setTitle('New Modmaill')
    .setDescription(`من : <@${message.author.id}>`)
    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
    .setColor('#9784c4')
    .setThumbnail(message.author.displayAvatarURL())
    log.send({
      embeds: [aziz]
  });
  }
})



client.on('messageCreate', message => {
  if (message.content === prefix + "allbots") {
    let arr = new Array();
    let esp = message.guild.members.cache.filter(e => e.user.bot);
      esp.forEach(member => arr.push(`${member}`))
    let embed = new MessageEmbed()
      .setTitle(`${message.guild.name} bots`)
      .setDescription(`${arr.join(`\n`)}`)
      .setTimestamp()
      .setColor("#9784c4")
    message.channel.send({embeds:[embed]});
  }
}) 

client.on('messageCreate' , message => {
  if(message.content.toLowerCase().startsWith(prefix + 'come')){
    let args = message.content.split(" ");
    let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
    const ex = new MessageEmbed()
    .setTitle(`Command : Come`)
    .setColor("#9784c4")
    .setDescription(`**Usage :**
${prefix}come <mention / ID>

**Examples : **
${prefix}come <@${message.author.id}>
${prefix}come ${message.author.id}`)
    if(!user) return message.channel.send({embeds : [ex]})
    const userem = new MessageEmbed()
    
      .setAuthor(`${user.tag}` , user.avatarURL())
      .setTitle(`New Call`)
      .setColor("#9784c4")
    .setDescription(`
Guild : \`${message.guild.name}\`
Caller  : <@${message.author.id}> 
channel : <#${message.channel.id}>`)
    user.send({embeds : [userem]})
    
    message.channel.send(`✅ Done | He will be come here soon !!`)
  }
})




client.on("guildMemberAdd", member => {
  var embed = new MessageEmbed()
  .setAuthor(member.user.username, member.user.avatarURL())
  .setThumbnail(member.user.avatarURL())
  .setTitle(`has been join server`)
  .addField('👤  Now Members',`**[ ${member.guild.memberCount} ] ✅**`,true)
  .setColor('#9784c4') 
var channel = member.guild.channels.cache.find(e => e.id === "878769234874875926")
if (!channel) return;
channel.send({ embeds: [embed] });
})  

client.on("messageCreate", message => {
  if (message.content == prefix + 'support') {
    let embed = new MessageEmbed()
    .setColor(`#9784c4`)
    .setTitle(`Support Server`)
    .setURL(`https://discord.gg/gYSerfs9B3`) 
    message.channel.send({ embeds: [embed] })
  }
});
client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {
    
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id
  const TopicUpdate = new MessageEmbed()
      .setTitle('Topic Updated!')
      .setColor('#9784c4')
      .setDescription(`${channel} Topic changed from **${oldTopic}** to **${newTopic}**`);

  return LogChannel.send({
      embeds: [TopicUpdate]
  });

});





const { Snake } = require("discord-gamecord");

client.on('messageCreate', async message => {
  if(message.content === prefix + 'snake') {
    new Snake({
      message: message,
      slash_command: false,
      embed: {
        title: 'Snake Game',
        color: "#9784c4",
        OverTitle: 'Game Over',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢' },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️', 
        down: '⬇️',
        right: '➡️',
        left: '⬅️',
      }
    }).startGame();
  }
});

client.on('messageCreate', async message => {
  const { inviteTracker } = require("discord-inviter");

  if (message.content == prefix + 'top-invites') {
      let top = await inviteTracker.getTopInvites(message.guild);

      const embed = new MessageEmbed()
          .setTitle("Top Invites")
          .setColor("#9784c4")
          .setAuthor({ name: `${message.guild.name}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png" }))
          .setTimestamp(Date.now())
          .setDescription(top.map((i, n) => `\`#${n + 1}\`- **${i.user.tag}** has __${i.count}__`).join("\n"))

      message.channel.send({ embeds: [embed] })
  }
})



const channelss = ['982201318116556800']

client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "set-ch")){
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({ content: `تبغي تزرفني والله ما اشتغل` });
  if(message.author.bot)return
  let channel = message.mentions.channels.first();
  if(!channel)return message.channel.send({ content: "id Channel" })
  db.set(`channel_${message.guild.id}` , channel.id)
  message.channel.send({ content: `Done Has Been Added`}).then(msg => setTimeout(() => { msg.delete() , 20000})) }
})

client.on('messageDelete', async message => {  
  let channel = await db.get(`channel_${message.guild.id}`)
  if(message.author.bot) return;
  if(message.channel.type === "UNKNOWN") return;  

  var logChannel = message.guild.channels.cache.find(c => c.id === channel);  
  if(!logChannel) return;  
  let messageDelete = new MessageEmbed()  
  .setColor(`#9784c4`)  
  .setAuthor(`MessageDelete`, message.author.avatarURL({dynamic: true}))
  .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/863383452791734272.gif?size=80`)
  .setFooter(message.guild.name, message.guild.iconURL({dynamic: true})) 

  logChannel.send({ embeds: [messageDelete] });
});
/*
client.on('messageUpdate', async (oldMessage, newMessage) => {  
  let channel = await db.get(`channel_${oldMessage.guild.id}`)
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === "UNKNOWN") return;
  
    var logChannel = oldMessage.guild.channels.cache.find(c => c.id === channel);
    if(!logChannel) return;
  
    if(oldMessage.content.startsWith('https://')) return;  
  
    let messageUpdate = new MessageEmbed()
    .setAuthor(`MessageEdit`, oldMessage.author.avatarURL({dynamic: true}))
    .setThumbnail(`https://cdn.discordapp.com/emojis/854132515979919380.png?size=80`)
    .setColor(`DARK_PURPLE`)
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL({dynamic: true})) 
  
    logChannel.send({ embeds: [messageUpdate] });
  });  
*/

  client.on('guildMemberUpdate', async (oldMember, newMember) => { 
    let channel = await db.get(`channel_${oldMember.guild.id}`)
  
  var logChannel = oldMember.guild.channels.cache.find(c => c.id === channel); 
  if(!logChannel) return;
  
  oldMember.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id; 
  
      if(oldMember.nickname !== newMember.nickname) {
          if(oldMember.nickname === null) {
              var oldNM = '\`\`Original Name\`\`';
          }else {
              var oldNM = oldMember.nickname;
          }
          if(newMember.nickname === null) {
              var newNM = '\`\`Original Name\`\`'; 
          }else {
              var newNM = newMember.nickname;
          }
          let updateNickname = new MessageEmbed()
          .setTitle('Update Mmember Nickname')
          .setThumbnail('https://cdn.discordapp.com/emojis/863383470717534208.gif?size=80')
          .setColor(`#9784c4`)
          .setDescription(`\n**User:** ${oldMember}\n**Old Nickname:** \`\`\`${oldNM}\`\`\`\n**New Nickname:** \`\`\`${newNM}\`\`\`\n**By:** <@${userID}>`)
          .setTimestamp()
          .setFooter(oldMember.guild.name, oldMember.guild.iconURL({dynamic: true}))
  
          logChannel.send({ embeds: [updateNickname] })
      }})
  })     






client.on("guildMemberRoleAdd", async(member, role) => {
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id
  if (!LogChannel ) return;

  member.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let memberavatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed4 = new MessageEmbed()
            .setTitle('Role updated')
            .setColor('#9784c4')
            .addField('Member role add : ', `<@${member.user.id}>`)
            .addField('Role : ', `<@&${role.id}> \`${role.id}\``)
            .setTimestamp()
            .addField('updated by : ', `<@${memberid}> (${memberid})`)

            LogChannel.send({embeds: [embed4]});
          });
});

client.on("guildMemberRoleRemove", async(member, role) => {
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id
  if (!LogChannel ) return;

  member.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let memberavatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed5 = new MessageEmbed()
            .setTitle('Role updated')
            .setColor('#9784c4')
            .addField('Member role remove : ', `<@${member.user.id}>`)
            .addField('Role : ', `<@&${role.id}> \`${role.id}\``)
            .setTimestamp()
            .addField('updated by : ', `<@${memberid}> (${memberid})`)

            LogChannel.send({embeds: [embed5]});
          });
});

client.on("guildChannelPermissionsUpdate", async(channel, oldPermissions, newPermissions, member) => {
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id
  if (!LogChannel ) return;
  channel.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let userAvatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
            const embed = new MessageEmbed()
            .setTitle('permissions updated')
            .setThumbnail(userAvatar)
            .setColor('#9784c4')
            .addField('Channel name : ', `\`${channel.name}\` ${newPermissions}`)
            .setTimestamp()
            .addField('updated by : ', `<@${memberid}> (${memberid})`)

            LogChannel.send({embeds: [embed]});
});
});

client.on("guildMemberEntered", async(member) => {
  const LogChannel = client.channels.cache.get('982203269386485800'); // Replace with your channel id

  if (!LogChannel ) return;
  member.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let memberavatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed6 = new MessageEmbed()
            .setTitle('New member')
            .setColor('#9784c4')
            .addField('Member join : ', `<@${member.user.id}> \`${member.user.id}\``)
            .addField('Account age : ', `${moment(member.user.createdAt).format(`**<t:${parseInt(member.user.createdAt / 1000)}:R>**`)}`)
            .setTimestamp()

            LogChannel.send({embeds: [embed6]});
          });
});

client.on("guildMemberOffline", async(member, oldStatus) => {
  const LogChannel = client.channels.cache.get('982649115345313832'); // Replace with your channel id

  if (!LogChannel ) return;
  member.guild.fetchAuditLogs().then(discordlogs => {
    let userAvatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed7 = new MessageEmbed()
            .setTitle('Member status')
            .setColor('#9784c4')
            .addField('Member : ', `<@${member.user.id}>`)
            .addField('New status : ', `Offline`)
            .setTimestamp()

            LogChannel.send({embeds: [embed7]});
});
});
client.on("guildMemberOnline", async(member, newStatus) => {
  const LogChannel = client.channels.cache.get('982649115345313832'); // Replace with your channel id
  if (!LogChannel ) return;

  member.guild.fetchAuditLogs().then(discordlogs => {
    let userAvatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed7 = new MessageEmbed()
            .setTitle('Member status')
            .setColor('#9784c4')
            .addField('Member : ', `<@${member.user.id}>`)
            .addField('New status : ', `${newStatus}`)
            .addField('Old status : ', `Offline`)
            .setTimestamp()

            LogChannel.send({embeds: [embed7]});
});
});

client.on("voiceStreamingStart", async(member, voiceChannel) => {
  const LogChannel = client.channels.cache.get('982651207740981268'); // Replace with your channel id
  if (!LogChannel ) return;
  member.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let memberavatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed7 = new MessageEmbed()
            .setTitle('Streaming Start')
  .setColor(`#9784c4`)
            .addField('user name : ', `<@${member.id}>`)
            .addField('Voice streaming start : ', `<#${voiceChannel.id}> (${voiceChannel.name})`)
            .setTimestamp()

             LogChannel.send({embeds: [embed7]});
});
});

client.on("voiceStreamingStop", async(member, voiceChannel) => {
  const LogChannel = client.channels.cache.get('982651207740981268'); // Replace with your channel id
  if (!LogChannel ) return;
  member.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let memberavatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed7 = new MessageEmbed()
            .setTitle('streaming stop')
  .setColor(`#9784c4`)
            .addField('user name : ', `<@${member.id}>`)
            .addField('Voice streaming stop : ', `<#${voiceChannel.id}> (${voiceChannel.name})`)
            .setTimestamp()
            LogChannel.send({embeds: [embed7]});
});
});;


client.on("voiceChannelSwitch", async(member, oldChannel, newChannel) => {
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id

  if (!LogChannel ) return;
        member.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let userAvatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed7 = new MessageEmbed()
            .setTitle('Switch Voice channel')
            .setColor('#9784c4')
            .addField('User Move : ', `<@${member.user.id}>`)
            .addField('Old channel : ', `<#${oldChannel.id}> (${oldChannel.name})`)
            .addField('New channel : ', `<#${newChannel.id}> (${newChannel.name})`)
            .setTimestamp()

            LogChannel.send({embeds: [embed7]});
          });
});

client.on("voiceChannelJoin", async(member, channel) => {
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id

  if (!LogChannel ) return;
  const embed7 = new MessageEmbed()
            .setTitle('Join Voice Room')
            .setColor('#9784c4')
            .addField('user name : ', `<@${member.id}>`)
            .addField('Joined voice channel : ', `<#${channel.id}> (${channel.name})`)
            .setThumbnail('https://cdn.discordapp.com/emojis/863316830633197578.gif?size=80')
            .setTimestamp()

            LogChannel.send({embeds: [embed7]});
});

client.on("voiceChannelLeave", async(member, channel) => {
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id

  if (!LogChannel ) return;
  const embed7 = new MessageEmbed()
            .setTitle('Leave Voice Room')
            .setColor('#9784c4')
            .addField('user name : ', `<@${member.id}>`)
            .addField('Left voice channel : ', `<#${channel.id}> (${channel.name})`)
            .setThumbnail('https://cdn.discordapp.com/emojis/853547756001296425.png?size=80')
            .setTimestamp()

            LogChannel.send({embeds: [embed7]});
});

client.on('voiceStateUpdate', async (voiceOld, voiceNew) => {
  let channel = await db.get(`channel_${voiceOld.guild.id}`)


  var logChannel = voiceOld.guild.channels.cache.find(c => c.id === channel);
  if(!logChannel) return;
  voiceOld.guild.fetchAuditLogs().then(logs => {
      var userID = voiceOld.author

      if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
          let = serverMutev = new MessageEmbed()
          .setTitle('Voice Mute')
          .setThumbnail('https://cdn.discordapp.com/emojis/863316829715955783.gif?.size=80')
          .setColor('#9784c4')
          .setDescription(`**User:** <@${voiceOld.id}>  \n**Channel Name :** \`\`${voiceOld.channel.name}\`\` (**Channel ** : ${voiceOld.channel})`)
          .setTimestamp()

          logChannel.send({ embeds: [serverMutev] });
      }

      if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
          let serverUnmutev = new MessageEmbed()
          .setTitle('Voice Unmute')
          .setThumbnail('https://cdn.discordapp.com/emojis/863316828256337920.gif?size=80')
          .setColor('#9784c4')
          .setDescription(`**User:** <@${voiceOld.id}>  \n**Channel Name :** \`\`${voiceOld.channel.name}\`\` (**Channel ** : ${voiceOld.channel})`)
          .setTimestamp()

          logChannel.send({ embeds: [serverUnmutev] });
      }

      if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
          let serverDeafv = new MessageEmbed()
          .setTitle('VOICE DEAFEN')
          .setThumbnail('https://cdn.discordapp.com/emojis/889519299776110733.png?size=80')
          .setColor('#9784c4')
          .setDescription(`**User:** <@${voiceOld.id}>  \n**Channel Name :** \`\`${voiceOld.channel.name}\`\` (**Channel ** : ${voiceOld.channel})`)
          .setTimestamp()

          logChannel.send({ embeds: [serverDeafv] });
      }

      if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
          let serverUndeafv = new MessageEmbed() 
          .setTitle('Voice UnDefen')
          .setThumbnail('https://cdn.discordapp.com/emojis/889519299436359760.png?size=80')
          .setColor('#9784c4')
          .setDescription(`**User:** <@${voiceOld.id}>  \n**Channel Name :** \`\`${voiceOld.channel.name}\`\` (**Channel ** : ${voiceOld.channel})`)
          .setTimestamp()

          logChannel.send({ embeds: [serverUndeafv] }); 
      }

      
      
      });
  })  






client.on('roleUpdate', async (oldRole, newRole) => {
  let channel = await db.get(`channel_${oldRole.guild.id}`)


  var logChannel = oldRole.guild.channels.cache.find(c => c.id === channel);
  if(!logChannel) return;
 
  oldRole.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var usertag = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL({dynamic: true});
 
      if(oldRole.name !== newRole.name) {
          let roleUpdateName = new MessageEmbed()
          .setAuthor('Role Name Update',userAvatar)  
          .setThumbnail('https://cdn.discordapp.com/emojis/854132515979919380.png?size=80')  
          .setColor(`#9784c4`)
          .setDescription(`\n **Info Of User:** \`\`\`UpdateBy: ${usertag} \nUserID: ${userID}\`\`\`
      **Info Of Role:** \`\`\`OldName: ${oldRole.name}\nNewRoleName: ${newRole.name}\nRoleID: ${oldRole.id}\`\`\``)
          .setTimestamp()
          .setFooter(oldRole.guild.name, oldRole.guild.iconURL({dynamic: true}))

          logChannel.send({ embeds: [roleUpdateName] });  
      }
      if(oldRole.hexColor !== newRole.hexColor) {  
          if(oldRole.hexColor === 'Black') {  
              var oldColor = '`Default`';  
          }else {
              var oldColor = oldRole.hexColor;
          }    
          if(newRole.hexColor === 'Black') {  
              var newColor = '`Default`';  
          }else {
              var newColor = newRole.hexColor;  
          }  
          let roleUpdateColor = new MessageEmbed()  
          .setTitle('Role Color Update', userAvatar)  
          .setThumbnail('https://cdn.discordapp.com/emojis/911385098413281300.png?size=80')  
          .setColor(`#9784c4`)
          .setDescription(`\n **Info Of User:** \`\`\`UpdateBy: ${usertag} \nUserID: ${userID}\`\`\`
      **Info Of Role:** \`\`\`RoleName: ${oldRole.name}\nOldColor: ${oldColor}\nNewColor: ${newColor}\nRoleID: ${oldRole.id}\`\`\``)
          .setTimestamp()  
          .setFooter(oldRole.guild.name, oldRole.guild.iconURL({dynamic: true}))
 
          logChannel.send({ embeds: [roleUpdateColor] });
      }
  })
});  

client.on('guildBanAdd', async(guild, user) => {
    var logChannel = guild.channels.cache.find(c => c.id === channelss); 
    if(!logChannel) return;
  let embed = new MessageEmbed()
  .setColor(`#9784c4`)
  .setTitle('New User Banned')
  .setThumbnail('https://cdn.discordapp.com/emojis/888952938800762950.png?size=80')
  .setDescription(`** Successfully Banned User:** \`\`\`${user.tag}\`\`\` `)
  .setTimestamp()
  .setFooter(guild.name, guild.iconURL({dynamic: true}))
  logChannel.send({ embeds: [embed] })
  })
   
  client.on('guildBanRemove', async(guild, user) => {
    var logChannel = guild.channels.cache.find(c => c.id === channelss); 
    if(!logChannel) return;
  let embed = new MessageEmbed()
  .setColor(`#9784c4`)
  .setTitle('New User UnBanned')
  .setThumbnail('https://cdn.discordapp.com/emojis/863372572010479637.gif?size=80')
  .setDescription(`** Successfully Unbanned From:** \`\`\`${user.tag}\`\`\` `)
  .setTimestamp()
  .setFooter(guild.name, guild.iconURL())
  logChannel.send({ embeds: [embed] })
  })
  
  client.on('guildBanRemove', async (guild, user) => {
      let channel = await db.get(`channel_${user.guild.id}`)
  
    var logChannel = guild.channels.cache.find(c => c.id === channel); 
    if(!logChannel) return;
  
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  
        let unBanInfo = new MessageEmbed()
        .setTitle('UnBanned')
        .setThumbnail('https://cdn.discordapp.com/emojis/863372572010479637.gif?size=80')
        .setColor(`#9784c4`)
        .setDescription(`\n**User:** ${user.username}\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL({dynamic: true}))
  
        logChannel.send({ embeds: [unBanInfo] });
    })
  });  

client.on('roleCreate',async role => {
  let channel = await db.get(`channel_${role.guild.id}`)


  var logChannel = role.guild.channels.cache.find(c => c.id === channel);
  if(!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var usertag = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL({dynamic: true});

      let roleCreate = new MessageEmbed()
      .setAuthor(`Role Create`,userAvatar)
      .setThumbnail('https://cdn.discordapp.com/emojis/853547759269576715.png?size=80')  
      .setDescription(`\n **Info Of User:** \`\`\`CreatedBy: ${usertag} \nUserID: ${userID}\`\`\`
      **Info Of Role:** \`\`\`RoleName: ${role.name}\nRoleID: ${role.id}\`\`\``)
      .setColor(`#9784c4`)
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL({dynamic: true}))  
 
      logChannel.send({ embeds: [roleCreate] });
  })
})  

client.on('roleDelete', async role => {  
  let channel = await db.get(`channel_${role.guild.id}`)


  var logChannel = role.guild.channels.cache.find(c => c.id === channel);
  if(!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var usertag = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL({dynamic: true});

      let roleDelete = new MessageEmbed()
      .setAuthor('Role Delete', userAvatar)
      .setThumbnail(`https://cdn.discordapp.com/emojis/863383452791734272.gif?size=80`)  
      .setDescription(`\n **Info Of User:** \`\`\`DeletedBy: ${usertag} \nUserID: ${userID}\`\`\`
      **Info Of Role:** \`\`\`RoleName: ${role.name}\nRoleID: ${role.id}\`\`\``)
      .setColor(`#9784c4`)
      .setTimestamp()  
      .setFooter(role.guild.name, role.guild.iconURL)

      logChannel.send({ embeds: [roleDelete] });  
  })
});  




client.on("messagePinned", async(message) => {
  const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id
  if (!LogChannel ) return;
        message.guild.fetchAuditLogs().then(discordlogs => {
            let memberid = discordlogs.entries.first().executor.id;
            let memberavatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
  const embed7 = new MessageEmbed()
            .setTitle('Message pinned')
            .setColor('#9784c4')
            .addField('Message : ', `${message} | [JumpToMessage](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
            .addField('Pinned by : ', `<@${memberid}>`)
            .setTimestamp()

            LogChannel.send({embeds: [embed7]});
});
});

  client.on("messageContentEdited", async(message, oldContent, newContent) => {
    const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id
  
    if (!LogChannel ) return;
          message.guild.fetchAuditLogs().then(discordlogs => {
              let memberid = discordlogs.entries.first().executor.id;
              let memberavatar = discordlogs.entries.first().executor.displayAvatarURL({ dynamic: true });
    const embed7 = new MessageEmbed()
              .setTitle('Message edited')
              .setColor('#9784c4')
              .addField('Old message : ', `\`\`\`${oldContent}\`\`\``)
              .addField('New message : ', `\`\`\`${newContent}\`\`\` 
              [JumpToMessage](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
              .addField('Edited by : ', `<@${memberid}>`)
              .setThumbnail('https://cdn.discordapp.com/emojis/854132515979919380.png?size=80')
              .setTimestamp()
  
    LogChannel.send({embeds: [embed7]});
  });
  });

client.on('channelCreate', async (channel) => { 
  if(!channel.guild) return;
  const channel2 = await db.get(`channel_${channel.guild.id}`)
  var logChannel = channel.guild.channels.cache.find(c => c.id === channel2);
  if(!logChannel) return;

  if(channel.type === "UNKNOWN") {
      var roomType = 'Text';
  }else
  if(channel.type === "UNKNOWN") { 
      var roomType = 'Voice';
  }else
  if(channel.type === "UNKNOWN") { 
      var roomType = 'Category';
  }

  channel.guild.fetchAuditLogs().then(logs => { 
      var userID = logs.entries.first().executor.id;  
      let channelCreate = new MessageEmbed() 
      .setTitle('Channel Create') 
      .setThumbnail('https://cdn.discordapp.com/emojis/872432417758121984.png?size=80')
      .setDescription(`        **\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})
      `)
      .setColor(`#9784c4`)
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL({dynamic: true}))

      logChannel.send({ embeds: [channelCreate] });
  })
}); 
client.on('channelDelete',  async channel => { 

  if(!channel.guild) return;
  const channel2 = await db.get(`channel_${channel.guild.id}`)
  var logChannel = channel.guild.channels.cache.find(c => c.id === channel2);
  if(!logChannel) return; 

  if(channel.type === "UNKNOWN") { 
      var roomType = 'Text';
  }else
  if(channel.type === "UNKNOWN") { 
      var roomType = 'Voice';
  }else
  if(channel.type === "UNKNOWN") { 
      var roomType = 'Category';
  }

  channel.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;

      let channelDelete = new MessageEmbed()
      .setTitle('Channel Delete')
      .setThumbnail(userAvatar) 
      .setDescription(`                **\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})
      `)
      .setColor(`#9784c4`)
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL)

      logChannel.send({ embeds: [channelDelete] }); 
  })
});
client.on('channelUpdate', async (oldChannel, newChannel) => {
    let channel = await db.get(`channel_${oldChannel.guild.id}`)
  if(!oldChannel.guild) return;

  var logChannel = oldChannel.guild.channels.cache.find(c => c.id === channel);
  if(!logChannel) return;

  if(oldChannel.type === "UNKNOWN") {
      var channelType = 'Text';
  }else
  if(oldChannel.type === "UNKNOWN") {
      var channelType = 'Voice';
  }else
  if(oldChannel.type === "UNKNOWN") {
      var channelType = 'Category';
  }
 
  oldChannel.guild.fetchAuditLogs().then(logs => { 
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;

      if(oldChannel.name !== newChannel.name) {
          let newName = new MessageEmbed()
          .setTitle('CHANNEL EDIT')
          .setThumbnail(userAvatar)
          .setColor(`#9784c4`)
          .setDescription(`
            **\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
          .setTimestamp() 
          .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) 

          logChannel.send({ embeds: [newName] }); 
      }
      if(oldChannel.topic !== newChannel.topic) { 
        let newTopic = new MessageEmbed() 
          .setTitle('CHANNEL EDIT') 
          .setThumbnail(userAvatar)
          .setColor(`#9784c4`)
          .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setTimestamp()
          .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

          logChannel.send({ embeds: [newTopic] });
      }
  })
});

client.on('guildMemberRemove', async member => { 
  let channel = await db.get(`channel_${member.guild.id}`)
var logChannel = member.guild.channels.cache.find(c => c.id === channel); 
if(!logChannel) return; 

let leaveMember = new MessageEmbed()
.setTitle('New Mmember Leave Lol')
.setThumbnail('https://cdn.discordapp.com/emojis/863496676621549569.gif?size=80')
.setColor(`#9784c4`)
.setDescription(`Leave **${member.user.username}** From the server.!\n**Joined Discord: ${Days(member.user.createdAt)},(<t:${parseInt(member.user.createdAt / 1000)}:R>)**
\`\`\`User: ${member.user.tag}\nUserID: ${member.user.id}\n\`\`\` `)
.setTimestamp() 
.setFooter(member.user.tag, member.user.avatarURL({dynamic: true}))

logChannel.send({ embeds: [leaveMember] });
});  




client.on("messageCreate", message =>{
  if(message.content === prefix +"show all"){
  if(message.author.bot || !message.guild) return;
  if(!message.member.permissions.has('ADMINISTRATOR')) 
  return message.reply({ content: `**ليس لديك الصلاحية ! 🙄 **` });
  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
      message.guild.channels.cache.forEach((channel) => {
          channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: true}).then(() => {
  message.channel.send({ content: `\n 📢 | تم اظهار ${channel} \n` })
    });
  })
  }
});

client.on("messageCreate", message =>{
if(message.content === prefix +"hide all"){
if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('ADMINISTRATOR')) 
return message.reply({ content: `**ليس لديك الصلاحية ! 🙄 **` });
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.guild.channels.cache.forEach((channel) => {
        channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: false}).then(() => {
message.channel.send({ content: `\n 📢 | تم اخفاء ${channel} \n` })
  });
})
}
});  

client.on("message", msg => {
  if (
    msg.content == prefix + "iq"
  ) {
    if (msg.author.bot) return;

    var iqtext = ["0",
     "1",
      "4",
       "7",
       "12",
       "20",
       "24",
       "26",
       "31",
       "35",
       "39",
       "42",
       "49",
       "55",
       "60",
       "61",
       "64",
       "67",
       "70",
       "73",
       "76",
       "79",
       "84",
       "89",
       "91",
       "95",
       "98",
       "100"];
    var x3 = Math.floor(Math.random() * iqtext.length);
    msg.channel.send(`**${msg.author.username}, IQ Is __${iqtext[x3]}__ :brain: **`)
  }
})


client.on('messageCreate', async message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/),
cmd = args.shift().toLowerCase()
if (cmd == 'setup') {
      try {
          if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({ embeds: [new MessageEmbed().setDescription(`:x: - You don't have \`ADMINISTRATOR\` permissions`)] })
          const { createTranscript } = require("discord-html-transcripts")
          
          let row = new MessageActionRow()
          .addComponents(
              new MessageButton()
              .setCustomId('ms')
              .setEmoji('📩')
              .setLabel('Create A Ticket')
              .setStyle('SUCCESS')
          )

          let channel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name == args[0]) || message.channel;
          let adminRole = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1]) || message.guild.roles.cache.find(r => r.name == args[1]);
          if (!adminRole) {
              message.channel.send({ embeds:
                 [new MessageEmbed()
            .setTitle(`❌ | Wrong use`)
            .setDescription(`⚠ | correct use: ${PREFIX}setup <Ticket Channel> <Admins Role>`)
            .setColor(0xFF0000)  
              ]
              }).then(async function(msg) {
                  setTimeout(() => {
                      msg.delete().catch(err => { return })
                  }, 1000 * 7);
              })
              return
          }
    
          let embed = await new MessageEmbed()
          .setTitle(`Ticket System`)
          .setDescription('Click to open a ticket!')
          .setTimestamp()
          .setColor('GREY')
          .setThumbnail(message.guild.iconURL( {dynamic: true, format: 'png'})) 
          .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true, format: 'png' }))
          .setTimestamp()


          ;(await message.channel.send("Ticket System Setup Done!"))


          channel.send({ embeds: [embed], components: [row]}).then(msg => {
    
                  let col = msg.createMessageComponentCollector({componenType : "BUTTON"})
              col.on("collect", async (i) => {  
                  
        

  
                  if (i.customId === "ms") {
                      let embed_1op = new MessageEmbed()
                      .setColor("DARK_PURPLE")
                      .setDescription(`**Ticket Section : **\n \`\`\`Public Ticket\`\`\`` + `**Support Message : **\n \`\`\`,انتظر بضع ثوان حتى يصل الدعم الفني\n Wait a few seconds for technical support to arrive.\`\`\``)

                      .setThumbnail('https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Business_card-512.png')
  
                      
                      let row2 = new MessageActionRow()
                      .addComponents(
                          new MessageButton()
                          .setCustomId("msss")
                          .setStyle('DANGER')
                          .setEmoji('🔐')
                          .setLabel('Close'),
                          new MessageButton()
                          .setCustomId("mss3s")
                          .setStyle('DANGER')
                          .setEmoji('✖')
                          .setLabel('Delete'),
                          new MessageButton()
                          .setCustomId("mss32s")
                          .setStyle('SECONDARY')
                          .setLabel('Transcript'),
                          new MessageButton()
                          .setStyle('LINK')
                          .setURL('https://discord.gg/xNB4s3yyuJ')
                          .setLabel('Support')
                          )      



                          const ticketUser = i.user;
                          const e12 = i.chat_ferinha


                      message.guild.channels.create(`ticket-${i.user.username}`, {
                          type: 'GUILD_TEXT',
                          permissionOverwrites: [
                              {
                                  id: message.guild.id,
                                  deny: ['VIEW_CHANNEL']
                              },
                              {
                                  id: i.user.id,
                                  allow: ['VIEW_CHANNEL', 'ATTACH_FILES', 'SEND_MESSAGES'],
                              },
                              {
                                  id: adminRole.id,
                                  allow: ['VIEW_CHANNEL', 'ATTACH_FILES', 'SEND_MESSAGES', 'MANAGE_CHANNELS'],
                              }
                          ]
                      
                      }).then(async (chat_ferinha) => {
                          let er2er = new MessageEmbed()
                          .setDescription(`تم فتح تذكرتك ${chat_ferinha}`)
                          .setColor("DARK_PURPLE")

                          let m = await chat_ferinha.send( { content: `welcome to your ticket ! ${i.user}` , embeds: [embed_1op], components: [row2]})
                          await i.reply({embeds: [er2er], ephemeral:true})

                          let col1 = m.createMessageComponentCollector({componenType : "BUTTON"})
                          
                          col1.on('collect', async i => {
                              if (i.customId == 'mss3s') {
                                  i.channel.delete()
                              }
                          })
                          
                          col1.on('collect', async i => {
                          
                              if (i.id === ticketUser.id) return i.reply('ما تقدر تقفل تذكرتك');
                              if (i.customId == 'msss') {
                                var LogChannel = '970075376351064095'

                                  var LogChannel = await i.guild.channels.cache.find(
                                      c => c.name === `${log[i.guild.id].channel}`
                                    );
                                    if (!LogChannel) return;

                                  const logembedclose = { 
                                      author: {
                                      name: `Ticket `,
                                      icon_url: ``,
                                      color: colore,
                                      },
                                      description: `**قام <@${ticketUser.id}>\n باغلاق تكت : ( ${e12} )**`,
                                      timestamp: new Date(),
                                      color: colore,
                                      }
                                    logchannel.send({ embeds: [{ embed: logembedclose }] });

                                  i.channel.permissionOverwrites.edit(ticketUser.id, { SEND_MESSAGES: false });
                                  i.channel.edit({
                                      name: `closed-${ticketUser.username}`
                                  })
                                  i.reply({ ephemeral: true ,embeds: [new MessageEmbed().setTimestamp().setDescription(`✅ The Channel Has Been Closed 🔐`)] })



                                  
                              }


                          
                              
                              
                          })

                          col1.on('collect', async i => {
                          
                              if (i.id === ticketUser.id) return i.reply('No');
                              if (i.customId == 'mss32s') {
                                var LogChannel = '970075376351064095'

                                    if (!LogChannel) return;
                                  const attach = await createTranscript(i.channel, {
                                      limit: -1,
                                      returnBuffer: false,
                                      fileName: `html - ${chat_ferinha} - Ticket`
                                  })

                                  i.reply({ embeds: [new MessageEmbed().setTimestamp().setDescription(`✅ Done Send Transcript In Log Channel`)] })
                                  i.channel.send({files: [attach]})




                                  
                              }
                          })
                          



   
  
  
                      })
                  }
              
              });
          });
          message.react('✔')
      } catch (err) {
          console.log("Something Went Wrong => ", err);
      }


  }

  
})
  
client.on("messageCreate", badboy => {
  if(badboy.content.startsWith(prefix + "game")){
let args = badboy.content.split(" ").slice(0);
var user = badboy.mentions.users.first() || badboy.author;
    if (user.bot || !badboy.guild) return;

 if(badboy.author.bot || !badboy.guild) return badboy.reply({ content: "this command for server only" })
let win = [
 ':upside_down: :upside_down: :upside_down:  win',
 ':upside_down: :face_with_raised_eyebrow: :zany_face: lose',
 ':upside_down: :face_with_raised_eyebrow: :upside_down: lose',
 ' :yum: :yum: :yum: win',
 ' :kissing_heart:  :kissing_heart:  :kissing_heart:  win', 
 ' :frowning2: :frowning2: :kissing_heart: lose',
 
  ];
            
            let an = win[Math.floor(Math.random() * win.length)];

  var embed = new MessageEmbed()
  .setColor("#9784c4")
  .setDescription(`${an}`)
 badboy.channel.send({ embeds: [embed] })
  }

});  


/*
client.on("messageCreate" , message => {
  if(message.content == prefix + "invite") {
    let embed = new MessageEmbed()
    .setAuthor(message.author.tag , message.author.displayAvatarURL({dynamic:true}))
    .setDescription(`**Click The Button Bellow To Invite Me ⤵**`)
    .setColor("#9784c4")

    let row = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel("Click Me")
      .setStyle("LINK")
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
    )
   message.reply({embeds:[embed] , components:[row]}) 
  }
});
*/
client.on('messageCreate', async msg => {
  if (msg.author.bot) return;
      var xp = await db.fetch(`${msg.guild.id}_${msg.author.id}.xp`);
      if (xp === null) {
      db.set(`${msg.guild.id}_${msg.author.id}`, { xp:0 });
    }
    var level = await db.fetch(`${msg.guild.id}_${msg.author.id}.level`);
    if (level === null) {
    db.set(`${msg.guild.id}_${msg.author.id}`, { level:0 });
    }
    var xptotal = await db.fetch(`${msg.guild.id}_${msg.author.id}.xptotal`);
    if (xptotal === null) {
    db.set(`${msg.guild.id}_${msg.author.id}`, { xptotal:0 });
    }
  db.add(`${msg.guild.id}_${msg.author.id}.xptotal`, 1);
  db.add(`${msg.guild.id}_${msg.author.id}.xp`, 1)
  let total = db.fetch(`${msg.guild.id}_${msg.author.id}.xp`)
  if (total == 50 /*بتقدر تعدلها لاي عدد*/) {
    db.add(`${msg.guild.id}_${msg.author.id}.level`, 1)
    db.subtract(`${msg.guild.id}_${msg.author.id}.xp`, 50 )
    msg.channel.send(`${msg.author}** GG! Your level now : \`${db.fetch(`${msg.guild.id}_${msg.author.id}.level`)}\` ✨**`)
  }
});

client.on('messageCreate', async msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/),
cmd = args.shift().toLowerCase()
  if (msg.content.startsWith(prefix + "rank")) {
    let user = msg.mentions.users.first() || msg.author;
    if (user.bot) return msg.reply("**😴 Bots Don't have ranks**");
    let level = db.fetch(`${msg.guild.id}_${msg.author.id}.level`);
    let xp = db.fetch(`${msg.guild.id}_${msg.author.id}.xp`);
    let total = db.fetch(`${msg.guild.id}_${msg.author.id}.xptotal`);
    let embed = new MessageEmbed()
    .setColor("#9784c4")
    .setTitle(`${user.username}'s Rank`)
    .addField('Level :', `${level}`, true)
    .addField('xp :', `${xp}`, true)
    .addField('Total xp :', `${total}`, true)
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    msg.reply({ embeds: [embed] })
  }
});
const simplydjs = require("simply-djs");
client.on('messageCreate' , message =>{
  if(message.content.startsWith(prefix+'calculator')){
  simplydjs.calculator(message, {
    embedColor: "#9784c4",
  });
    }
  }) 



  client.on("guildBanAdd", (guild, user) => {
    const LogChannel = client.channels.cache.get('982201318116556800'); // Replace with your channel id

    if (!LogChannel ) return;
  
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();
      if (userID === client.user.id) return;

  
      let banInfo = new MessageEmbed()
        .setTitle("**[BANNED]**")
        .setThumbnail(userAvatar)
        .setColor("#9784c4")
        .setDescription(
          `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL());
  
      logChannel.send({ embeds: [banInfo] });
    });
    
client.on("messageCreate", async message =>{
    if(message.content.startsWith(prefix+"unban-all")){
        if(!message.member.permissions.has("BAN_MEMBERS"))return;
        if(!message.guild.me.permissions.has("BAN_MEMBERS"))return;
        let bans = await message.guild.bans.fetch()
        if(!bans.size)return message.channel.send({content: `This server has no bans`})
        bans.forEach(ban => message.guild.members.unban(ban.user))
        message.reply({content: `Plese wait...`}).then(m => {
            setTimeout(() => {
            m.reply({content: `> **Done successfully unban from \`${bans.size}\` members!**`})
            m.delete()
            }, 4000)
        })
    }
})

client.on("messageCreate", message  => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
if(command === "search-netflix"){
    if(!args) return message.reply('Please Enter a Search')
const Netflix = new MessageEmbed()
.setTitle('To see your search on Netflix, click here',message.author.displayAvatarURL())
.setURL(`https://www.netflix.com/search?q=${args}`)
.setFooter(message.guild.name,message.guild.iconURL())
.setColor("#9784c4") 

message.channel.send({embeds :[Netflix]})
}});
/*
let DIG = require("discord-image-generation");
const { openStdin } = require('process');
    client.on("messageCreate", async messageCreate => {
        if(messageCreate.content.startsWith("#blur")) {
          let user = messageCreate.mentions.users.first()
            if(!user) return messageCreate.reply("user")
            const avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new DIG.Blur().getImage(avatar);
            let attach = new MessageAttachment(img, "thailandcodes.png");
            await messageCreate.channel.send({files : [attach]})
        }
    });

*/

client.on('messageCreate', async message => {
  if (message.content === prefix + 'img') {
      const db = require('pro.db');
      if(db.get(`${message.guildId}`))return message.reply('**I عفوا ، هناك جولة بالفعل!**');
      
      const file = require('./kmn.json');

      const i = file[Math.floor(Math.random() * file.length)];
      const filter = s => {
          return i.jwab.some(answer => answer.toLowerCase() === s.content.toLowerCase());
      };
      let embed = new MessageEmbed()
      .setColor("#9784c4")
      .setImage(i.youtuber)
      .setDescription(`**خمن من في الصورة**`)
      .setFooter({ text:'عندك 15 ثانيه'});


      db.set(message.guild.id, message.guildId);
      message.reply({ embeds: [embed]})
      .then(() => {
          message.channel.awaitMessages({ filter, max: 1, time: 15 * 1000, errors: ['time'] })
          .then(collected => {
              db.delete(message.guild.id);
              message.channel.send(`${collected.first().author} **مبروك! الفائز هو **`);
          })
          .catch(collected => {
              db.delete(message.guildId);
              message.reply('**> انتهى الوقت ، لم يفز أحد..**');
          });
  });


  }
})


client.on('messageCreate', async message => {
  if (message.content === prefix + 'flags') {
      const db = require('pro.db');
      if(db.get(`${message.guildId}`))return message.reply('**I عفوا ، هناك جولة بالفعل!**');
      
      const file = require('./flags.json');

      const i = file[Math.floor(Math.random() * file.length)];
      const filter = s => {
          return i.jwab.some(answer => answer.toLowerCase() === s.content.toLowerCase());
      };
      let embed = new MessageEmbed()
      .setColor("#9784c4")
      .setImage(i.youtuber)
      .setDescription(`**ما هي هذه الدوله؟**`)
      .setFooter({ text:'عندك 15 ثانيه'});


      db.set(message.guild.id, message.guildId);
      message.reply({ embeds: [embed]})
      .then(() => {
          message.channel.awaitMessages({ filter, max: 1, time: 15 * 1000, errors: ['time'] })
          .then(collected => {
              db.delete(message.guild.id);
              message.channel.send(`${collected.first().author} **مبروك! الفائز هو **`);
          })
          .catch(collected => {
              db.delete(message.guildId);
              message.reply('**> انتهى الوقت ، لم يفز أحد..**');
          });
  });


  }
})

client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "login".toLowerCase())) {
  
    if(!message.member.permissions.has("MUTE_MEMBERS"))return;
    if(!message.guild.me.permissions.has("MUTE_MEMBERS"))return;
    message.react("<a:928380639646994443:967488334484111390> ");
 let login = new MessageEmbed()
 .setAuthor(message.guild.name, message.guild.iconURL())
      .setTimestamp()
      .setColor("#9784c4")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTitle(`Login`)
      .setDescription(`You have login in successfully!`)
        .addField(`Your Server Name:`, `${message.guild.name}`)
        
       
    message.channel.send({ embeds: [login] });
  }
});


client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "logout".toLowerCase())) {
    
    if(!message.member.permissions.has("MUTE_MEMBERS"))return;
    if(!message.guild.me.permissions.has("MUTE_MEMBERS"))return;
    message.react("<a:928380639646994443:967488334484111390> ");
    
 let logout = new MessageEmbed()
      .setTimestamp()
      .setColor("#9784c4")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTitle(`You've logged out successfully!`)
        .setDescription(`Bye 👋`)
       
    message.channel.send({ embeds: [logout] });
  }
}); 

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + 'addemoji')) {
  let args = message.content.split(' ')
  
  if (!message.member.permissions.has("ADMINISTRATOR")) {
    return message.reply("** 😕 You don't have permissions **"); 
  }
  if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
    return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
  }
  
  const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi);
  if (!emojis)
    return message.reply("** ❌ please enter emoji **")
  let emojisArra = []
  emojis.forEach((emote) => {
    let emoji = Util.parseEmoji(emote);
    if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
        emoji.animated ? "gif" : "png" 
      }`;
      message.guild.emojis.create(`${Link}`, `${emoji.name}`).then((em) => {
          emojisArra.push(em.toString())
            if (emojis.length == emojisArra.length) {
        message.reply(`${emojisArra.map(e => e).join(',')} **Done add emoji**`)
        emojisArra = []
    }
      })
        .catch((error) => {
         message.reply("Error : " + error.message);
          console.log(error);
      });
    }
  })
  }
  })  
  
 var { inviteTracker } = require("discord-inviter"),
  tracker = new inviteTracker(client);
  
  tracker.on('guildMemberAdd', async (member, inviter, invite) => {
    let oqdl  = member.guild.channels.cache.find(ch => ch.id == '982203269386485800')//ايدي الروم
    let Embed = new MessageEmbed()
    .setAuthor(member.user.tag,member.user.avatarURL())
    .setDescription(` **انضم <@${member.id}> الى السيرفر.**`)
    .addFields(
      { name: `**عمر الحساب:**`, value: `**<t:${Math.floor(member.user.createdAt / 1000)}:R>**`, inline: true},
      { name: `**الداعي**`, value: `<@${inviter.id}>` },
      { name: `**كود الدعوة**`, value: `${invite.code}`}
    )
    .setThumbnail(member.user.avatarURL())
    .setColor("#9784c4")
    .setTimestamp()
    if(oqdl) await oqdl.send({embeds: [Embed]})
  })

const chanenl = '982184707640950785'
client.on('messageCreate', D7M => {
if (D7M.author.bot) return;
if(D7M.channel.id != chanenl) return; 
D7M.channel.send({content : "https://cdn.discordapp.com/attachments/790515111752237067/980111928930230352/unknown.png"})
})


const data = require("st.db")

const { DiscordModal,ModalBuilder,ModalField } = require ('discord-modal');
DiscordModal(client)


client.on("messageCreate" , message => {
    if(message.content.startsWith(prefix + "channel")) {
        let channel1 = message.mentions.channels.first()
        if(!channel1) return message.reply(":x: **Mention a channel**")
        db.set(`channel1_${message.guild.id}` , channel1.id)
        message.reply("**Done added this channel to the DB ✅**")
    }
});


client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "set-role")) {
    let r = message.content.split(" ").slice(1).join(" ")
    let role = message.guild.roles.cache.find(r=> r.id == r)
    if(!r) {
      if(!role) {
        message.reply(":x: **Specify a role id**")
      }
    }
    db.set(`role_${message.guild.id}` , r)
    message.reply("**Done added this role to the DB ✅**")
  }
});

client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix + "set-highrole")) {
    let r = message.content.split(" ").slice(1).join(" ")
    let role = message.guild.roles.cache.find(r=> r.id == r)
    if(!r) {
      if(!role) {
        message.reply(":x: **Specify a role id**")
      }
    }
    db.set(`rolehigh_${message.guild.id}` , r)
    message.reply("**Done added this role to the DB ✅**")
  }
});

client.on("messageCreate" , message => {
  if(message.content == prefix + "setup") {
    if(!db.has(`channel1_${message.guild.id}`)) {
      if(!db.has(`role_${message.guild.id}`)) {
        if(!db.has(`rolehigh_${message.guild.id}`)) {
        return  message.reply(`**Specify first !**\n**\`set-channel\`,\`set-role\`,\`set-highrole\`**`)
        }
      }
    }
    let row = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId("apply")
    .setLabel("Submit")
    .setStyle("PRIMARY")
    )
    let embed = new MessageEmbed()
    .setAuthor({name:message.guild.name , iconUrl :message.guild.iconURL()})
    .setTitle("**Application : <:880802572695384125:984423822839140422>**")
    .setDescription("** Click The Button To Show The Application Form To You**") .setImage("https://cdn.discordapp.com/attachments/866771627127734334/981501092191932517/unknown.png")
    .setColor("BLURPLE")
    message.delete()
    message.channel.send({components:[row] , embeds:[embed]})
  }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === 'apply') {
     let role = db.get(`role_${interaction.guild.id}`)
     let user = db.get(`user_${interaction.member.id}`)  
     if(user) return interaction.reply({content : "You are already in the apply list !" , ephemeral:true})
     if(interaction.member.roles.cache.some(r=>r.id == role)) return interaction.reply({content : "You are already a staff !" , ephemeral:true}) 
    
		const modal = new ModalBuilder()
			.setCustomId('modal')
			.setTitle('Application')
            .addComponents(
	        new ModalField()
			.setCustomId('name')
			.setLabel("ما اسمك ؟")
            .setRequired(true)
            .setPlaceholder("ادخل اسمك هنا ...")
			.setStyle('SHORT'),
    
	        new ModalField()
			.setCustomId('age')
			.setLabel("كم عمرك ؟")
            .setRequired(true)
            .setPlaceholder("ادخل عمرك هنا ...")
			.setStyle('SHORT'),
    
            new ModalField()
			.setCustomId('dis')
            .setRequired(true)
            .setPlaceholder("ادخل خبراتك هنا ...")
			.setLabel("ماهي خبراتك")
			.setStyle('SHORT'),

            new ModalField()
			.setCustomId('job')
            .setRequired(true)
            .setPlaceholder("ادخل عملك هنا ...")
			.setLabel("كيف بتفيدنا بالسيرفر")
			.setStyle('PARAGRAPH')
            )
		await client.modal.open(interaction , modal);
	}
});

client.on('modalSubmitInteraction', async interaction => {
    if(interaction.customId == "modal") {
     let ch = db.get(`channel1_${interaction.guild.id}`)
     let channel = interaction.guild.channels.cache.find(c => c.id == ch)
     const name = interaction.fields.getTextInputValue("name")
     const age = interaction.fields.getTextInputValue("age")
     const dis = interaction.fields.getTextInputValue("dis")
     const job = interaction.fields.getTextInputValue("job")
     let row = new MessageActionRow().addComponents(
       new MessageButton()
       .setLabel("قبول ✅")
       .setCustomId("acc")
       .setStyle("SUCCESS"),
       new MessageButton()
       .setLabel("رفض ❌")
       .setCustomId("dec")
       .setStyle("DANGER")
     )
     interaction.reply({content:"Done sending your application form !" , ephemeral:true})
     db.set(`user_${interaction.member.id}` , interaction.member.id)
     channel.send({content:`**تقديم جديد من : <@${interaction.member.id}>**\n**- الاسم : ${name}**\n**- العمر : ${age}**\n**- الخبرات : ${dis}**\n**- عمله : ${job}**` , components:[row]}).then(m=> {
     db.set(`userm_${interaction.member.id}` , m.id)
     })
   }
});

client.on("interactionCreate" , interaction => {
  if(interaction.isButton()) {
    if(interaction.customId == "acc") {
      let high = db.get(`rolehigh_${interaction.guild.id}`)
      let role1 = db.get(`role_${interaction.guild.id}`)
      if(!interaction.member.roles.cache.some(r=>r.id == high)) return interaction.reply({content:"You Are Not A High Staff !" , ephemeral:true})
      let filter = m => m.author.id == interaction.member.id
      const collector = interaction.channel.createMessageCollector({ filter , max : 1 , time: 15000 });
      interaction.reply("**ارسل ايدي الشخص ...**")
      collector.on("collect" , m => {
        let member = interaction.guild.members.cache.find(r=>r.id == m.content)
        let m1 = db.get(`userm_${m.content}`)
        let m2 = interaction.channel.messages.cache.find(m=> m.id == m1)
        let user = db.get(`user_${m.content}`)
        if(!user) {
          if(!m1) {
            m.delete()
            interaction.editReply({content:`**هذا الشخص لم يقدم من قبل ❌ ${interaction.member}**`}).then(s=> {
              setTimeout(() => {
                s.delete()
              } , 5000);
            })
         }}
        if(user) {
          if(m1) {
              let role = interaction.guild.roles.cache.find(r=>r.id == role1)
              m2.edit({content:`**تقديم مقبول من : ${member} ✅**` , components:[]})
              interaction.deleteReply()
              member.roles.add([role]).catch(err=>{})
              member.send(`**لقد تم قبول تقديمك ! 🥳**`)
              db.delete(`user_${m.content}`)
              db.delete(`userm_${m.content}`)
              m.delete()
        }}
      });
    }    
    if(interaction.customId == "dec") {
      let high = db.get(`rolehigh_${interaction.guild.id}`)
      if(!interaction.member.roles.cache.some(r=>r.id == high)) return interaction.reply({content:"You Are Not A High Staff !" , ephemeral:true})
      let filter = m => m.author.id == interaction.member.id
      const collector = interaction.channel.createMessageCollector({ filter , max : 1 , time: 15000 });
      interaction.reply("**ارسل ايدي الشخص ...**")
      collector.on("collect" , m => {
        let member = interaction.guild.members.cache.find(r=>r.id == m.content)
        let m1 = db.get(`userm_${m.content}`)
        let m2 = interaction.channel.messages.cache.find(m=> m.id == m1)
        let user = db.get(`user_${m.content}`)
        if(!user) {
          if(!m1) {
            m.delete()
            interaction.editReply({content:`**هذا الشخص لم يقدم من قبل ❌ ${interaction.member}**`}).then(s=> {
              setTimeout(() => {
                s.delete()
              } , 5000);
            })
         }}
        if(user) {
          if(m1) {
            m2.edit({content:`**تقديم مرفوض من : ${member} ❌**` , components:[]})
            interaction.deleteReply()
            member.send(`**لقد تم رفض تقديمك ! 😥**`)
            db.delete(`user_${m.content}`)
            db.delete(`userm_${m.content}`)
            m.delete()
        }}
      });
    }
  }
});


client.on("messageCreate",async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith(prefix+"قبول")) {// امر القبول
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.cache.find(ch => ch.id === '988506229003415632')// اي دي روم القبول
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`ماعندك ادمن ستريتر`);
  if(!mention) return message.reply({ content: "الرجاء الإشارة" });
 
  acRoom.send({ content: `> أهلا بك تم قبولك ك إداري في السيرفر \n ${mention} إداري مبتدئ - :partying_face: ` })
  }
});

client.on("messageCreate",async message => {
let mention = message.mentions.members.first();
if(message.content.startsWith(prefix+"رفض")) {// امر الرفض
if(!message.channel.guild) return;
let acRoom = message.guild.channels.cache.find(ch => ch.id === '988506229003415632')// اي دي روم الرفض
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`ماعندك ادمن ستريتر`);
if(!mention) return message.reply({ content: "الرجاء الإشارة" });

acRoom.send({ content: `> نعتذر منك لايمكننا قبولك في الوقت الحالي \n ${mention} - ` })
}
});


const { randomHex } = require('coloro')

client.on(`messageCreate`, message => {
if(message.content.startsWith(prefix +'random-hex')) {
  let color = randomHex();
  let embed = new MessageEmbed()
  .setColor(color)
  .setDescription(`This your random hex color: \`${color}\``)
 
  message.reply({
      embeds: [embed]
  })
}
})


client.on("messageCreate",async message => {
if (message.content.startsWith(prefix + "timeout")) {
  if (message.member.permissions.has("ADMINISTRATOR")) {
    let args = message.content.split(" ")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
    if (!member) return message.reply({ content: `**Mention the user or him ID to shut him up !**`, allowedMentions: { repliedUser: false } })
    if (member.user.bot) return message.reply({ content: `**You can't mute a bot 🙄**!`, allowedMentions: { repliedUser: false } })
    if (member.user == message.author) return message.reply({ content: `**You can mute yourself**`, allowedMentions: { repliedUser: false } })
    const notime = new MessageEmbed()
    .setAuthor(`${message.author.tag}` , message.author.avatarURL({dynamic : true}))
    .setTitle(`Command: timeout`)
    .setColor("#9784c4")
    .setDescription(`Timeout a member.

    **Usage:**
    ${prefix}timeout [user] (time m/h/d/mo/y)

    **Examples:**
    ${prefix}timeout <@${member.user.id}> 60s
    ${prefix}timeout <@${member.user.id}> 5m
    ${prefix}timeout <@${member.user.id}> 10m
    ${prefix}timeout <@${member.user.id}> 1h
    ${prefix}timeout <@${member.user.id}> 1d
    ${prefix}timeout <@${member.user.id}> 1w
    `)
    if (!args[2]) return message.reply({ embeds : [notime], allowedMentions: { repliedUser: false } })
    if (!args[2].endsWith("s")) {
      if (!args[2].endsWith("m")) {
        if (!args[2].endsWith("h")) {
          if (!args[2].endsWith("d")) {
            if (!args[2].endsWith("w")) {

              return message.reply({ content: `**Please Provide me a valid timer \`s / m / h / d / w\` ❌**`, allowedMentions: { repliedUser: false } })
            }
          }
        }
      }
    }
    if (isNaN(args[2][0])) return message.reply({ content: `**That is not a number ❌ !**`, allowedMentions: { repliedUser: false } })
    let embed = new MessageEmbed()
      .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`> **You are timeout in** \`${message.guild.name}\` **for a ${args[2]}**\n> **timeout By : **${message.author}`)
      .setThumbnail(message.guild.iconURL())
      .setColor("#9784c4")
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    await member.timeout(ms(args[2]))
    await message.reply(`**${message.author.tag}** Timeouted **${member.user.username}** for **${args[2]}**`)
    await member.user.send({ embeds: [embed], allowedMentions: { repliedUser: false } })
  }

}
}
);

client.on("messageCreate",async message => {
if (message.content.toLowerCase().startsWith(prefix + 'untimeout')) {
if (!message.member.permissions.has("ADMINISTRATOR")) return;
let args = message.content.split(" ")
let member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
if (!member) return message.reply("**Mention the user or him ID !**")
if (member.user.bot) return message.reply("**You can't mute a bot 🙄**");
if (member.user == message.author) return message.reply("**You can't mute yourself 🙄**")
if (!message.member.permissions.has("MUTE_MEMBERS")) return message.reply({ content: `**You do not have permissions to use this command**`, allowedMentions: { repliedUser: false } })
if (!member.isCommunicationDisabled()) {
return message.reply({ content: `**❌ This user is not in timeout.**`, allowedMentions: { repliedUser: false } })
.catch((e) => { });
}
await member.disableCommunicationUntil(null, `By: ${member.tag}`);
message.reply({ content: `Timeout has been removed from ${member}`, allowedMentions: { repliedUser: false } })


}
}
);

client.on("messageCreate",async message => {
    if (message.content.startsWith(prefix + 'daily')) {
  let user = message.member;
  let timeout = 86400000;
  var amount = Math.floor(Math.random() * 5000)
  let daily = await db.fetch(`daily_${user.user.id}`);
  if (daily !== null && timeout - (Date.now() - daily) > 0) {
  let time = ms(timeout - (Date.now() - daily));
  
  let timeEmbed = new MessageEmbed()
  .setColor("#9784c4")
  .setDescription(`You can collect your daily again in ${time}.`);
  message.reply({ embeds: [timeEmbed], allowedMentions: { repliedUser: false } })
  } else {
  let moneyEmbed = new MessageEmbed()
  .setColor("#9784c4")
  .setDescription(`You've collected your ${amount} from daily.`);
  message.reply({ embeds: [moneyEmbed], allowedMentions: { repliedUser: false } })
  db.add(`money_${user.user.id}`, amount)
  db.set(`daily_${user.user.id}`, Date.now())
}}
}
);
client.on("messageCreate",async message => {
if (message.content.startsWith(prefix + 'balance')) {
  let args = message.content.split(" ")
  let user =
  message.mentions.members.first() ||
  message.guild.members.cache.get(args[1]) ||
  message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.member;
  if (user.user.bot) return message.channel.send({ content: `You can't use this command with bot.` , allowedMentions: { repliedUser: false } });
  let bal = db.fetch(`money_${user.id}`);
  
  if (bal === null) bal = 0;
  
  let bank = await db.fetch(`bank_${user.id}`);
  
  if (bank === null) bank = 0;
  
  if (user) {
  
  let embed = new MessageEmbed()
  .setColor("#9784c4")
  .setDescription(
  `${user.user.username}'s Balance\n\nPocket: \`${bal}\``
  )
  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
  } else {
  return message.channel.send({ content: "Invalid user." , allowedMentions: { repliedUser: false } })
  
}}
}
);

client.on("messageCreate",async message => {
if (message.content.startsWith(prefix + 'top')) {
  let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);
  if (!money.length) {
  let noEmbed = new MessageEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL())
  .setColor("#9784c4")
  .setFooter("What do you think to get your daily?")
  return message.reply({ embeds: [noEmbed], allowedMentions: { repliedUser: false } })
  };
  
  money.length = 10;
  var finalLb = "";
  for (var i in money) {
  if (money[i].data === null) money[i].data = 0
  let finalLbName = await client.users.fetch(money[i].ID.split('_')[1]) + "\n"
  let finalLbNameSplitted = finalLbName.split("\n")
  
  finalLb += `**${money.indexOf(money[i]) + 1}. ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]) : finalLbNameSplitted[i].username}** - ${money[i].data} :dollar:\n`;
  };
  
  const embed = new MessageEmbed()
  .setTitle(`Leaderboard Of ${message.guild.name}`)
  .setColor("#9784c4")
  .setDescription(finalLb)
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setTimestamp()
  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
  
  
}}

);
client.on("messageCreate",async message => {
if (message.content.toLowerCase().startsWith(prefix + 'pbank') && !message.content.toLowerCase().endsWith("ban")) {
  let args = message.content.split(" ")
let user =
message.mentions.members.first() ||
message.guild.members.cache.get(args[1]) ||
message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.member;
if (user.user.bot) return message.reply({ content: `You can't use this command with bot.` , allowedMentions: { repliedUser: false } });

let money = db.fetch(`money_${user.id}`)
if (money === null) money = 0;

let bank = db.fetch(`bank_${user.id}`)
if (bank === null) bank = 0;

let bio = db.fetch(`info_${user.id}`);
if (bank === null) bio = `${SerPrefix}setbio`
/* // will added in V3
let bronze = db.fetch(`bronze_${user.id}`);
if (bronze === null) bronze = 0;

let silver = db.fetch(`silver_${user.id}`);
if (silver === null) silver = 0;

let diamond = db.fetch(`diamond_${user.id}`)
if (diamond === null) diamond = 0;

let cars = db.fetch(`car_${user.id}`);
if (cars === null) cars = 0;

let house = db.fetch(`house_${user.id}`);
if (house === null) cars = 0;

let ring = db.fetch(`ring_${user.id}`);
if (ring === null) ring = 0;
*/
const embed = new MessageEmbed()
.setColor(`#9784c4`)
.setDescription(`> User: ${user} | ${user.user.tag} | ${user.id}\n> Money: ${money}\n`)

message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

}}

);
client.on('guildMemberRemove', async Member => {
  let ChannelLog = await Member.guild.channels.cache.find(Channel => Channel.id === '982189183080730634')
  if(!ChannelLog) return;

  let Embed = new EmbedBuilder()
     .setAuthor({ name: Member.user.tag, iconURL: Member.user.displayAvatarURL({ dynamic: true }) })
     .setThumbnail(Member.user.displayAvatarURL({ dynamic: true }))
     .setColor(`WHITE`) 
     .setDescription(`${Member} has been Leaved Server!`)
     .addFields({ name: 'Member ID', value: Member.id, inline: true }, { name: 'Member URL', value: `[Add Member](https://www.discord.com/users/${Member.id}) ● [Message Member](https://discord.com/channels/@me/${Member.id})`, inline: true })
  ChannelLog.send({ embeds: [Embed] })
})


const { QuickDB } = require('quick.db')
client.on(`messageCreate`, async msg => {
if(msg.content === prefix + "antibots on"){
  if(!msg.member.permissions.has(`ADMINISTRATOR`))return msg.reply({content: `:x: this command requires \`administrator\` permission`})
  if(!msg.guild.me.permissions.has(`KICK_MEMBERS`))return msg.reply({content: `:x: this command requires me to have \`kickmembers\` permission `})
  db.set(`antibots_${msg.guild.id}`, "TRUE")
  await msg.reply({content: `:white_check_mark: Antibots Protection is now **Enabled**`})
}else if(msg.content === prefix + "antibots off"){
   if(!msg.member.permissions.has(`ADMINISTRATOR`))return msg.reply({content: `:x: this command requires \`administrator\` permission`})
  if(!msg.guild.me.permissions.has(`KICK_MEMBERS`))return msg.reply({content: `:x: this command requires me to have \`kickmembers\` permission `})
  db.set(`antibots_${msg.guild.id}`, "FALSE")
  await msg.reply({content: `:white_check_mark: Antibots Protection is now **Disabled**`})
}else if(msg.content === prefix + "antibots"){
    if(!msg.member.permissions.has(`ADMINISTRATOR`))return msg.reply({content: `:x: this command requires \`administrator\` permission`})
  if(!msg.guild.me.permissions.has(`KICK_MEMBERS`))return msg.reply({content: `:x: this command requires me to have \`kickmembers\` permission `})
  msg.reply({content: `:x: **Invaild Syntax** \n ${prefix}antibots [on,off]`})
}
  
})
client.on('guildMemberAdd', async member => {
const antibots = await db.get(`antibots_${member.guild.id}`)
if(antibots === "TRUE"){
  if(member.user.bot)return member.kick()
}else return;
})

const generator = require('generate-password-browser');

client.on('messageCreate',async (messsage) => {
    if(!messsage.guild || messsage.author.bot) return;
    let passwords = generator.generateMultiple(3, {
        length: 10,
        uppercase: false
    });
    if(messsage.content === prefix + 'send') {
        let embed = new MessageEmbed()
        .setColor(`WHITE`)
        embed.setDescription(`${passwords}`)
        await messsage.author.send({embeds : [embed]}).then(async () => {
            await messsage.channel.send({content : 'done'});
        }).catch(async () => {
            await messsage.channel.send({content : 'Open DM'});
        })
    }
})



client.on('messageCreate', async message => {

  if (message.content ===  'menu') {  
      
      let Embed = new MessageEmbed()
      .setColor('WHITE')
      .setTitle(`Role`)
      .setDescription(`**Role Entr/Exit**`)

      let row = new MessageActionRow()
      .addComponents(
          new MessageSelectMenu()
              .setCustomId('b9')
              .setPlaceholder('Menu open')
              .addOptions(
                  {
                      label: 'دخول',
                      description: '❕ تسجيل دخول',
                      value: 'first_option',
                  },
                  {
                      label: 'خروج',
                      description: '❕  تسجيل خروج',
                      value: 'second_option',
                  },
              ),
      );

       message.channel.send({ embeds: [Embed], components: [row] });
  }
})

client.on('interactionCreate', async interaction => {
  if (interaction.values  == 'second_option') {
      let role = interaction.guild.roles.cache.find(r => r.id === '837479824686972958')// ايدي الرتبة 
      if (!role) return;
      interaction.member.roles.remove(role)
      interaction.reply({ content: 'لقد تم سحب رول', ephemeral: true })
  }
  if (interaction.values  == 'first_option') {
      let role = interaction.guild.roles.cache.find(r => r.id === '988793962431123517')// ايدي الرتبة 
      if (!role) return;
      interaction.member.roles.add(role)
      interaction.reply({ content: 'لقد تم اعطائك رول', ephemeral: true })
  }
});
  client.login(TOKEN);