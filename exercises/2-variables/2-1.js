"use strict";

const canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight
const context = canvas.getContext("2d");


let weight= context.canvas.width;
let height= context.canvas.height;

let margin= 200;
let spacing=200;

drawline();    

    function drawline();{
        context.beginPath();

        context.lineWidth=2;

        //start
        context.moveTo(margin, spacing);
        context.lineTo(width, margin, spacing);
        context.lineTo(margin, spacing+2);
        context.lineTo(width, margin, spacing+2);

        context.closePath();

        context.stroke();

}

