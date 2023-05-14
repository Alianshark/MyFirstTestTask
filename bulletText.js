import * as PIXI from './lib/pixi.mjs'

const bulletTextStyle = new PIXI.TextStyle({
    fill: ['#ffffff', '#00ff99']
})

export const bulletLeftText = new PIXI.Text(``,bulletTextStyle);
bulletLeftText.x = 10;
bulletLeftText.y = 680;