import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets, ammo } from './bullet.js'
import { player } from './player.js'
import { addKeybordMovement, movePlayer } from './keybordactions.js'
import { asteroids, createNewAsteroid } from './asteroid.js'
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

for (let i=0; i < 3; i++) {  
  let asteroid = createNewAsteroid()
  asteroids.push(asteroid)
  app.stage.addChild(asteroid)  
}

app.stage.addChild(player)
app.stage.addChild(gameTimeText)
app.stage.addChild(bulletLeftText)
app.ticker.add(gameLoop)

if (hitTest()) {
  let asteroid = asteroids[1]
  asteroid.destroy()
}

function gameLoop(delta) {
  elapsed += delta
  
  if (elapsed >= 3600) {
    gameTimeText.text = 'game Over'
  } else {
    gameTimeText.text = Math.floor(elapsed/60) 
    movePlayer()
  }
  
  bulletLeftText.text = `bullets left: ${ammo.shots}`
  bullets.forEach(moveBullet)
}

function hitTest () {
  return true;
}

addKeybordMovement(app)
