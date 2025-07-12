let container = document.querySelector(".circle-container");
let balls = document.querySelectorAll(".balls");

const centerX = 50;
const centerY = 50;
const radius = 42;
const totalBalls = balls.length;
let rotation = 0; // initial rotation angle

function animateCircle() {
    rotation += 0.02; // speed of rotation
    balls.forEach((ball, i) => {
        let angle = (2 * Math.PI * i) / totalBalls + rotation;
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
    });
    requestAnimationFrame(animateCircle);
}

animateCircle();