"use strict";

const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

context.beginPath(); //begin met tekenen
context.moveTo(30,10)
context.lineTo(30,60);

context.moveTo(30,10);
context.lineTo(60,60);

context.moveTo(60,10);
context.lineTo(60,60);
context.stroke();

context.beginPath();
context.moveTo(90,10);
context.lineTo(70,60);

context.moveTo(90,10);
context.lineTo(110,60);

context.moveTo(80,35);
context.lineTo(100,35);
context.stroke();

context.beginPath();
context.moveTo(135,10);
context.lineTo(155,25);

context.moveTo(135,10);
context.lineTo(115,25);

context.moveTo(115,25);
context.lineTo(155,45);

context.moveTo(155,45);
context.lineTo(135,60);

context.moveTo(115,45);
context.lineTo(135,60);
context.stroke();

context.beginPath();
context.moveTo(180,10);
context.lineTo(200,25);

context.moveTo(180,10);
context.lineTo(160,25);

context.moveTo(160,25);
context.lineTo(200,45);

context.moveTo(200,45);
context.lineTo(180,60);

context.moveTo(180,60);
context.lineTo(160,45);
context.stroke();

context.beginPath();
context.moveTo(240,15);
context.lineTo(210,15);

context.moveTo(225,15);
context.lineTo(225,55);

context.moveTo(240,55);
context.lineTo(210,55);
context.stroke();

context.beginPath()
context.moveTo(255,10);
context.lineTo(255,60);

context.moveTo(255,10);
context.lineTo(270,20);

context.moveTo(285,10);
context.lineTo(270,20);

context.moveTo(285,10);
context.lineTo(285,60);
context.stroke()