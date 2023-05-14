import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets, ammo } from './bullet.js'
import { player } from './player.js'
import { addKeybordMovement, movePlayer } from './keybordactions.js'
import { asteroids, creatAsteriods } from './asteroid.js'
import { bulletLeftText } from './bulletText.js'
import { gameTimeText } from './gameTimeText.js'

const gameScreenWidth = 1280
const gameScreenHeight = 720
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
  
  gameTimeText.text = Math.floor(elapsed/60) 
  bulletLeftText.text = `bullets left: ${ammo.shots}`
  bullets.forEach(moveBullet)
  movePlayer()

  if (elapsed >= 3600) {
    gameTimeText.text = 'game Over'
    app.ticker.stop()
  } 
}

function hitTest () {
  return true;
}

if (hitTest()) {
  let asteroid = asteroids[1]
  asteroid.destroy()
}

