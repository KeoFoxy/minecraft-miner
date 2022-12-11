const mineflayer = require('mineflayer')
const { pathfinder } = require('mineflayer-pathfinder')

const bot = mineflayer.createBot({                                          //Bot init
    host: 'localhost',
    port: 50988,
    username: 'Miner'
})

bot.loadPlugin(pathfinder)                                                  //Add pathfinder plugin to Bot



function lookAtNearestPlayer(){
    const playerFilter = (entity) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(playerFilter)

    if(!playerEntity) return

    const pos = playerEntity.position.offset(0, playerEntity.height, 0)
    bot.lookAt(pos)
}

function followPlayer(){
    const playerCI = bot.players['KeoFoxy']

    if(!playerCI){
        bot.chat('I cant see CI')
        return
    }

    const mcData = require('minecraft-data')(bot.version)
}

bot.on('physicTick', lookAtNearestPlayer)

bot.once('spawn', followPlayer)
