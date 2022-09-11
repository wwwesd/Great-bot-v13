
module.exports = {
    name: 'say',

    async execute(client, message, args ) {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            return message.reply(` You need **MANAGE CHANNELS** permission for this command`)
            .then(msg => {
                setTimeout(() => msg.delete(), 5000)
            })
            .catch("Eror")
        }
        message.delete();
       message.channel.send(`${args.join(" ")}`)

    }
}