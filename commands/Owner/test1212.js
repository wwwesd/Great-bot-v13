const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js'); 

module.exports = {
    name: 'test1212',
    cooldown: 8000,
    async execute(client, message, args) {

        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply((`:x: - You don't have \`ADMINISTRATOR\` permissions`))


        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId("m")
            .setMaxValues(1)
            .setPlaceholder("Select To Roles")
            .addOptions([
                {
                    label: "Weller.",
                    description: "select to take the Weller.",
                    value: "op1",
                },
                {
                 label: "Anime",
                 description: "select to take the Anime",
                 value: "op2",
                }
            ])
        )

        let embed = new MessageEmbed()
      .setTitle('Great Server')

      .setColor('GREY')

      .setDescription(`**
        Take The Role

        في حال لم يستجيب البوت قم بالتواصل مع الدعم 
        
<#826432420345020446>
   **`)   .setThumbnail(message.guild.iconURL( {dynamic: true, format: 'png'})) 
   .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true, format: 'png' }))
   .setTimestamp()

      let m = await message.channel.send({embeds : [embed], components : [row]})
      let col = m.createMessageComponentCollector({componenType : "SELECT-MENU"})
      message.delete();


      col.on("collect", async i => {


      if(i.values[0] === "op1" || i.values[1] === 'op1') {
                const role = i.guild.roles.cache.get("826042241259798545") // الايدي
                const member = i.user.id
                 message.member.roles.add(role.id)
                 
                 
            } 
            
            if(i.values[0] ===  "op2" || i.values[1] ==='op2' ) {
                const role = i.guild.roles.cache.get("877622335635607613") // الايدي
             const member = i.user.id
                 message.member.roles.add(role.id)
                
                } 
          
          })
        }
}