import * as PIXI from './lib/pixi.mjs'
import { isArrowLeftPressed,isArrowRightPressed } from './keybordactions.js'

export let player = PIXI.Sprite.from('./img/rocket.png')
player.y = 540
player.x = 640

export function movePlayer() {
    if (isArrowLeftPressed && player.x > 0) {
      player.x -= 10
    }
    if (isArrowRightPressed && player.x < 1280 - player.width) {
      player.x += 10
    }
}