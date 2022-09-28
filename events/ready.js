module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      console.log(`Im' ${client.user.username}`)
      client.user.setActivity({name: `Great`, type:"STREAMING", url:"https://www.twitch.tv/z3tr"})
      client.user.setStatus('idle')
  
    },
  };
