const canvas = document.getElementById("canvas-background"); 
const myScene = canvas.getContext('2d');

const radius = 20;



canvas.addEventListener('mousemove', function(event){
    isMouseMoving = true;

    while (isMouseMoving == true) {
        resizeAndDraw()
        isMouseMoving = false
    }
})




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
    
  myScene.clearRect(0, 0, canvas.width, canvas.height);

  drawGrid(10);

  drawCircle(x, y);
}

window.addEventListener('resize', resizeAndDraw);

resizeAndDraw();

function drawCircle() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  myScene.beginPath();
  myScene.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  myScene.fillStyle = 'rgba(0,0,0,0.3)';

  myScene.fill();
}
