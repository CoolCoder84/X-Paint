if(screen.width<992){
    var lastX,lastY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;

if(width<992){

    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

color="#00e5ff";
wIdth=5;
canvas.addEventListener("touchstart",my_Touchstart);
function my_Touchstart(e){
console.log("my_Touchstart")
color=document.getElementById("color").value;
wIdth=document.getElementById("wIdth").value;

lastX=e.touches[0].clientX-canvas.offsetLeft;
lastY=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove",my_touchMove)
function my_touchMove(e){
    current_X=e.touches[0].clientX-canvas.offsetLeft;
    current_Y=e.touches[0].clientY-canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wIdth;

        console.log("Last position of X & Y cordinates");
        console.log("X= "+lastX+"   Y= "+lastY);
        ctx.moveTo(lastX,lastY);

        console.log("Curent position of X & Y cordinates");
        console.log("X= "+current_X+"   Y= "+current_Y);
        ctx.lineTo(current_X,current_Y);
        ctx.stroke();

    lastX=current_X;
    lastY=current_Y;
}
}
if(screen.width>992){
    var mouseEvent="empty";
var lastX,lastY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="#00e5ff";
wIdth=5;
canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
color=document.getElementById("color").value;
wIdth=document.getElementById("wIdth").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseUP);
function my_mouseUP(e){
    mouseEvent="mouseUP";
}

canvas,addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mouseMove)
function my_mouseMove(e){
    current_X=e.clientX-canvas.offsetLeft;
    current_Y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wIdth;

        console.log("Last position of X & Y cordinates");
        console.log("X= "+lastX+"   Y= "+lastY);
        ctx.moveTo(lastX,lastY);

        console.log("Curent position of X & Y cordinates");
        console.log("X= "+current_X+"   Y= "+current_Y);
        ctx.lineTo(current_X,current_Y);
        ctx.stroke();
    }
    lastX=current_X;
    lastY=current_Y;
}
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log("Cleared Canvas");
}
