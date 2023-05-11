import * as PIXI from './lib/pixi.mjs'
let framesPerSecond = 0
const app = new PIXI.Application({ width: 1280, height: 720 })
document.body.appendChild(app.view)

let sprite = PIXI.Sprite.from('./img/rocket.png')
app.stage.addChild(sprite)

let elapsed = 0.0
app.ticker.add((delta) => {
  elapsed += delta
})
