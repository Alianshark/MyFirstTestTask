import { fireBullet } from './bullet.js'
import { player } from './player.js'

let isArrowRightPressed = false
let isArrowLeftPressed = false

export function addKeybordMovement(app) {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
  function handleKeyDown(event) {
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
}

export function movePlayer() {
  if (isArrowLeftPressed && player.x > 0) {
    player.x -= 10
  }
  if (isArrowRightPressed && player.x < 1280 - player.width) {
    player.x += 10
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



