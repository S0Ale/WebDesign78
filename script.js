document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let initialMouseX, initialMouseY;
    let initialContainerX = 0;
    let initialContainerY = 0;
    let gridItems;

    const gridContainer = document.querySelector('.grid-container');

    gridContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        initialContainerX = gridContainer.scrollLeft;
        initialContainerY = gridContainer.scrollTop;
        gridContainer.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const deltaX = e.clientX - initialMouseX;
            const deltaY = e.clientY - initialMouseY;
            gridItems.forEach(item => {
                const itemX = parseInt(item.style.left || item.dataset.startX) + deltaX;
                const itemY = parseInt(item.style.top || item.dataset.startY) + deltaY;
                item.style.left = `${itemX}px`;
                item.style.top = `${itemY}px`;
            });
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
        }
    });

    document.addEventListener('mouseup', function(e) {
        if (isDragging) {
            isDragging = false;
            gridContainer.style.cursor = 'grab';
        }
    });

    // Select all grid items
    gridItems = document.querySelectorAll('.grid-item');

    // Store initial position for each grid item
    gridItems.forEach(item => {
        item.dataset.startX = item.offsetLeft;
        item.dataset.startY = item.offsetTop;
    });
});
