import * as PIXI from './lib/pixi.mjs'
import { gameScreenWidth, gameScreenHeight} from './config.js'

const endGameTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})

export const endGameText = new PIXI.Text(`You Loose`,endGameTextStyle);
endGameText.x = gameScreenWidth / 2 - endGameText.width / 2
endGameText.y = gameScreenHeight / 2 - endGameText.height / 2 