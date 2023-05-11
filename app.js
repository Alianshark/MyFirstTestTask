import * as PIXI from './lib/pixi.mjs'
let framesPerSecond = 0
const app = new PIXI.Application({ width: 1280, height: 720 })
document.body.appendChild(app.view)

let sprite = PIXI.Sprite.from('./img/rocket.png')
app.stage.addChild(sprite)

let elapsed = 0.0
app.ticker.add(gameLoop)

function gameLoop(delta) {
  elapsed += delta
  if (isArrowLeftPressed) {
    sprite.x -= 10
  }
  if (isArrowRightPressed) {
    sprite.x += 10
  }
}

addKeybordMovement()

let isArrowLeftPressed = false
let isArrowRightPressed = false

function addKeybordMovement() {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}

function handleKeyDown(event) {
  if (event.key == 'ArrowLeft') {
    isArrowLeftPressed = true
    console.log('ArrowLeft pressed', event.key)
  }
  if (event.key == 'ArrowRight') {
    isArrowRightPressed = true

    console.log('ArrowRignt Pressed', event.key)
  }
}

function handleKeyUp(event) {
  if (event.key == 'ArrowLeft') {
    isArrowLeftPressed = false
  }
  if (event.key == 'ArrowRight') {
    isArrowRightPressed = false
  }
}
