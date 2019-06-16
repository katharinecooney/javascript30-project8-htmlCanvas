const canvas = document.querySelector('#draw');

// we cannot draw directly on the canvas; we draw on the context, which can be 2d or 3d

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let isDrawing = false;
let lastX;
let lastY;
let hue = 0;

draw = (event) => {
  if (!isDrawing) return;
  console.log(event);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // begin a path
  ctx.beginPath();
  // specify the path; it must start at an initial (x,y) and end at a final (x,y)
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  // draw the line
  ctx.stroke();
  // update the lastx and lastY variables 
  lastX = event.offsetX;
  lastY = event.offsetY;
  hue++;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => {
  isDrawing = true;
  // update the lastx and lastY variables 
  lastX = event.offsetX;
  lastY = event.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);