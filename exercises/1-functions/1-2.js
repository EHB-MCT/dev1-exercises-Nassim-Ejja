"use strict";

 
let canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight
const context = canvas.getContext("2d");

drawline();

function drawline() {
    context.lineWidth='5';
    context.strokeStyle ='red';

    context.beginPath();
    context.moveTo(50,50)
    context.lineTo(200,200)
    context.stroke()

    context.beginPath();
    context.moveTo(200,50)
    context.lineTo(50,200)
    context.stroke()


}
context.strokeStyle='black';

    context.beginPath();
    context.moveTo(50,50)
    context.lineTo(200,50)
    context.lineTo(200,200)
    context.lineTo(50,200)
    context.lineTo(50,50)

    context.stroke()
