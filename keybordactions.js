import { fireBullet } from './bullet.js'

export function addKeybordMovement() {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
}
  
export let isArrowRightPressed = false
export let isArrowLeftPressed = false
    
function handleKeyUp(event) {
    if (event.key == 'ArrowLeft') {
      isArrowLeftPressed = false
    }
    if (event.key == 'ArrowRight') {
      isArrowRightPressed = false
    }
}

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

