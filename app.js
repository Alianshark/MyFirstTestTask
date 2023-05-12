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

const style = new PIXI.TextStyle({
  fill: ['#ffffff', '#00ff99']
})
const basicText = new PIXI.Text(`${elapsed}`,style);
basicText.x = 50;
basicText.y = 100;


for (let i=0; i < 7; i++) {  
  let asteroid = createNewAsteroid()
  asteroids.push(asteroid)
  app.stage.addChild(asteroid)
}


app.stage.addChild(player)
app.stage.addChild(basicText)

app.ticker.add(gameLoop)

function gameLoop(delta) {
  elapsed += delta
  if (elapsed >= 3600) {
    basicText.text = 'game Over'
  } else {
    movePlayer()
    basicText.text = Math.floor(elapsed/60) 
    console.log('time Out!')
    
  }
  console.log('times tarts:', elapsed)
  console.log('delta:', delta)
  
  if (movePlayer) {
    bullets.x= player.x
    bullets.y = player.y
    bullets.forEach(moveBullet)
  }
}

addKeybordMovement(app)
