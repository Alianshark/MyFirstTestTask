import * as PIXI from './lib/pixi.mjs'
import { gameScreenHeight, gameScreenWidth, padding } from './config.js';

const bulletTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})

export const bulletLeftText = new PIXI.Text(`bullets left: 10`,bulletTextStyle);
bulletLeftText.x = gameScreenWidth - bulletLeftText.width - padding
bulletLeftText.y = gameScreenHeight - bulletLeftText.height - padding