var x = 10;
var y = 10;
var vx = 5;
var vy = 5;
var rect_w = 50;
var rect_h = 50;
var blank_screen = "rgb(255, 255, 255)"


var ctx

function draw () {
	var canvas = document.getElementById('gc');  
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		
		ctx.borderStyle = "rgb(0, 0, 0)";
		ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
		
		// ctx.fillStyle = "rgb(200, 0, 0)";
		// ctx.fillRect(10, 10, 50, 50);
		// 
		// ctx.fillStyle = "rgba(0, 200, 0, 0.5)";
		// ctx.fillRect(30, 30, 50, 50);
		setInterval('draw_rect()', 50);
		
	} else {
		alert("Context not supported!")
	}
}

function draw_rect () {
	blank();
	if(x + rect_w > ctx.canvas.width) { vx *= -1}
	if(y + rect_h > ctx.canvas.height) { vy *= -1}
	if(x < 0) { vx *= -1}
	if(y < 0) { vy *= -1}
	
	
	x += vx
	y += vy
	ctx.fillStyle = "rgba(0, 200, 0, 0.5)";
	ctx.fillRect(x, y, rect_w, rect_h);
}

function blank () {
	ctx.fillStyle = blank_screen
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}