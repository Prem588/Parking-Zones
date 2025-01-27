const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 60; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    
    const boxNumber = 101 + i;
    box.textContent = boxNumber;

    
    const isFilled = Math.random() < 0.5; 
    if (isFilled) {
        box.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; 
    }

    gridContainer.appendChild(box);
}
