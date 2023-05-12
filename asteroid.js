import * as PIXI from './lib/pixi.mjs'

export let asteroids = []

export function createNewAsteroid () {  
  let asteroid = PIXI.Sprite.from('./img/metteor.png')
  asteroid.width = 100
  asteroid.height = 100
  asteroid.x = Math.random() * 1180
  asteroid.y = Math.random() * 420
  return asteroid
}
