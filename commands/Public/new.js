const { COOLDOWN } = require('../../JSON/config.json')

  module.exports = {
    name: 'new',
    cooldown: 8000,
    execute(client, message, args) {

        const thread = message.startThread({
            name:`${message.author.username}`})
          .then(m=> m.send("**Done this thread i'ts just for you ! **"))
    }
}