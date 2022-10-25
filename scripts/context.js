'use strict';

/**
 * @type {CanvasRenderingContext2D}
 */




let context;

setupCanvasCantext ();

export default context;


function setupCanvasCantext() {

    let canvas= document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext ('2d');
}