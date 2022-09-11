const { Discord, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js")
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: "buttons",
    async execute(client, message, args) {
        if (!message.member.permissions.has("ADMINISTATOR")) return
        let embed = new MessageEmbed()     .setTitle("Roles")
        .setColor("BLURPLE")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setDescription(`**        __السلام عليكم__**

                      ** __تستطيع اختيار الرول للقسم الذي يثير انتبهاك من خلال ضغطك على الرياكشن اختيار الرتبة__**

                    **<@&966802101168668703> : 🎉**

                    **<@&966802151131205653> : 🎥**

                    **<@&966802172727681044> : 🔔**
                    
                    **<@&966802194072485898> : 🎁 **

                    **<@&978322570782842894> : 🔮 **

                    **<@&978308369804828682> : 📣 **

                    **<@&978308369804828682> : 📺 **

                    `)
        .setFooter("Weller Bot ")
        .setImage("https://cdn.discordapp.com/attachments/726388631664852992/967121409094610944/unknown.png")
        .setAuthor(`${message.guild.name}`, client.user.displayAvatarURL({ dynamic: true }))


        const btn1 = new MessageButton()
            .setCustomId("role1")//لاتعدل شي
            .setLabel("Weller Events")
            .setStyle("SECONDARY")
            .setEmoji("🎉")
          

        const btn2 = new MessageButton()
            .setCustomId("role2")//لاتعدل شي
            .setLabel("Movie")
            .setStyle("PRIMARY")
            .setEmoji("🎥")

        const btn3 = new MessageButton()
            .setCustomId("role3")//لاتعدل شي
            .setLabel("News")
            .setStyle("PRIMARY")
            .setEmoji("🔔")

        const btn4 = new MessageButton()
            .setCustomId("role4")//لاتعدل شي
            .setLabel("Giveaways")
            .setStyle("PRIMARY")
            .setEmoji("🎁")


            const btn5 = new MessageButton()
            .setCustomId("role5")//لاتعدل شي
            .setLabel("Anime")
            .setStyle("PRIMARY")
            .setEmoji("🔮")

        const btn6 = new MessageButton()
            .setCustomId("role6")//لاتعدل شي
            .setLabel("Anime News")
            .setStyle("PRIMARY")
            .setEmoji("📣")

        const btn7 = new MessageButton()
            .setCustomId("role7")//لاتعدل شي
            .setLabel("Episodes News")
            .setStyle("PRIMARY")
            .setEmoji("📺")
/*
        const btn8 = new MessageButton()
            .setCustomId("role8")//لاتعدل شي
            .setLabel("role8")
            .setStyle("PRIMARY")
            .setEmoji("🎮")

        const btn9 = new MessageButton()
            .setCustomId("role9")//لاتعدل شي
            .setLabel("role9")
            .setStyle("PRIMARY")
            .setEmoji("🎮")
*/

        const buttons = new MessageActionRow()
            .addComponents(btn1, btn2, btn3, btn4, btn5)
        const buttons1 = new MessageActionRow()
            .addComponents(btn6, btn7,)

        let sendmsg = await message.channel.send({
            content: "ㅤ",
            ephemeral: true,
            embeds: [embed],
            components: [buttons, buttons1]
        })




        const collector = message.channel.createMessageComponentCollector({
            componentType: "BUTTON"
        })

        collector.on("collect", async (i) => {
            if (i.customId === "role1") {//لاتعدل شي
                const role = i.guild.roles.cache.get("966802101168668703") // ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role2") {//لاتعدل شي
                const role = i.guild.roles.cache.get("966802151131205653")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role3") {//لاتعدل شي
                const role = i.guild.roles.cache.get("966802172727681044")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role4") {//لاتعدل شي
                const role = i.guild.roles.cache.get("966802194072485898")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role5") {//لاتعدل شي
                const role = i.guild.roles.cache.get("978322570782842894")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role6") {//لاتعدل شي
                const role = i.guild.roles.cache.get("978322699988377650")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role7") {//لاتعدل شي
                const role = i.guild.roles.cache.get("978308369804828682")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role8") {//لاتعدل شي
                const role = i.guild.roles.cache.get("966792463400435792")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }

            if (i.customId === "role9") {//لاتعدل شي
                const role = i.guild.roles.cache.get("966792471461916742")// ايدي الرتبة

                if (!i.member.roles.cache.find(r => r.id === `${role.id}`)) {
                    i.member.roles.add(role).then(() => {
                        i.reply({ content: `Done added the role`, ephemeral: true })
                    })
                } else {
                    i.member.roles.remove(role).then(() => {
                        i.reply({ content: `Done removed the role`, ephemeral: true })
                    })
                }
            }
        })

    }
}