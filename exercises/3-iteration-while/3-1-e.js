"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "black";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawDiagonalGrid();
}

function drawDiagonalGrid() {
	let i = 0;
	while (i <= 7) {
		Utils.drawLine(50 + i * 20, 190 + i * 20, 200 + i * 20, 60 + i * 20);
		Utils.drawLine(220 + i * 20, 55 + i * 20, 320 + i * 20, 320 + i * 20);
		i++;
	}
}
