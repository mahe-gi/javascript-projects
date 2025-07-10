const box = document.getElementById("box");

let x = 0;
let y = 0;
const step = 20;

const boxWidth = 200;
const boxHeight = 200;

window.addEventListener("keydown", (e) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (e.key === "ArrowRight") {
        if (x + step + boxWidth <= windowWidth) x += step;
    }
    if (e.key === "ArrowLeft") {
        if (x - step >= 0) x -= step;
    }
    if (e.key === "ArrowDown") {
        if (y + step + boxHeight <= windowHeight) y += step;
    }
    if (e.key === "ArrowUp") {
        if (y - step >= 0) y -= step;
    }

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
});
