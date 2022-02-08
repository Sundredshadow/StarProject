import * as edsLIB from './edsLIB';

let canvas;
let ctx;
const width = 640;// canvas height and width
const height = 480;


let basetime = Date.now();
const fpsCap = 1000 / 60;// denominator is fps

let play = true;

//update/////////////////////////////////////////////////////////
function update() {
    const now = Date.now();
    const check = now - basetime;
    if (check / fpsCap >= 1) {
      basetime = now;
      if (play) {
        edsLIB.cls(ctx, width, height);
        physics.physics();
        edsLIB.draw(ctx, cols, width, height);
      }
    }
    window.requestAnimationFrame(update);
  }

// intialize/////////////////////////////////////////////////////////////////////////////
const init = () => {
    // #2 Now that the page has loaded, start drawing!
    console.log('init called');
  
    // A - canvas variable points at <canvas> tag
    canvas = document.querySelector('canvas');
    canvas.height = height;
    canvas.width = width;
    // B - the ctx variable points at a "2D drawing context"
    ctx = canvas.getContext('2d');
  
    // event listeners
    canvas.addEventListener('click', mouseClick, false);
    canvas.addEventListener('mouseleave', mouseClick, false);
    canvas.addEventListener('mousemove', mouseMove, false);
  
    edsLIB.cls(ctx, width, height);

    update(ctx);
};



export { init as default };