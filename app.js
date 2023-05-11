import * as PIXI from './lib/pixi.mjs'
import { createBullet } from './bullet.js'

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

  if (isArrowLeftPressed && player.x > 0) {
    player.x -= 10
  }
  if (isArrowRightPressed && player.x < 1280 - player.width) {
    player.x += 10
  }
  bullets.forEach(moveBullet)
}

addKeybordMovement()

function addKeybordMovement() {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}

let isArrowRightPressed = false
let isArrowLeftPressed = false
let isRocketLaunched = false
let bullets = []
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
  //console.log('text', bullets)
  isRocketLaunched = true
  const newBullet = createBullet()
  app.stage.addChild(newBullet)
  bullets.push(newBullet)
  console.log('text', bullets)
}

function moveBullet(bullet) {
  bullet.y -= 10
}
