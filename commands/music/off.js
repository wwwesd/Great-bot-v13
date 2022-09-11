/*
module.exports = client;

const logs = require('discord-logs')
logs(client, {
    debug: true
})
 */
//client.on('guildMemberAdd', se7a =>{
  //let chl = se7a.guild.channels.cache.get('957596773604548658');

  //let embed = new MessageEmbed()
  //.setColor("#f10a0a")
  //.setTitle(`𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐗2𝐗 𝐄-𝐒𝐏𝐎𝐑𝐓𝐒`)
  //.setDescription(`
//> <@${se7a.user.id}>

//> 𝐃𝐎𝐍'𝐓 𝐅𝐎𝐑𝐆𝐄𝐓 𝐓𝐎 𝐑𝐄𝐀𝐃 𝐑𝐔𝐋𝐄𝐒 𝐅𝐑𝐎𝐌 #𒋝┇𝐑𝐔𝐋𝐄𝐒 

//> 𝐎𝐏𝐄𝐍 𝐓𝐈𝐂𝐊𝐄𝐓 𝐓𝐎 𝐀𝐏𝐏𝐋𝐘 𝐓𝐎 𝐗2𝐗 𝐂𝐋𝐀𝐍 𝐅𝐑𝐎𝐌 #𒋝┇𝐂𝐋𝐀𝐍・𝐓𝐈𝐂𝐊𝐄𝐓 :red_fire: 


//> 𝐘𝐎𝐔 𝐀𝐑𝐄 𝐌𝐄𝐌𝐁𝐄𝐑 :a11: ${se7a.guild.memberCount} :a22: 


  //`)
    //.setImage("https://media.discordapp.net/attachments/904026108679303189/904434074381320264/standard_4-1.gif")
  //.setFooter(`${se7a.guild.name} `)
  
  //chl.send({embeds : [embed]});
//});

/*
client.on('guildMemberAdd', abdullah => {
  let channel = abdullah.guild.channels.cache.get('ايـدي الـروم');
  if (!channel) return;  
  let embed = new Discord.MessageEmbed()
 .setDescription(`> **Welcome | <@!${abdullah.id}>** :pray:
 > **Server | ${abdullah.guild.name},**
 > **User Number | (${abdullah.guild.memberCount}),**`, true)
      channel.send({embeds:[embed]});
})
*/



/*
  var { Client, Intents } = require("discord.js"),
  client = new Client({
    partials: ["CHANNEL", "GUILD_MEMBER"],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
  });
///
 
var Canvas = require("canvas"); // npm i canvas
var { inviteTracker } = require("discord-inviter"), // npm i discord-inviter
  tracker = new inviteTracker(client);
///
tracker.on("guildMemberAdd", async (member, inviter, invite, error) => { 
    
  let channel = member.guild.channels.cache.get("933132499893243924"); // channel id
  let Msg;
  //
  if (error) {
    Msg = `>>> Welcome ${member.user}`;
  } else {
    Msg = `>>> Welcome ${member.user},
by: <@!${inviter.id}>,`;
    if (!member.user.bot) Msg += `\nInvites: ${invite.count}`;
  }
  //
  let WelcomeImage = await createWelcome(member);
  //
  await channel.send({ files: [WelcomeImage] });
  return channel.send({ content: `${Msg}` });
});
 
///
 
var createWelcome = async (member) => {
  ///
  var { splitText, drawCircle } = require("editor-canvas"); // npm i editor-canvas 
    
  var background =
    "https://media.discordapp.net/attachments/737470353890082987/947970013892083722/1646066035646.png";
  background = await Canvas.loadImage(background);
  var canvas = Canvas.createCanvas(background.width, background.height),
    ctx = canvas.getContext("2d");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 
    
  ///
  var avatar = member.user.displayAvatarURL({ format: "jpg" }); // get user avatar
  avatar = await drawCircle({ image: avatar, stroke: "YELLOW" }); // change avatar to circle
  avatar = await Canvas.loadImage(avatar); // load avatar to canvas
  ctx.drawImage(avatar, 180, 240, 388, 388); // draw avatar 
    
  /// Member Username
  ctx.textAlign = "center";
  ctx.fillStyle = "WHITE";
  ctx.font = "50px Arial";
  var username = splitText(ctx, {
    text: member.user.username,
    width: canvas.width / 4,
    maxLine: 1,
  });
  ctx.fillText(username, canvas.width / 2 + 60, canvas.height / 2 + 20);
    
  // Welcome To
  ctx.font = "70px Arial";
  ctx.fillStyle = "GOLD";
  ctx.fillText("Welcome To", canvas.width / 1.8, canvas.height / 1.3);
    
  // server name
  ctx.font = "60px Arial";
  ctx.fillStyle = "RED";
  var guild = splitText(ctx, {
    text: member.guild.name,
    width: canvas.width / 2.8,
    maxLine: 1,
  });
  ctx.fillText(guild, canvas.width / 1.5, canvas.height / 1.2);
    
  ///
  return canvas.toBuffer();
};

*/


/*
  client.on('messageCreate', message => {
    if (message.content === 'اثبت نفسك') {
      var embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({dynamic : true}))
    .setImage('https://media.discordapp.net/attachments/956503483039744010/961593854333689897/IMG_0279.gif')
        .setColor("Black")
         .setDescription(`**اثـبـت نـفـسـك لـكـي تـضـهـر لـك الـرومـات**`)
        message.channel.send({ embeds: [embed] });
    }
    })
    */



     /*
    client.on("message", message => {
      if(message.author.bot) return;
      if(message.channel.id == "826042241964310545") {////ايدي روم التقيم
      message.react("💖")
      } else { return; }
      })
      */

      /*
      client.on('messageCreate', message => {

        if (message.content === '+help') {
          message.channel.send('> **لقد ارسلت الاوامر في الخاص 📩**')
          message.react('📩');
                  (message.content.toLowerCase().startsWith(PREFIX + "help".toLowerCase())) 
         const cdtime = 5  

      setTimeout(() => {
        message.delete(message.author.id)
      }, cdtime * 1000)
          
          let help = new MessageEmbed()
            .setColor("0000ff")
            .setAuthor("GrabBot")
             .setFooter("Help Menu")
            .setDescription(`
      🌐 - **General Commands** : ↓
      ${PREFIX}tax, ${PREFIX}ping, ${PREFIX}Profile, ${PREFIX}avatar, ${PREFIX}server
      
      :Admin: - **Administration Commands** : ↓ 
      ${PREFIX}lock, ${PREFIX}unlock, ${PREFIX}hide, ${PREFIX}show, ${PREFIX}delete, ${PREFIX}ban, ${PREFIX}unban, ${PREFIX}unban all, ${PREFIX}kick, ${PREFIX}mute, ${PREFIX}unmute
      
      :King:** - Owner Ship Commands** : ↓
      ${PREFIX}setbot, ${PREFIX}settings, ${PREFIX}setprefix,
      **Support Server** : ↓
      https://discord.gg/ 
      `)
        message.author.send({ embeds: [help]});
      
        }
      });
*/

//كود ولكم ايمبد بدون صوره//
/*
  tracker = new inviteTracker(client)
  tracker.on("guildMemberAdd", async (member, inviter, invite) => {
      try {
              const ch = member.guild.channels.cache.get("963487709442236416")
              await ch.send({ content: `**<@${member.user.id}>** welcome to **${member.guild.name}**\n your number **${member.guild.memberCount}**\ninvited by <@!${inviter.id}> ` })
      } catch (err) {
         console.log(err)
      }
  })
  */

  /*
    var { inviteTracker } = require("discord-inviter") // npm i discord-inviter


    client.on("messageCreate", async (message) => {
      // get member invites count
      if (message.content == "#invites") {
        var invite = await inviteTracker.getMemberInvites(message.member);
        message.channel.send(
          `**${message.author.tag} 
          has 
          ${invite.count} invite(s).**`
        );
        // get server top invites
    
    */

        /*
    client.on("messageCreate" , saleh => {
      if(saleh.content.startsWith(prefix + "roles")) {
      if(saleh.member.permissions.has("ADMINISTRATOR")) {
      let member = saleh.mentions.members.first()
      if(!member) return saleh.reply(`**Please Mention The User ! ❌**`)
      let roles1 = member.roles.cache.filter((roles) => roles.id !== saleh.guild.id).map((role) => role.toString()).join(`\n`) ;
      
      let embed = new Discord.MessageEmbed()
      .setTitle(`This is all roles for this user :`)
      .setDescription(`${roles1}`)
      .setColor("Black")
      
      saleh.reply({embeds:[embed]})
      }}
      });
      */
 
     /*
      client.on('guildMemberAdd', message => {
        if (message.guild.id === "826042241259798538")//ايدي سيرفرك
        {
         let user = message.author;
        message.setNickname(` W R | ${message.user.username} `);
        }
        });
        */

/*const room = '965940162334949406'//////// ايدي الروم 
client.on('messageCreate', SLK => {
if(SLK.author.bot) return;
if(SLK.channel.id != room) return;
if(SLK.content.startsWith('69')) return;
let SLK1 = SLK.content.split(' ').slice(0).join(' ');
SLK.delete();
let Embed = new MessageEmbed()
.setAuthor(SLK.author.username, 
    SLK.author.avatarURL({dynamic:true}))
    .setDescription(`> **${SLK1}**`)
    .setColor('#d1d1d1')
    .setThumbnail(SLK.author.avatarURL({dynamic:true}))
SLK.channel.send({embeds: [Embed] }).then(SRAJ => {
///SRAJ.react(`ايدي ايموجي `)
///SRAJ.react(`ايدي ايموجي `)
SLK.channel.send({content: "https://cdn.discordapp.com/attachments/726388631664852992/967544778394837022/image1.png"})
})})
*/


/*
// Channel Permission Updating
client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const PermissionUpdate = new MessageEmbed()
      .setTitle('Permission Updated!')
      .setColor('DARK_PURPLE')
      .setDescription(`${channel.name}'s permissions updated!"`);

  return LogChannel.send({
      embeds: [PermissionUpdate]
  });

})

// unhandled Guild Channel Update
client.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const unhandledGuildChannelUpdate = new MessageEmbed()
      .setTitle('Channel Updated!')
      .setColor('DARK_PURPLE')
      .setDescription("Channel '" + oldChannel.id + "' was edited but discord-logs couldn't find what was updated...");

  return LogChannel.send({
      embeds: [unhandledGuildChannelUpdate]
  });

});

// Member Started Boosting
client.on("guildMemberBoost", (member) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberBoost = new MessageEmbed()
      .setTitle('User Started Boosting!')
      .setColor('DARK_PURPLE')
      .setDescription(`**${member.user.tag}** has started boosting  ${member.guild.name}!`);
  return LogChannel.send({
      embeds: [MemberBoost]
  });

})

// Member Unboosted
client.on("guildMemberUnboost", (member) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberUnboost = new MessageEmbed()
      .setTitle('User Stoped Boosting!')
      .setColor('DARK_PURPLE')
      .setDescription(`**${member.user.tag}** has stopped boosting  ${member.guild.name}!`);

  return LogChannel.send({
      embeds: [MemberUnboost]
  });

})

// Member Got Role
client.on("guildMemberRoleAdd", (member, role) => {
  
  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberRoleAdd = new MessageEmbed()
      .setTitle('User Got Role!')
      .setColor('DARK_PURPLE')
      .setDescription(`**${member.user.tag}** got the role \`${role.name}\``);

  return LogChannel.send({
      embeds: [MemberRoleAdd]
  });

})

// Member Lost Role
client.on("guildMemberRoleRemove", (member, role) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberRoleRemove = new MessageEmbed()
      .setTitle('User Lost Role!')
      .setColor('DARK_PURPLE')
      .setDescription(`**${member.user.tag}** lost the role \`${role.name}\``);

  return LogChannel.send({
      embeds: [MemberRoleRemove]
  });

})

// Nickname Changed
client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberNicknameUpdate = new MessageEmbed()
      .setTitle('Nickname Updated')
      .setColor('DARK_PURPLE')
      .setDescription(`${member.user.tag} changed nickname from \`${oldNickname}\` to \`${newNickname}\``);

  return LogChannel.send({
      embeds: [MemberNicknameUpdate]
  });

})

// Member Joined
client.on("guildMemberEntered", (member) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberJoined = new MessageEmbed()
      .setTitle('User Joined')
      .setColor('DARK_PURPLE')
      .setDescription(`${member.user.tag} Joined!`);

  return LogChannel.send({
      embeds: [MemberJoined]
  });

})

// Server Boost Level Up
client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const LevelUp = new MessageEmbed()
      .setTitle('Server Boost Level Up')
      .setColor('DARK_PURPLE')
      .setDescription(`${guild.name} reached the boost level ${newLevel}`);

  return LogChannel.send({
      embeds: [LevelUp]
  });

})

// Server Boost Level Down
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const LevelDown = new MessageEmbed()
      .setTitle('Server Boost Level Down')
      .setColor('DARK_PURPLE')
      .setDescription(`${guild.name} lost a level from ${oldLevel} to ${newLevel}`);

  return LogChannel.send({
      embeds: [LevelDown]
  });

})

// Banner Added
client.on("guildBannerAdd", (guild, bannerURL) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const BannerAdd = new MessageEmbed()
      .setTitle('Server Got a new banner')
      .setColor('DARK_PURPLE')
      .setImage(bannerURL)

  return LogChannel.send({
      embeds: [BannerAdd]
  });

})

// AFK Channel Added
client.on("guildAfkChannelAdd", (guild, afkChannel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const AFKAdd = new MessageEmbed()
      .setTitle('AFK Channel Added')
      .setColor('DARK_PURPLE')
      .setDescription(`${guild.name} has a new afk channel ${afkChannel}`);

  return LogChannel.send({
      embeds: [AFKAdd]
  });

})

// Guild Vanity Add
client.on("guildVanityURLAdd", (guild, vanityURL) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VanityAdd = new MessageEmbed()
      .setTitle('Vanity Link Added')
      .setColor('DARK_PURPLE')
      .setDescription(`${guild.name} has a vanity link ${vanityURL}`);

  return LogChannel.send({
      embeds: [VanityAdd]
  });

})

// Guild Vanity Remove
client.on("guildVanityURLRemove", (guild, vanityURL) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VanityRemove = new MessageEmbed()
      .setTitle('Vanity Link Removed')
      .setColor('DARK_PURPLE')
      .setDescription(`${guild.name} has removed its vanity URL ${vanityURL}`);

  return LogChannel.send({
      embeds: [VanityRemove]
  });

})

// Guild Vanity Link Updated
client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VanityUpdated = new MessageEmbed()
      .setTitle('Vanity Link Updated')
      .setColor('DARK_PURPLE')
      .setDescription(`${guild.name} has changed its vanity URL from ${oldVanityURL} to ${newVanityURL}!`);

  return LogChannel.send({
      embeds: [VanityUpdated]
  });

})

// Message Pinned
client.on("messagePinned", (message) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MessagePinned = new MessageEmbed()
      .setTitle('Message Pinned')
      .setColor('DARK_PURPLE')
      .setDescription("This message has been pinned : " + message);

  return LogChannel.send({
      embeds: [MessagePinned]
  });

})

// Message Edited
client.on("messageContentEdited", (message, oldContent, newContent) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MessageEdited = new MessageEmbed()
      .setTitle('Message Edited')
      .setColor('DARK_PURPLE')
      .setDescription(`Message Edited from \`${oldContent}\` to \`${newContent}\``);

  return LogChannel.send({
      embeds: [MessageEdited]
  });

})

// Member Became Offline
client.on("guildMemberOffline", (member, oldStatus) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberOffline = new MessageEmbed()
      .setTitle('Message Offline')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " became offline!");

  return LogChannel.send({
      embeds: [MemberOffline]
  });

})

// Member Became Online
client.on("guildMemberOnline", (member, newStatus) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const MemberOnline = new MessageEmbed()
      .setTitle('Message Online')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " was offline and is now " + newStatus + "!");

  return LogChannel.send({
      embeds: [MemberOnline]
  });

})

// Role Position Updated
client.on("rolePositionUpdate", (role, oldPosition, newPosition) => {
  
  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const RolePositionUpdated = new MessageEmbed()
      .setTitle('Role Position Updated')
      .setColor('DARK_PURPLE')
      .setDescription(role.name + " role was at position " + oldPosition + " and now is at position " + newPosition);

  return LogChannel.send({
      embeds: [RolePositionUpdated]
  });

})

// Role Permission Updated
client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const RolePermissionUpdated = new MessageEmbed()
      .setTitle('Role Permission Updated')
      .setColor('DARK_PURPLE')
      .setDescription(role.name + " had as permissions " + oldPermissions + " and now has as permissions " + newPermissions);

  return LogChannel.send({
      embeds: [RolePermissionUpdated]
  });

})

// Avatar Updated
client.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const AvatarUpdated = new MessageEmbed()
      .setTitle('Avatar Updated')
      .setColor('DARK_PURPLE')
      .setDescription(`${user.tag} updated avatar from [Old Avatar](${oldAvatarURL}) to [New Avatar(${newAvatarURL})]`);

  return LogChannel.send({
      embeds: [AvatarUpdated]
  });

})

// Username Updated
client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const Username = new MessageEmbed()
      .setTitle('Username Updated')
      .setColor('DARK_PURPLE')
      .setDescription(`${user.tag} updated thier username from ${oldUsername} to ${newUsername}`);

  return LogChannel.send({
      embeds: [Username]
  });

})

// Discriminator Updated
client.on("userDiscriminatorUpdate", (user, oldDiscriminator, newDiscriminator) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const Discriminator = new MessageEmbed()
      .setTitle('Discriminator Updated')
      .setColor('DARK_PURPLE')
      .setDescription(`${user.tag} updated thier discriminator from ${oldDiscriminator} to ${oldDiscriminator}`);

  return LogChannel.send({
      embeds: [Discriminator]
  });

})

// Flags Updated
client.on("userFlagsUpdate", (user, oldFlags, newFlags) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const FlagsUpdate = new MessageEmbed()
      .setTitle('Flags Updated')
      .setColor('DARK_PURPLE')
      .setDescription(`${user.tag} updated thier flags from ${oldFlags} to ${newFlags}`);

  return LogChannel.send({
      embeds: [FlagsUpdate]
  });

})

// Joined VC
client.on("voiceChannelJoin", (member, channel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VCJoined = new MessageEmbed()
      .setTitle('Voice Channel Joined')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " joined " + `${channel}` + "!");

  return LogChannel.send({
      embeds: [VCJoined]
  });

})

// Left VC
client.on("voiceChannelLeave", (member, channel) => {
  
  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VCLeft = new MessageEmbed()
      .setTitle('Voice Channel Left')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " left " + `${channel}` + "!");

  return LogChannel.send({
      embeds: [VCLeft]
  });

})

// VC Switch
client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VCSwitch = new MessageEmbed()
      .setTitle('Voice Channel Switched')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " left " + oldChannel.name + " and joined " + newChannel.name + "!");

  return LogChannel.send({
      embeds: [VCSwitch]
  });

})

// VC Mute
client.on("voiceChannelMute", (member, muteType) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VCMute = new MessageEmbed()
      .setTitle('User Muted')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " became muted! (type: " + muteType + ")");

  return LogChannel.send({
      embeds: [VCMute]
  });

})

// VC Unmute
client.on("voiceChannelUnmute", (member, oldMuteType) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VCUnmute = new MessageEmbed()
      .setTitle('User Unmuted')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " became unmuted!");

  return LogChannel.send({
      embeds: [VCUnmute]
  });

})

// VC Defean
client.on("voiceChannelDeaf", (member, deafType) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VCDeafen = new MessageEmbed()
      .setTitle('User Deafend')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " become deafed!");

  return LogChannel.send({
      embeds: [VCDeafen]
  });

})

// VC Undefean
client.on("voiceChannelUndeaf", (member, deafType) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const VCUndeafen = new MessageEmbed()
      .setTitle('User Undeafend')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " become undeafed!");

  return LogChannel.send({
      embeds: [VCUndeafen]
  });

})

// User Started to Stream
client.on("voiceStreamingStart", (member, voiceChannel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const UserStreaming = new MessageEmbed()
      .setTitle('User Started to Stream')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " started streaming in " + voiceChannel.name);

  return LogChannel.send({
      embeds: [UserStreaming]
  });
  
})

// User Stopped to Stream
client.on("voiceStreamingStart", (member, voiceChannel) => {

  const LogChannel = client.channels.cache.get('878769234874875926'); // Replace with your channel id
  const UserStoppedStreaming = new MessageEmbed()
      .setTitle('User Stopped to Stream')
      .setColor('DARK_PURPLE')
      .setDescription(member.user.tag + " stopped streaming in " + voiceChannel.name);

  return LogChannel.send({
      embeds: [UserStoppedStreaming]
  });

})
*/

/*
client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "slap")) {
            let user = message.mentions.users.first();
                          if(!user) return message.reply({ content: "need mention user" })
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Batslap().getImage(`${avatar}`, `${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "slap.png");;
      message.channel.send({ embeds: [attach] })
  }
});  

const DIG = require("discord-image-generation");
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix+"rip")) {
      let user = message.mentions.users.first() || client.users.cache.get(message.content.split(" ")[2]) || client.users.cache.get(message.content.split(" ")[1]);
      if(!user) return message.channel.send({ content: "user" })
      const avatar2 = user.displayAvatarURL({ dynamic: false , format: 'png' });
      let ef = await new DIG.Rip().getImage(avatar2)
      let attach = new Discord.MessageAttachment(ef , "ripdude.png");
     await message.channel.send({ embeds: [attach] })
  }
})  
 */


/*
 client.on("messageCreate" , message => {
 if(message.content.startsWith(prefix + "setlog")) {
 let ch = message.mentions.channels.first()
 if(!ch) return message.reply(`:x: | **Mention a channel**`)
 message.reply(`> **Done added <#${ch.id}> to the DB **`)
 db.set(`channel_${message.guild.id}`, ch.id)
 }
 });
 
 client.on("messageCreate" , message => {
   let now = new Date()
   let moment = require("moment")
   let channel1 = db.get(`channel_${message.guild.id}`)
   let channel = message.guild.channels.cache.get(channel1)
   if(message.content.startsWith(prefix + "ad")) {
     if(!message.member.permissions.has("ADMINISTRATOR")) return;
     let user = message.mentions.users.first()
     if(!user) return message.reply(":x: | **Mention a user**")
     if(user.bot) return message.reply(":rolling_eyes: | **You can't warn a bot**")
     if(user.id == message.member.id) return message.reply(":rolling_eyes: | **You can't warn yourself**")
     let reason = message.content.split(" ").slice(2).join(" ")
     if(!reason) return message.reply(":x: | **Put a reason**")
     if(!channel1) return message.reply(":x: | **Set log channel first by using : \`${prefix}setlog\` command**")
     db.add(`warns_${user.id}` , 1)
     db.set(`reason_${user.id}` , reason)
     db.set(`messageauthor_${user.id}` , message.author.id)
     db.set(`time_${user.id}` , moment(now).format("M/D/YYYY"))
     let embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username , message.author.displayAvatarURL())
     .setDescription(`> **You have warned in server : ${message.guild.name}**\n> **Reason : ${reason}**\n> **Warned by : <@${message.author.id}>**\n> **Warned at : ${moment(now).format("M/D/YYYY")}**`)
     .setThumbnail(message.guild.iconURL())
     .setFooter(user.username , user.displayAvatarURL())
     let embed2 = new Discord.MessageEmbed()
     .setAuthor(message.author.username , message.author.displayAvatarURL())
     .setTitle("**User were warned !**")
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
     let embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username , message.author.displayAvatarURL())
     .setDescription(`> **-This user have ${warns} warns**\n> **-Reason : ${reason}**\n> **-Warned by : <@!${warnedby}>**\n> **-Warned at : ${time}**`)
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
 */


 /*
client.on("messageCreate" , leo => {
if(leo.content.startsWith(prefix + "mute")){
  const user = leo.mentions.members.first();
  let args = leo.content.trim().split(/ +/g);
  if(!user) return leo.reply({
    embeds: [
      new MessageEmbed()
          .setColor("LUMINOUS_VIVID_PINK")
          .setDescription("منشن شخص")
  ], 
  })
  const role = leo.guild.roles.cache.find((ro) => ro.name === "Muted");
  if (!role) {
    leo.guild.roles.create({
      data: {
        name: "Muted",
        color: "RED",
      },
    });
  }
  const time = args[3];
    if (!time) {
      return leo.reply({
        embeds: [
          new MessageEmbed()
              .setColor("LUMINOUS_VIVID_PINK")
              .setDescription("كم المدة اللي تبيها ")
      ], 
      })
    }
    const reason = args[4];
  
    if (!reason) {
      return leo.reply({
        embeds: [
          new MessageEmbed()
              .setColor("LUMINOUS_VIVID_PINK")
              .setDescription("وش سبب الميوت ")
      ], 
      })
    }
    const leomessi = new MessageEmbed()
    .setTitle("Action: mute ")
    .setColor("LUMINOUS_VIVID_PINK")
    .addField("User:", `${user}`)
    .addField("Reason", `${reason}`)
    .addField("Moderator:", `${leo.member.displayName}`)
    .addField("Time", `${time}`);
  const leomessi1 = new MessageEmbed()
    .setTitle("YOU HAVE BEEN MUTED!!")
    .setColor("RANDOM")
    .addField("Reason", `${reason}`)
    .addField("Moderator:", `${leo.member.displayName}`)
    .addField("Time", `${time}`);
  user.send({ embeds: [leomessi1] });
  leo.channel.send({ embeds: [leomessi] });
  user.roles.add(`${role}`);
  setTimeout(function () {
    user.roles.remove(`${role}`);
    user.send(`You are now unmuted! We hope you Follow the Rules next time`);
  }, ms(time));  

}
})

 /*

clien t.on("messageCreate" , leo => {
  if(leo.content.startsWith(prefix + "softban")){
    if (!leo.member.permissions.has('BAN_MEMBERS'))  return leo.reply({
      embeds: [
        new MessageEmbed()
            .setColor("#9784c4")
            .setDescription("**:x: - You don't have \`BAN_MEMBERS\` permissions**")
    ], 
    })
  
    let args = leo.content.trim().split(/ +/g);
    let log = client.channels.cache.get('982189183080730634')
    let banMember =
        leo.mentions.members.first() ||
        leo.guild.members.cache.get(args[0]);
        if(!banMember) return leo.reply({
          embeds: [
            new MessageEmbed()
                .setColor("#9784c4")
                .setDescription("Please provide a user to ban!")
        ], 
        });
       
        let reason = args[3]
        if (!reason) return leo.reply({
          embeds: [
            new MessageEmbed()
                .setColor("#9784c4")
                .setDescription("No reason given!")
        ], 
        })
  
        banMember
        .send({
          embeds: [
            new MessageEmbed()
                .setColor("#9784c4")
                .setDescription(`Hello, you have been banned from ${leo.guild.name} for violating Server Rules`)
        ], 
        })
        .then(() =>
        banMember.ban({ deleteMessageDays: 7, reason: reason })
        )
       
  
        let Messi3mk = new MessageEmbed()
        .setThumbnail(banMember.user.displayAvatarURL())
        .setColor("#9784c4")
        .addField("Moderation:", "SOFT BAN")
        .addField("Banned:", `${banMember.user.username}`)
        .addField("Moderator:", `${leo.author.username}`)
        .addField("Reason:", `${reason}`)
        .setTimestamp();
  
      log.send({ embeds: [Messi3mk] });
  
  }
  })
  
  let id = ['982189183080730634', '', ''];

client.on("messageCreate", message => {
if (message.author.bot || !message.channel.guild) return;
  
  let args = message.content.split(',')  
  if(id.includes(message.channel.id)){
  
  message.delete()
    
  let row = new MessageActionRow()
  .addComponents(
new MessageButton()
    .setLabel('Profile') .setURL(`https://discord.com/users/${message.author.id}`)
    .setStyle('LINK')
);
  const embed = new MessageEmbed()

    
.setColor(`#9784c4`)   
    .setThumbnail(message.author.avatarURL({ dynamic: true }))
    
.setDescription(`${args}`)
    
.setTimestamp()
  
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}
  message.channel.send({ embeds: [embed], components: [row] })
  }
 }); 

 client.on("guildMemberAdd",menubar =>{
  let Embed = new MessageEmbed()
  .setColor(`#9784c4`)
  .setTitle(`${menubar.guild.name}`)
  .setThumbnail(menubar.guild.iconURL({ dynamic: true }))
  .setDescription(`**<:Untitled11:984077747460636742> Brown حياك الله في سيرفر  ** `)
  //.addField(`Your Server Name:`, `${message.guild.name}`)//
  menubar.send({ embeds: [Embed] })
})

client.on("messageCreate", async message => {
    try {
        if (message.author.bot) return
        if (message.content.startsWith(prefix + "start")) {
            let channel = client.channels.cache.get("982189183080730634")// ايدي الروم الي ينرسل فيه الكود
            let permission = message.guild.roles.cache.find(r => r.id === "837479824686972958") // ايدي الرتبة الي تقدر تستعمل الكود
            if (!channel) return
            if (!message.member.roles.cache.has(permission.id)) return
            message.channel.send({ content: `عنوان الكود؟` }).then((m) => {
                setTimeout(() => {
                    m.delete()
                }, 10000)
                let filter = m => m.author.id === message.author.id
                m.channel.awaitMessages({ filter, max: 1, time: 30000, errors: `خلص الوقت` }).then((m1) => {
                    let title = m1.first().content
                    m1.delete()
                    message.channel.send({ content: `وصف الكود؟` }).then((m) => {
                        setTimeout(() => {
                            m.delete()
                        }, 10000)
                        let filter = m => m.author.id === message.author.id
                        m.channel.awaitMessages({ filter, max: 1, time: 30000, errors: `خلص الوقت` }).then((m2) => {
                            let describ = m2.first().content
                            m2.delete()
                            message.channel.send({ content: `صانع الكود؟` }).then((m) => {
                                setTimeout(() => {
                                    m.delete()
                                }, 10000)
                                let filter = m => m.author.id === message.author.id
                                m.channel.awaitMessages({ filter, max: 1, time: 30000, errors: `خلص الوقت` }).then((m3) => {
                                    let madeBy = m3.first().content
                                    m3.delete()
                                    message.channel.send({ content: `اصدار الكود؟` }).then((m) => {
                                        setTimeout(() => {
                                            m.delete()
                                        }, 10000)
                                        let filter = m => m.author.id === message.author.id
                                        m.channel.awaitMessages({ filter, max: 1, time: 30000, errors: `خلص الوقت` }).then((m4) => {
                                            let version = m4.first().content
                                            m4.delete()
                                            message.channel.send({ content: `الكود` }).then((m) => {
                                                setTimeout(() => {
                                                    m.delete()
                                                }, 10000)
                                                let filter = m => m.author.id === message.author.id
                                                m.channel.awaitMessages({ filter, max: 1, time: 30000, errors: `خلص الوقت` }).then((m5) => {
                                                    let code = m5.first().content
                                                    m5.delete

                                                    let embed = new MessageEmbed()
                                                        .setTitle(`New Code`)
                                                        .setColor("#9784c4")
                                                        .setDescription(` \`\`\`js\n${code}\n\`\`\``)
                                                        .addFields(
                                                            { name: `Title`, value: `${title}`, inline: true },
                                                            { name: `Description`, value: `${describ}`, inline: true },
                                                            { name: `Made by`, value: `${madeBy}`, inline: true },
                                                            { name: `Version`, value: `${version}`, inline: true },
                                                        )

                                                    channel.send({ embeds: [embed] })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    } catch (e) {
        console.log(e)
    }
})


  */