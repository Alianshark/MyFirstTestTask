import * as PIXI from './lib/pixi.mjs'
import { gameScreenWidth } from './config.js';

const gameTimeTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})
  
export const gameTimeText = new PIXI.Text(` `,gameTimeTextStyle);
gameTimeText.x = gameScreenWidth;
gameTimeText.y = 0;
  