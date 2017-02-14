var c = document.getElementById("slate");
var btn = document.getElementById("clear");
var ctx = c.getContext("2d");

ctx.fillStyle = "ff0000";
ctx.fillRect(50,50,100,200);

var draw = function(e){
var x = e.offsetX, y = e.offsetY;
ctx.fillStyle = "#ff0000";
ctx.fillRect(x + .1, y + .1, x, y);
}

var clearB = function(e){
    ctx.clearRect(0,0,c.width,c.height);
}

c.addEventListener("click", draw);
btn.addEventListener("click", clearB);

