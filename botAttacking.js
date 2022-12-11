const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 50988,
    username: 'Attack_Bot'
})


/*
bot.once('spawn', () =>{
    setInterval(() => {
        const mobFilter = e => e.type === 'mob' && e.mobType === 'Zombie'
        const mob = bot.nearestEntity(mobFilter)
    

        if(!mob) return

        const pos = mob.position.offset(0, mob.height, 0)
        bot.lookAt(pos, true, () => {
            bot.attack(mob)
        })

    }, 1000)
})

*/

bot.on('spawn', () => {
    bot.on('chat', (username, message) => {
      if (message === 'attack me') attackPlayer(username)
      else if (message === 'attack') attackEntity()
    })
  })
  
  function attackPlayer (username) {
    const player = bot.players[username]
    if (!player || !player.entity) {
      bot.chat('I can\'t see you')
    } else {
      bot.chat(`Attacking ${player.username}`)
      bot.attack(player.entity)
    }
  }
  
  function attackEntity () {
    const entity = bot.nearestEntity()
    if (!entity) {
      bot.chat('No nearby entities')
    } else {
      bot.chat(`Attacking ${entity.name ?? entity.username}`)
      bot.attack(entity)
    }
  }