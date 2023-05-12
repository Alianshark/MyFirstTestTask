import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets } from './bullet.js'
import { player } from './player.js'
import { addKeybordMovement, movePlayer } from './keybordactions.js'
import { asteroids, createNewAsteroid } from './asteroid.js'

const gameScreenWidth = 1280
const gameScreenHeight = 720

const app = new PIXI.Application({
  width: gameScreenWidth,
  height: gameScreenHeight,
})

document.body.appendChild(app.view)


for (let i=0; i < 7; i++) {  
  let asteroid = createNewAsteroid()
  asteroids.push(asteroid)
  app.stage.addChild(asteroid)
}

app.stage.addChild(player)

let elapsed = 0.0
app.ticker.add(gameLoop)

function gameLoop(delta) {
 if (elapsed < 6000) {
console.log('times tarts', elapsed)
   elapsed += delta
   movePlayer()
  } else {
    console.log('time Out!')
  }
  
  if (movePlayer) {
    bullets.x= player.x
    bullets.y = player.y
    bullets.forEach(moveBullet)
  }
}

addKeybordMovement(app)
