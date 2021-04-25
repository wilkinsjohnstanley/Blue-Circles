const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
//handles stretching 
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
});


const mouse = {
    x: null,
    y: null,
}
canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})
//kept in memory, until called
function drawCircle(){
    ctx.fillStyle = 'blue';
    ctx.beginPath();
//first two are coordinates, making the coordinate values
//the click listener values, means we'll get a new circle at the location of the click
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}
drawCircle();