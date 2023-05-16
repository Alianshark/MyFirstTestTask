import * as PIXI from './lib/pixi.mjs'
import { player } from './player.js'
import { endGameText } from './endGameText.js'
import { gameScreenHeight } from './config.js'

export let bullets = []
export let ammo = {
  shots: 10
}

function createBullet(x,y) {
  const ract = new PIXI.Graphics()
  ract.beginFill('yellow')
  ract.drawRect(0, 0, 20, 40)
  ract.endFill()

  const circle = new PIXI.Graphics()
  circle.beginFill(0xffffff)
  circle.drawCircle(10, 0, 10)
  circle.endFill()

  const bullet = new PIXI.Container()
  bullet.addChild(circle)
  bullet.addChild(ract)
  bullet.x = x + player.width/2 - bullet.width/2
  bullet.y = y
  return bullet
}

export function moveBullet(app, bullet) {
  bullet.y -= 10
  if (bullet.y < 0) {
    bullets = bullets.filter(function(item) {
      if( item == bullet ) {
        return false
      } else {
        return true
      }
    })
    app.stage.removeChild(bullet)
    bullet.destroy()
    console.log('bullet out')
  }
}

export function fireBullet(app) {
  if (bullets.length <= 10) {
    const newBullet = createBullet(player.x,player.y)
    bullets.push(newBullet)
    app.stage.addChild(newBullet)
  }
  
  console.log('Are you working or not', bullets.length)
  if (bullets.length > 10) {
    console.log('Are you working or not')
    app.stage.addChild(endGameText)
  }


  /*
  */
}

