const { Discord, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js")
const { MessageEmbed } = require("discord.js")
// const { embedFooter } = require("../../JSON/replys.json")
// const { discordCrown, Staff, infoLogo, settingsIcon, MembersLogo } = require("../../JSON/emojis.json")
// const ConfigSchema = require("../../models/ConfigSchema")


module.exports = {
    name: "help",
    cooldown: 80000,
    async execute (client, message, args) {
        let guildProfile = await ({ guildID: message.guild.id })
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId("select")
                    .setPlaceholder("click me to view commands")
                    .addOptions([
                        {
                            label: "General",
                            emoji: "🌐",
                            description: "to Viuo General Commands",
                            value: "Owner"
                        },
                        {
                            label: "Moderation",
                            emoji: "<:880802572695384125:984423822839140422> ",
                            description: "to Viuo Moderation Commands",
                            value: "Moderation"
                        },
                        {
                            label: "Play",
                            emoji: "🎈",
                            description: "to Viuo Play Commands",
                            value: "Info"
                        },
                        {
                            label: "Ticket",
                            emoji: "📩",
                            description: "to Viuo Ticket Commands",
                            value: "Utility"
                        },
                      
                        {
                            label: "Security",
                            emoji: "📩",
                            description: "to Viuo Security Commands",
                            value: "Setup"
                        },
                    ])
            )

        let embed = new MessageEmbed()
            .setTitle("Help Panel")
            .setAuthor({ name: `${message.guild.name}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setColor("GREY")
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setDescription(`**Hey ${message.author.username} , iam <@982199803272388659>

            > A Discord Bot With Many Awesome Features
            
            > Help Related To Brown  Bot Commands:
            
            > 🌐 : General Commands
            > <:880802572695384125:984423822839140422> : Moderation Commands
            > 🎈 : Play Commands
            > 📩 : Ticket Commands
            

            > ✨ Select A Category From The Menu 
                        **`)
           
            .setFooter({ text: "Great." })
            .setImage("https://cdn.discordapp.com/attachments/991754431316115568/1007265964603224104/unknown-1.png")

            


        const btn1 = new MessageButton()
            .setLabel("Great Server")
            .setStyle("LINK")
            .setURL("https://discord.gg/AqQJKse6qp")

        const buttons = new MessageActionRow()
            .addComponents(btn1)

        let sendmsg = await message.channel.send({
            content: "ㅤ",
            ephemeral: true,
            embeds: [embed],
            components: [row, buttons]
        })

        let Owner = new MessageEmbed()
            .setTitle(`🌐 : General`)
            .setDescription(`> \`#user\`: **يظهر معلومات حسابك**
            > \`#avatar\`:**يظهر لك صورتك**
            > \`#report\`:**للبلاغ عن شخص**
            > \`#server\`:**لاظهار معلومات السيرفر**
            > \`#botinfo\`:**لاظهار معلومات البوت**
            > \`#new\`:**يسوي لك thread**
            > \`#afk\`:**لايوجد شي لشرحه**
            > \`#ping\`:**لمعرفه سرعة استجابت البوت**
            > \`#color\`:**لتغيير لونك**
            > \`#banner\`:**يظهر لك بنر الشخص**
            > \`#profile\`:**يظهر لك بروفايلك**
            > \`#tax\`:** لايوجد شي لشرحه **
            > \`#𝖲tatus\`:**لمعرفه البوت شغال ام لا**
            > \`#id\`:**لمعرفه الايدي **
            > \`#boost\`:**يظهر لك كم عدد البوستات **
            > \`#memes\`:**لاظهار ميمز**
            > \`#servers\`:**لمعرفه البوت كم داخل سيرفر**
            > \`#Request\`:**لطلب شي معين من الاداره**
            > \`#invites\`:**يظهر لك عدد الدعوات**
            > \`#top-invites\`: **يظهر لك اكثر شخص سوا دعوات  **
            > \`#allbots\`:**يظهر لك جميع البوتات**
            > \`#uptime\`:**لمعرفه البوت كم له شغال**
            > \`#blur\`:**تخلي الصوره موشوشه**
            > \`#search-netflix\`:**Netflix للبحث في **
            > \`#emojiinfo\`:**  يظهر لك معلومات الايموجي  **
            > \`#Come\`:**يرسل في خاص اللي تمنشنه come **
            > \`#send\`: **يرسل لك باسورد عشوائي في الخاص**
            > \`#rank\`:**لمعرفة اللفل**
            > \`#random-hex\`: **لون عشوائي**
            > \`#balance\`:**لمعرفة كم لديك في البنك **
            > \`#daily\`: **لاخذ راتبك اليومي**
            > \`#pbank\`: **يظهر لك معلوماتك في البنك**
            > \`#send\`: **يرسل لك كلمة سر في الخاص**




  `)
            .setColor("GREY")
            .setAuthor({ name: `${message.guild.name}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setColor("GREY")
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        let Moderation = new MessageEmbed()
            .setTitle(`<:880802572695384125:984423822839140422> : Moderation`)
            .setDescription(` > \`#ban\`: **لتبنيد شخص**
            > \`#unban\` : **لفك الباند عن شخص**
            > \`#unban-all\` : **لفك الباند عن الجميع**
            > \`#kick\`: **لطرد شخص **
            > \`#mute\`: **لاسكات شخص**
            > \`#unmute\`: **لفك الاسكات**
            > \`#prison\`: **لسجن شخص**
            > \`#unprison\`: **لفك السجن**
            > \`#timeout\`: **لاعطاء شخص تايم اوت **
            > \`#untimeout\`: **لفك التايم اوت**
            > \`#lock\`: **لقفل الروم**
            > \`#unlock\`: **لفك قفل الروم**
            > \`#show\`: **لاظهار الروم للجميع**
            > \`#hide\` : **لاخفاء الروم **
            > \`#say\`: **يكرر كلامك**
            > \`#sayy\`: ** يكرر كلامك بي امبيد**
            > \`#warn\`: **لاعطاء شخص تحذير**
            > \`#allwarns\`: **لمعرفه كم اخذ تحذير**
            > \`#removewarn\`: **لازاله تحذير**
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
            > \`#addemoji\`: **لاضافه ايموجي معين**
            > \`#roleinfo\`:**يظهر لك معلومات الرتبه **
            > \`#voicekick\`: **لطرد جميع الاشخاص اللي في الروم**
            > \`#voicedeafen\`: **لاعطاء ديفن لجميع الموجودين في الروم**
            > \`#voicemute\`: **لاعطاء ميوت لجميع الموجودين في الروم**
            > \`#voiceundeaf\`: **لفك الديفن لجميع الموجودين في الروم**
            > \`#voiceunmute\`: **لفك الميوت لجميع الموجودين في الروم**
            > \`#antibots on\`: **لتشغيل الحماية من البوتات**
            > \`#antibots off\`: **لايقاف حمايه البوتات**


            
            `)
            .setColor("GREY")
            .setAuthor({ name: `${message.guild.name}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setColor("GREY")
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        let Info = new MessageEmbed()
            .setTitle(`🎈 : Play`)
            .setDescription(`> \`#akinator\`: **لعبه المارد الازرق**
            > \`#kt\`: **كت تويت على السريع**
            > \`#xo\`: ** xo لعبه **
            > \`#slap\`: ** تعطي واحد كف  **
            > \`#hug\`: ** لحضن شخص **
            > \`#iq\`: **iq لمعرفه ال **
            > \`#emoji\`: **لعبه الاسرع في كتابت الايموجي**
            > \`#snake\`: **لعبه الاكل **
            > \`#game\`: **لعبه الحظ **
            > \`#dice\`:**لعبه النرد **
            > \`#flags\`:**لعبه الاعلام **
            > \`#img\`:**لعبه خمن المشهور **
            > \`#calculator\`:**الة حاسبة**


  `)
            .setColor("GREY")
            .setAuthor({ name: `${message.guild.name}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setColor("GREY")
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        let Utility = new MessageEmbed()
            .setTitle(`📩 : Ticket`)
            .setDescription(`
            > \`/Add\`: **لاضافه شخص معين للتكت**
            > \`/remove\`: **لازاله شخص معين من التكت **
            > \`/close\`: **لقفل التكت**
            > \`/delete\`: **لحذف التكت**
            > \`/rename\`: **لتغيير اسم التكت**
`)
            .setColor("GREY")
            .setAuthor({ name: `${message.guild.name}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setColor("GREY")
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

     

        const collector = message.channel.createMessageComponentCollector({
            componentType: "SELECT_MENU"
        })

        collector.on("collect", async (collected) => {
            const value = collected.values[0]

            if (value === "Owner") {
                collected.reply({ embeds: [Owner], ephemeral: true })
            }

            if (value === "Moderation") {
                collected.reply({ embeds: [Moderation], ephemeral: true })
            }

            if (value === "Info") {
                collected.reply({ embeds: [Info], ephemeral: true })
            }

            if (value === "Utility") {
                collected.reply({ embeds: [Utility], ephemeral: true })
            }

            if (value === "Setup") {
                collected.reply({ embeds: [Setup], ephemeral: true })
            }

        })
    }
}