var canvasWidth = 500;
var canvasHeight = 500;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var radius = 50;
var clippingRegion={
	x:-1,
	y:-1,
	r:50
};
image.src = "img/1.jpg";
image.onload = function(e){
	
	initCanvas();
}
function initCanvas(){
	clippingRegion={
		x:Math.random()* (canvas.width - radius*2) + radius,
		y:Math.random()* (canvas.height - radius*2) + radius,
		r:50
	};
	draw(image,clippingRegion);
}

function setClippingRegion(){
	context.beginPath();
	context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI * 2);
	context.clip();
}

function draw(image,clippingRegion){
	context.clearRect(0,0,canvas.width,canvas.height);
	
	context.save();
	setClippingRegion(clippingRegion)
	context.drawImage(image,0,0,canvas.width,canvas.height);
	context.restore();
}

function show(){
var timer = setInterval(
		function(){
			clippingRegion.r += 20;
			if(clippingRegion.r >2*Math.max(canvas.width,canvas.height)){
				clearInterval(timer)
			}
			draw(image,clippingRegion);
		},
		30
	)
}


function reset(){
	initCanvas();
}

