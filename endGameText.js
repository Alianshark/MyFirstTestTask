import * as PIXI from './lib/pixi.mjs'
import { gameScreenWidth, gameScreenHeight} from './config.js'

const endGameTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})

export const youLooseText = new PIXI.Text(`You Loose`,endGameTextStyle);
youLooseText.x = gameScreenWidth / 2 - youLooseText.width / 2
youLooseText.y = gameScreenHeight / 2 - youLooseText.height / 2 

export const youWinText = new PIXI.Text(`You Win`,endGameTextStyle);
youWinText.x = gameScreenWidth / 2 - youWinText.width / 2
youWinText.y = gameScreenHeight / 2 - youWinText.height / 2 