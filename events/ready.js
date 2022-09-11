/*module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      console.log(`Im' ${client.user.username}`)
      client.user.setActivity({name: `Brown`, type:"STREAMING", url:"https://www.twitch.tv/z3tr"})
      client.user.setStatus('idle')
  
    },
  };
  */
  module.exports = {
    name: 'ready',

    once: true,
    execute(client) {
    let time = 5;
    let array = ["1aaa", "hgf", "fg"]
    setInterval(() => {
        let random = Math.floor(Math.random() * array.length)
        client.user.setActivity({name: `${array[random]}`, type:"STREAMING", url:"https://www.twitch"})
    }, time * 1000);
  },
};