import * as PIXI from './lib/pixi.mjs'

const bulletTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})

export const bulletText = new PIXI.Text(``,bulletTextStyle);
bulletText.x = 150;
bulletText.y = 200;