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

export function creatAsteriods (app) {
  for (let i=0; i < 10; i++) {
    let asteroid = createNewAsteroid()
    asteroids.push(asteroid)
    app.stage.addChild(asteroid)  
  }
}

export function deleteAsteroid (app, asteroid) {
  deleteAsteroidFromArray(asteroid)
  app.stage.removeChild(asteroid)
  asteroid.destroy()
}

function deleteAsteroidFromArray (asteroid) {
  asteroids = asteroids.filter(function(item) {
    if (item == asteroid) {
      return false
    } else {
      return true
    }
  })
}