import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets, ammo } from './bullet.js'
import { player } from './player.js'
import { addKeybordMovement, movePlayer } from './keybordactions.js'
import { creatAsteriods } from './asteroid.js'
import { bulletLeftText } from './bulletText.js'
import { gameTimeText } from './gameTimeText.js'
import { gameScreenHeight, gameScreenWidth } from './config.js'
import { endGameText } from './endGameText.js'

let elapsed = 0.0
let secElapsed = 0
const fps = 60
const timeLimitSec = 5

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
  secElapsed = elapsed/fps
  gameTimeText.text = timeLimitSec - Math.floor(secElapsed) 
  bulletLeftText.text = `bullets left: ${ammo.shots}`
  bullets.forEach(moveBullet)
  movePlayer()
  endGameIfTimeOver()
}

function endGameIfTimeOver () {
  if (secElapsed >= timeLimitSec) {
    app.stage.addChild(endGameText)
    app.ticker.stop()
  } 
}


