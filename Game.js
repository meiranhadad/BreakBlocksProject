var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

/*function draw() {
    // drawing code
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false); //ctx.arc(x_position, y_position, radius)
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}*/

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false); //ctx.arc(x_position, y_position, radius)
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 30);