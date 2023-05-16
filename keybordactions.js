import { fireBullet } from './bullet.js'
import { player } from './player.js'

export function addKeybordMovement(app) {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
  function handleKeyDown(event) {
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
  }

  let isArrowRightPressed = false
  let isArrowLeftPressed = false
    
  function handleKeyUp(event) {
    if (event.key == 'ArrowLeft') {
      isArrowLeftPressed = false
    }
    if (event.key == 'ArrowRight') {
      isArrowRightPressed = false
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


