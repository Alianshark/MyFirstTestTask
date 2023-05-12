import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets } from './bullet.js'
import { player } from './player.js'
import { addKeybordMovement, movePlayer } from './keybordactions.js'
import { asteroid } from './asteroids.js'

const gameScreenWidth = 1280
const gameScreenHeight = 720

const app = new PIXI.Application({
  width: gameScreenWidth,
  height: gameScreenHeight,
})

document.body.appendChild(app.view)

app.stage.addChild(player)
app.stage.addChild(asteroid)


let elapsed = 0.0
app.ticker.add(gameLoop)

function gameLoop(delta) {
  elapsed += delta
  movePlayer()
  bullets.forEach(moveBullet)
}


addKeybordMovement(app)
