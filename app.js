import * as PIXI from './lib/pixi.mjs'
import { bullet } from './bullet.js'

const gameScreenWidth = 1280
const gameScreenHeight = 720

const app = new PIXI.Application({
  width: gameScreenWidth,
  height: gameScreenHeight,
})
document.body.appendChild(app.view)

let player = PIXI.Sprite.from('./img/rocket.png')
let asteroid = PIXI.Sprite.from('./img/drone2.png')
app.stage.addChild(player)
app.stage.addChild(asteroid)
app.stage.addChild(bullet)

let elapsed = 0.0
app.ticker.add(gameLoop)

function gameLoop(delta) {
  elapsed += delta

  if (isArrowLeftPressed && player.x > 0) {
    player.x -= 10
  }
  if (isArrowRightPressed && player.x < 1280 - player.width) {
    player.x += 10
  }
  if (isRocketLaunched) {
    bullet.y -= 10
  }
}

addKeybordMovement()

function addKeybordMovement() {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}

let isArrowRightPressed = false
let isArrowLeftPressed = false
let isRocketLaunched = false

export function handleKeyDown(event) {
  console.log('Pressed:')
  if (event.key == 'ArrowLeft') {
    isArrowLeftPressed = true
  }
  if (event.key == 'ArrowRight') {
    isArrowRightPressed = true
  }
  if (event.key == ' ') {
    fireBullet()
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

function fireBullet() {
  isRocketLaunched = true
}
