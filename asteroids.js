import * as PIXI from './lib/pixi.mjs'

function createNewAsteroid () {
  let asteroid = PIXI.Sprite.from('./img/drone2.png')
  asteroid.x = Math.random() * 1280
  asteroid.y = Math.random() * 420
  return asteroid
}

export let asteroids = [];
function newAsteroidCreated () {
    const newAsteroid = createNewAsteroid()
    app.stage.addChild(newAsteroid)
    asteroids.push(newAsteroid)
}