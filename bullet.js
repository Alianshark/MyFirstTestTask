import * as PIXI from './lib/pixi.mjs'

function createBullet() {
  const ract = new PIXI.Graphics()
  ract.beginFill('yellow')
  ract.drawRect(100, 200, 20, 40)
  ract.endFill()

  const circle = new PIXI.Graphics()
  circle.beginFill(0xffffff)
  circle.drawCircle(110, 200, 10)
  circle.endFill()

  const bullet = new PIXI.Container()
  bullet.addChild(circle)
  bullet.addChild(ract)
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
  const newBullet = createBullet()
  app.stage.addChild(newBullet)
  bullets.push(newBullet)
}
