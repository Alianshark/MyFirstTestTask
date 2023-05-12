import * as PIXI from './lib/pixi.mjs'

export function createBullet() {
  const ract = new PIXI.Graphics()
  ract.beginFill('red')
  ract.drawRect(100, 200, 40, 80)
  ract.endFill()

  const circle = new PIXI.Graphics()
  circle.beginFill(0xffffff)
  circle.drawCircle(120, 200, 20)
  circle.endFill()

  const bullet = new PIXI.Container()
  bullet.addChild(circle)
  bullet.addChild(ract)
  return bullet
}

let isRocketLaunched = false
export let bullets = []

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
