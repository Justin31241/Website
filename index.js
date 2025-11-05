const canvas = document.getElementById("canvas-background"); 
const myScene = canvas.getContext('2d');


let circle = {
    x: window.innerWidth / 2,  
    y: window.innerHeight / 2, 
    radius: 20
};

let mouse = {
    x: circle.x,
    y: circle.y
};

const smoothing = 0.05;


function animate() {
    let dx = mouse.x - circle.x;
    let dy = mouse.y - circle.y;
    
    circle.x += dx * smoothing;
    circle.y += dy * smoothing;

    drawScene();

    requestAnimationFrame(animate);
}


function drawScene() {
    myScene.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid(50); 

    drawCircle();
}


function drawGrid(squareSize) {
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

function drawCircle() {
    myScene.beginPath();
    myScene.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    myScene.fillStyle = 'rgba(0,0,0,0.3)';
    myScene.fill();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


window.addEventListener('mousemove', function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener('resize', resizeCanvas);


resizeCanvas();

animate();