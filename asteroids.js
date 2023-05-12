import * as PIXI from './lib/pixi.mjs'

export let asteroid = PIXI.Sprite.from('./img/metteor.png')
asteroid.x = Math.random() * 1280
asteroid.y = Math.random() * 420
//return asteroid
function createNewAsteroid () {
}
/*
export let asteroids = [];
function newAsteroidCreated () {
    const newAsteroid = createNewAsteroid()
    app.stage.addChild(newAsteroid)
    asteroids.push(newAsteroid)
}
*/