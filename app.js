import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets, ammo } from './bullet.js'
import { player } from './player.js'
import { addKeybordMovement, movePlayer } from './keybordactions.js'
import { asteroids, createNewAsteroid } from './asteroid.js'
import { bulletLeftText } from './bulletText.js'

const gameScreenWidth = 1280
const gameScreenHeight = 720
let elapsed = 0.0

const app = new PIXI.Application({
  width: gameScreenWidth,
  height: gameScreenHeight,
})

document.body.appendChild(app.view)



const gameTimeTextStyle = new PIXI.TextStyle({
  fill: ['#ffffff', '#00ff99']
})

const gameTime = new PIXI.Text(`${elapsed}`,gameTimeTextStyle);
gameTime.x = 50;
gameTime.y = 100;


for (let i=0; i < 3; i++) {  
  let asteroid = createNewAsteroid()
  asteroids.push(asteroid)
  app.stage.addChild(asteroid)  
}

app.stage.addChild(player)
app.stage.addChild(gameTime)
app.stage.addChild(bulletLeftText)
app.ticker.add(gameLoop)

if (hitTest()) {
  let asteroid = asteroids[1]
  asteroid.destroy()
}


function gameLoop(delta) {
  elapsed += delta
  
  if (elapsed >= 3600) {
    gameTime.text = 'game Over'
  } else {
    gameTime.text = Math.floor(elapsed/60) 
    movePlayer()
  }
  bulletLeftText.text = `bullets left: ${ammo.shots}`
  bullets.forEach(moveBullet)
}

function hitTest () {
  return true;
}

addKeybordMovement(app)
