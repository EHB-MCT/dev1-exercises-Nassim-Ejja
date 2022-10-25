"use strict";

const canvas = document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight
const context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

/*
let size = 400;
let positionX = 100
let positionY = 100
function randomcolor();
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
console.log(r, g, b);
let color = "rgb(" + r + "," + g + "," + b + ")";  
*/

drawRect(100,100);
drawRect(150,150);
drawRect(200,200);

    function drawRect(pos,size){;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    let color = "rgb(" + r + "," + g + "," + b + ")";  
        context.fillStyle = color();
        context.fillRect(pos,pos,size,size)

    }