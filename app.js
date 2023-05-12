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
let elapsed = 0.0

const text = new PIXI.Text(`${elapsed}`);
PIXI.Text.defaultResolution = 2;
PIXI.Text.defaultAutoResolution = false;
// text has a resolution of 2
for (let i=0; i < 7; i++) {  
  let asteroid = createNewAsteroid()
  asteroids.push(asteroid)
  app.stage.addChild(asteroid)
}

app.stage.addChild(player)
app.stage.addChild(text)

app.ticker.add(gameLoop)

function gameLoop(delta) {
  if (elapsed < 600) {
   elapsed += delta
  console.log('times tarts', elapsed)
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
