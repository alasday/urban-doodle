var c = document.getElementById("slate");
var btn = document.getElementById("clear");
var ctx = c.getContext("2d");

var j = true;
ctx.beginPath();

//requestID = window.requestAnimationFrame(drawDot);
//window.cancelAnimationFrame(requestID);

var draw = function(e){
    var x = e.offsetX, y = e.offsetY;

    if (j){
	ctx.moveTo(x,y);
	j = false;
    }

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
    ctx.closePath();
    j = true;
    //    c.beginPath();
}

c.addEventListener("click", draw);
btn.addEventListener("click", clearB);

