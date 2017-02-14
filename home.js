var c = document.getElementById("slate");
var btn = document.getElementById("clear");
var ctx = c.getContext("2d");


ctx.beginPath();
ctx.moveTo(0, 0);


var draw = function(e){
var x = e.offsetX, y = e.offsetY;


ctx.fillStyle = "#ff0000";
ctx.fillRect(x, y, 10, 10);
ctx.lineTo(x, y);
ctx.stroke();
}

var pt = function(e){
    var x = e.offsetX, y = e.offsetY;
    return [x, y];
}

var clearB = function(e){
    ctx.clearRect(0,0,c.width,c.height);
}

c.addEventListener("click", draw);
btn.addEventListener("click", clearB);
c.addEventListener("click", 
