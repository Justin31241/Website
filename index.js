const canvas = document.getElementById("canvas-background"); 
const ctx = canvas.getContext('2d');

function drawGrid(squareSize) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.strokeStyle = '#ccc'; 
  ctx.lineWidth = 0.009;


  for (let i = 0; i < canvas.height / squareSize; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * squareSize);
    ctx.lineTo(canvas.width, i * squareSize);
    ctx.stroke();
  }


  for (let i = 0; i < canvas.width / squareSize; i++) {
    ctx.beginPath();
    ctx.moveTo(i * squareSize, 0);
    ctx.lineTo(i * squareSize, canvas.height);
    ctx.stroke();
  }
}


function resizeAndDraw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  drawGrid(50);
}

window.addEventListener('resize', resizeAndDraw);

resizeAndDraw();
