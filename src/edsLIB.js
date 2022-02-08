/* global document */
// takenfrom my own project1 from 330 https://people.rit.edu/eds7847/330/Project1-Falling-Sand/
// fill random array before load so can use psuedo randomint

import * as starCode from './starcode';
const randoms = new Float32Array(1000).fill(0);
for (let z = 0; z < 1000; z++) {
  randoms[z] = Math.random();
}

function drawRectangle(ctx, x, y, width, height, fillStyle = 'black', lineWidth = 0, strokeStyle = 'black') {
  ctx.fillStyle = fillStyle;
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.closePath();
  ctx.fill();
  if (lineWidth > 0) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
  }
  ctx.restore();
}

function drawCircle(ctx, x, y, radius, fillStyle = 'black', lineWidth = 0, strokeStyle = 'black') {
  ctx.fillStyle = fillStyle;
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
  if (lineWidth > 0) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
  }
  ctx.restore();
}

function drawLine(ctx, x1, y1, x2, y2, lineWidth = 1, strokeStyle = 'black') {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.closePath();
  if (lineWidth <= 0) {
    ctx.lineWidth = 1;
  } else { ctx.lineWidth = lineWidth; }
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
  ctx.restore();
}

function draw(ctx,width,height) {
  starCode.drawStars(ctx,width,height);
}

function cls(ctx, width, height) { // clear screen
  ctx.clearRect(0, 0, width, height);
  drawRectangle(ctx, 0, 0, width, height);
}

// psuedo random got a bunch of randoms before window loaded and iterates through
// not used here but useful as a library tool
let posRand = 0;
function getRandomInt(min, max) {
  if (posRand >= 1000) { //generate new randoms if gone beyond bounds
    randoms = new Float32Array(1000).fill(0);
    for (let z = 0; z < 1000; z++) {
      randoms[z] = Math.random();
    } 
  }
  const temp = Math.floor(randoms[posRand] * (max - min + 1)) + min;
  posRand++;
  return temp;
}

function getRandomColor() {
  return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
}

// other useful functions not used for this project////////////////////////////////////////////
const minRectWidth = 0;
const maxRectWidth = 0;
const minStrokeWidth = 1;
const maxStrokeWidth = 1;
function drawRandomRect(ctx, canvasWidth, canvasHeight) {
  drawRectangle(ctx, getRandomInt(0, canvasWidth), getRandomInt(0, canvasHeight),
    getRandomInt(minRectWidth, maxRectWidth), getRandomInt(minRectWidth, maxRectWidth),
    getRandomColor(), getRandomInt(minStrokeWidth, maxStrokeWidth), getRandomColor());
}

function drawRandomCircle(ctx, canvasWidth, canvasHeight) {
  drawCircle(ctx, getRandomInt(0, canvasWidth), getRandomInt(0, canvasHeight),
    getRandomInt(20, 300), getRandomColor(), getRandomInt(minStrokeWidth, maxStrokeWidth),
    getRandomColor());
}

function drawRandomLine(ctx, canvasWidth, canvasHeight) {
  drawLine(ctx, getRandomInt(0, canvasWidth), getRandomInt(0, canvasHeight),
    getRandomInt(0, canvasWidth), getRandomInt(0, canvasHeight),
    getRandomInt(minStrokeWidth, maxStrokeWidth), getRandomColor());
}

function GetRandomIntegerArr() {
  return randoms;
}

export {
  // getters that will always be in libarary file and other stuff
  getRandomInt, GetRandomIntegerArr, cls, draw, drawRandomRect, drawRandomCircle,
  drawRandomLine, drawLine, drawCircle, drawRectangle
};
