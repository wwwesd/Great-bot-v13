const  { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'color',

  async execute(client, message, args) {
      
    if(isNaN(args)) return message.channel.send(':x: يمكنك كتابه ارقام فقط')

    let role = message.guild.roles.cache.find(r => r.name == args)


    message.member.roles.cache.filter(rr => !isNaN(rr.name)).forEach(r => {

        message.member.roles.remove(r)

    })

    message.member.roles.add(role).then( async () => {

        let Embed = new MessageEmbed()

        .setTitle('تم تغيير اللون إلى ' + args)

        .setColor(role.hexColor)

        let i = await message.reply({ embeds: [Embed] }).catch(error => {console.error(error)})

        i.delete();
        message.delete();

    })

  }
}