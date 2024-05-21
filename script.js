// script.js
const container = document.getElementById('draggable');

let isDown = false;
let startX, startY;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    startY = e.pageY - container.offsetTop;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    const walkX = (x - startX) * 2; // Adjust scroll speed
    const walkY = (y - startY) * 2; // Adjust scroll speed
    container.style.left = `${container.offsetLeft + walkX}px`;
    container.style.top = `${container.offsetTop + walkY}px`;
    startX = e.pageX - container.offsetLeft;
    startY = e.pageY - container.offsetTop;
});

function showCardDetail(cardName) {
    alert(`You clicked on ${cardName}`);
}
