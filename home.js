var c = document.getElementById("slate");
var btn = document.getElementById("clear");
var ctx = c.getContext("2d");

ctx.fillStyle = "ff0000";
ctx.fillRect(50,50,100,200);

var draw = function(e){
var x = e.offsetX, y = e.offsetY;
ctx.fillStyle = "#ff0000";
ctx.fillRect(x, y, x + 10, y - 10);
}

var clearCanvas = function(e){
    ctx.clearRect(0,0,c.width,c.height);
}

c.addEventListener("click", draw);
c.addEventListener("click", draw);

