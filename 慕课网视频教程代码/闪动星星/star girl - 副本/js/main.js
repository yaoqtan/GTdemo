var can;
var ctx;
var girlPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];

var lastTime;
var deltaTime;

var switchy = false;  

var life = 0;

function init(){
	can = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	w = can.width;
	h = can.height;

	document.addEventListener("mousemove",mousemove,false);

	girlPic.src = "src/girl.jpg";
	starPic.src = "src/star.png"

	for(var i = 0;i<num;i++){
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}

	lastTime = Date.now();
	/*console.log(w);*/
	gameloop()
}
document.body.onload = init;

function gameloop(){
	window.requestAnimFrame(gameloop);

	var now = Date.now();
	deltaTime=now - lastTime;

	lastTime = now;

	/*console.log(deltaTime);*/

	drawBackground();
	drawGirl();
	drawStars()

	aliveUpdate();
}
function drawBackground(){
	ctx.fillStyle = "#393550";
	ctx.fillRect(0,0,w,h);
}

function drawGirl(){
	//drawImage(img,x,y)
	ctx.drawImage(girlPic,100,150,600,300);
}


function mousemove(e){
	if(e.offsetX || e.layerX){
		var px = e.offsetX == undefined ? e.layerX:e.offsetX;
		var py = e.offsetY == undefined ? e.layerY:e.offsetY;

		/*console.log(px)*/

		//px在范围内&&py在范围内
		if(px >100 && px<700&&py>150 && py <450){
			switchy = true;
			
		}else{
			switchy = false;
			
		}
	}
}
















