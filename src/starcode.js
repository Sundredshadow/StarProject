import { drawRectangle, getRandomInt } from "./edsLIB";

let starCount= 100;

let starSize=1;

function drawStars(ctx,width,height){
    for(let a=0; a<starCount; a++){
        drawRectangle(ctx,getRandomInt(0,width-starSize),getRandomInt(0,height-starSize),starSize,starSize);
    }
}

function compareData(ctx,width,height){
    ctx.getImageData(0,0,width,height);
}

export{drawStars ,compareData};