import * as PIXI from './lib/pixi.mjs'

const gameTimeTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})
  
export const gameTimeText = new PIXI.Text(` `,gameTimeTextStyle);
gameTimeText.x = 50;
gameTimeText.y = 100;
  