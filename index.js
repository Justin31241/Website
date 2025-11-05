const canvas = document.getElementById("canvas-background"); 
const myScene = canvas.getContext('2d');

//circle parameters
const radius = 50;

//canvas center


function drawGrid(squareSize) {
  myScene.clearRect(0, 0, canvas.width, canvas.height); 
  myScene.strokeStyle = '#ccc'; 
  myScene.lineWidth = 0.009;


  for (let i = 0; i < canvas.height / squareSize; i++) {
    myScene.beginPath();
    myScene.moveTo(0, i * squareSize);
    myScene.lineTo(canvas.width, i * squareSize);
    myScene.stroke();
  }


  for (let i = 0; i < canvas.width / squareSize; i++) {
    myScene.beginPath();
    myScene.moveTo(i * squareSize, 0);
    myScene.lineTo(i * squareSize, canvas.height);
    myScene.stroke();
  }
}


function resizeAndDraw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  drawGrid(50);
}

window.addEventListener('resize', resizeAndDraw);

resizeAndDraw();

function drawCircle() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    myScene.beginPath();
    myScene.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
}

drawCircle();
myScene.fill();
