"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawHourGlass();
}

function drawHourGlass() {
	let i = 0;
	while (i <= 50) {
		Utils.drawLine(200, 200, 50 + i * 6, 50);
		Utils.drawLine(50 + i * 6, 350, 200, 200);

		i++;
	}
}
