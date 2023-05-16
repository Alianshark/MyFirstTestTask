import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets, ammo } from './bullet.js'
import { player } from './player.js'
import { addKeybordMovement, movePlayer } from './keybordactions.js'
import { asteroids, creatAsteriods } from './asteroid.js'
import { bulletLeftText } from './bulletText.js'
import { gameTimeText } from './gameTimeText.js'
import { gameScreenHeight, gameScreenWidth } from './config.js'
import { endGameText } from './endGameText.js'

let elapsed = 0.0

const app = new PIXI.Application({
  width: gameScreenWidth,
  height: gameScreenHeight,
})

document.body.appendChild(app.view)

creatAsteriods(app)
addKeybordMovement(app)

app.stage.addChild(player)
app.stage.addChild(gameTimeText)
app.stage.addChild(bulletLeftText)


app.ticker.add(gameLoop)

function gameLoop(delta) {
  elapsed += delta
  
  gameTimeText.text = 60 - Math.floor(elapsed/60) 
  bulletLeftText.text = `bullets left: ${ammo.shots}`
  bullets.forEach(moveBullet)
  movePlayer()
  endGameIfTimeOver()
}

function endGameIfTimeOver () {
  if (elapsed >= 3600) {
    gameTimeText.x = gameScreenWidth / 2 - gameTimeText.width / 2
    gameTimeText.y = gameScreenHeight / 2 - gameTimeText.height / 2
    gameTimeText.text = 'game Over'
    app.ticker.stop()
  } 
}
