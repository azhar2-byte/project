document.addEventListener('DOMContentLoaded', function () {
    const blockGrid = document.getElementById('blockGrid');
    if (!blockGrid) return;

    const colors = [
        'color-red', 'color-blue', 'color-green', 'color-yellow',
        'color-purple', 'color-orange', 'color-cyan', 'color-pink'
    ];
    let selectedColor = 'color-red';
    const totalBlocks = 64;

    function generateGrid() {
        blockGrid.innerHTML = '';
        for (let i = 0; i < totalBlocks; i++) {
            const block = document.createElement('div');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            block.className = `block ${randomColor}`;
            block.dataset.originalColor = randomColor;

            block.addEventListener('click', function () {
                colors.forEach(c => this.classList.remove(c));
                this.classList.add(selectedColor);
            });

            blockGrid.appendChild(block);
        }
    }

    generateGrid();

    const paletteColors = document.querySelectorAll('.palette-color');
    paletteColors.forEach(pc => {
        pc.addEventListener('click', function () {
            paletteColors.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            selectedColor = this.dataset.color;
        });
    });

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            const blocks = blockGrid.querySelectorAll('.block');
            blocks.forEach(block => {
                colors.forEach(c => block.classList.remove(c));
                block.classList.add(block.dataset.originalColor);
            });
        });
    }

    const randomBtn = document.getElementById('randomBtn');
    if (randomBtn) {
        randomBtn.addEventListener('click', function () {
            const blocks = blockGrid.querySelectorAll('.block');
            blocks.forEach(block => {
                colors.forEach(c => block.classList.remove(c));
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                block.classList.add(randomColor);
                block.dataset.originalColor = randomColor;
            });
        });
    }
});
