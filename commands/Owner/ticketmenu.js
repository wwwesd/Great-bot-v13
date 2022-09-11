const { MessageEmbed } = require('discord.js');
const { MessageActionRow } = require('discord.js');
const { MessageSelectMenu } = require('discord.js');
const { COOLDOWN } = require('../../JSON/config.json')

module.exports = {
    name: 'ticket_menu',
    cooldown: COOLDOWN,
    author: '',
    cooldown: 8000,
    execute(client, message, args) {

        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply((`:x: - You don't have \`ADMINISTRATOR\` permissions`))

        let row = new MessageActionRow()
        .addComponents(
          
        new MessageSelectMenu()
        .setCustomId("m")
        .setMaxValues(1)
        .addOptions([
        {
        label : "فتح تذكرة الدعم الفني ",
        description : "تذكرة للمساعدة",
        value : "rp",
        emoji: "🛠"
        },
        {
        
            label : "فتح تذكرة للشكاوي او الاستفسار ",
            description : "تذكرة للمساعدة",
            value : "np",
            emoji : "⁉"
              }
              
            
            ])
      
           

            )

       

        let embed = new MessageEmbed()
        .setColor('WHITE')
        .setDescription(`
        > **Open a ticket by choosing the list**

        > **في حال لم يستجيب البوت قم بالتواصل مع الدعم **

        > ** يمنع فتح تذكرة للتجربة**
        `)
        .setThumbnail(message.guild.iconURL( {dynamic: true, format: 'png'})) 
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true, format: 'png' }))
        .setTimestamp()

        message.channel.send({ embeds: [embed], components: [row]}).then(msg => {
  
            let col = msg.createMessageComponentCollector({componenType : "SELECT-MENU"})
            col.on("collect", async (i) => {  
                let ticket = i.values[0]
                
      
                let er2er = new MessageEmbed()
                .setDescription(`تم فتح تذكره ${i.user}`)
                .setColor('WHITE')

                if (ticket === "rp") {
                    i.reply({ embeds: [er2er], ephemeral:true})
                    let embed_1op = new MessageEmbed()
                    .setColor('WHITE')
                    .setDescription( ` ** اهلاً وسهلاً بك الرجاء الانتظار وسيتم الرد عليك بأقرب وقت ممكن**  
                    <@&826042241311178752> 
                     ${i.user}`)



                    message.guild.channels.create(`${i.user}`, {
                        type: 'GUILD_TEXT',
                        permissionOverwrites: [
                            {
                                id: message.guild.id,
                                deny: ['VIEW_CHANNEL']
                            },
                            {
                                id: i.user.id,
                                allow: ['VIEW_CHANNEL', 'ATTACH_FILES']
                            }
                        ]
                    }).then(async (chat_ferinha) => {
                        chat_ferinha.send({ embeds: [embed_1op]}).then(msg => msg.pin());        

 


                    })
                }

                let erer = new MessageEmbed()
                .setDescription(`تم فتح تذكره ${i.user}`)
                .setColor('DARK_PURPLE')
                if (ticket === "np") {

                    i.reply({ embeds: [erer], ephemeral:true})
                    let embed_np = new MessageEmbed()
                    .setColor('WHITE')
                    .setDescription(` ** اهلاً وسهلاً بك    في حالة وجود استفسار يرجى ذكره أو وجود طلب يرجى .ذكره للرد عليك في أسرع وقت ممكن                    ** 
                    <@&826042241311178752>   
                    ${i.user}`)



                    message.guild.channels.create(`${i.user}`, {
                        type: 'GUILD_TEXT',
                        permissionOverwrites: [
                            {
                                id: message.guild.id,
                                deny: ['VIEW_CHANNEL']
                            },
                            {
                                id: i.user.id,
                                allow: ['VIEW_CHANNEL', 'ATTACH_FILES']
                            }
                        ]
                    }).then(async (chat_ferinha) => {
                        chat_ferinha.send({ embeds: [embed_np]}).then(msg => msg.pin());        

                       

                    })
                }
            
            });
        });
    }
}