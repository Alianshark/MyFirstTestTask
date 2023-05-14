import * as PIXI from './lib/pixi.mjs'

const gameTimeTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})
  
export const gameTimeText = new PIXI.Text(` `,gameTimeTextStyle);
gameTimeText.x = 1240;
gameTimeText.y = 0;
  