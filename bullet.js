import * as PIXI from './lib/pixi.mjs'
import { player } from './player.js'

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

export let bullets = []
let isRocketLaunched = false

export function moveBullet(bullet) {
  bullet.y -= 10
  console.log('text')
}

export function fireBullet(app) {
  isRocketLaunched = true
  const newBullet = createBullet(player.x,player.y)
  app.stage.addChild(newBullet)
  bullets.push(newBullet)
}
