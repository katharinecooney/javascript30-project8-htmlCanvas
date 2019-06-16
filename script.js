const canvas = document.querySelector('#draw');

// we cannot draw directly on the canvas; we draw on the context, which can be 2d or 3d

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

draw = (event) => {
  if (!isDrawing) return;
  console.log(event);
  // begin a path
  ctx.beginPath();
  // specify the path; it must start at an initial (x,y) and end at a final (x,y)
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  // draw the line
  ctx.stroke();
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);