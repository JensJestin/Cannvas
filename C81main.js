var canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
color="red";


ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color= document.getElementById("color").value;
    mx = e.clientX -canvas.offsetLeft;
    my = e.clientY-canvas.offsetTop;
  circle(mx, my);
}

function circle(mx, my){
 ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mx, my, 40, 0, 2*Math.PI);
ctx.stroke();
}