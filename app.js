import * as PIXI from './lib/pixi.mjs'
import { moveBullet, bullets, ammo } from './bullet.js'
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

const bulletTextStyle = new PIXI.TextStyle({
  fill: ['#ffffff', '#00ff99']
})
const bulletText = new PIXI.Text(``,bulletTextStyle);
bulletText.x = 150;
bulletText.y = 200;
  
const style = new PIXI.TextStyle({
  fill: ['#ffffff', '#00ff99']
})

const gameTime = new PIXI.Text(`${elapsed}`,style);
gameTime.x = 50;
gameTime.y = 100;


for (let i=0; i < 3; i++) {  
  let asteroid = createNewAsteroid()
  asteroids.push(asteroid)
  app.stage.addChild(asteroid)  
}

app.stage.addChild(player)
app.stage.addChild(gameTime)
app.stage.addChild(bulletText)
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
  bulletText.text = `bullets left: ${ammo.shots}`

  if (movePlayer) {
    bullets.forEach(moveBullet)
  }
}

function hitTest () {
  return true;
}

addKeybordMovement(app)
