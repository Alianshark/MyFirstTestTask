import * as PIXI from './lib/pixi.mjs'
import { moveBullet, fireBullet, bullets } from './bullet.js'

const gameScreenWidth = 1280
const gameScreenHeight = 720

const app = new PIXI.Application({
  width: gameScreenWidth,
  height: gameScreenHeight,
})
document.body.appendChild(app.view)

let player = PIXI.Sprite.from('./img/rocket.png')
player.y = 540

let asteroid = PIXI.Sprite.from('./img/drone2.png')
app.stage.addChild(player)
app.stage.addChild(asteroid)

let elapsed = 0.0
app.ticker.add(gameLoop)

function gameLoop(delta) {
  elapsed += delta
  movePlayer()
  bullets.forEach(moveBullet)
}
function movePlayer() {
  if (isArrowLeftPressed && player.x > 0) {
    player.x -= 10
  }
  if (isArrowRightPressed && player.x < 1280 - player.width) {
    player.x += 10
  }
}

addKeybordMovement()

function addKeybordMovement() {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}

let isArrowRightPressed = false
let isArrowLeftPressed = false

export function handleKeyDown(event) {
  console.log('Pressed:')
  if (event.key == 'ArrowLeft') {
    isArrowLeftPressed = true
  }
  if (event.key == 'ArrowRight') {
    isArrowRightPressed = true
  }
  if (event.key == ' ') {
    fireBullet(app)
  }
}

export function handleKeyUp(event) {
  if (event.key == 'ArrowLeft') {
    isArrowLeftPressed = false
  }
  if (event.key == 'ArrowRight') {
    isArrowRightPressed = false
  }
}
