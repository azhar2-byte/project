// Boblox - Main JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // ===== BLOCK WORLD FUNCTIONALITY =====
    const blockGrid = document.getElementById('blockGrid');
    if (blockGrid) {
        const colors = [
            'color-red', 'color-blue', 'color-green', 'color-yellow',
            'color-purple', 'color-orange', 'color-cyan', 'color-pink'
        ];
        let selectedColor = 'color-red';
        const totalBlocks = 64;

        // Generate initial grid
        function generateGrid() {
            blockGrid.innerHTML = '';
            for (let i = 0; i < totalBlocks; i++) {
                const block = document.createElement('div');
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                block.className = `block ${randomColor}`;
                block.dataset.originalColor = randomColor;
                block.addEventListener('click', function () {
                    // Remove all color classes
                    colors.forEach(c => this.classList.remove(c));
                    // Add selected color
                    this.classList.add(selectedColor);
                });
                blockGrid.appendChild(block);
            }
        }

        generateGrid();

        // Color palette selection
        const paletteColors = document.querySelectorAll('.palette-color');
        paletteColors.forEach(pc => {
            pc.addEventListener('click', function () {
                paletteColors.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                selectedColor = this.dataset.color;
            });
        });

        // Reset button
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

        // Randomize button
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
    }

    // ===== CHARACTER SELECTION =====
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('click', function () {
            // Remove selected state from all
            characterCards.forEach(c => c.style.borderColor = 'transparent');
            // Add selected state
            this.style.borderColor = '#4A90D9';
            this.style.background = 'linear-gradient(135deg, rgba(74,144,217,0.05), rgba(189,16,224,0.05))';

            // Show selection feedback
            const name = this.querySelector('h3').textContent;
            const badge = this.querySelector('.select-badge');
            if (badge) {
                badge.textContent = '✓ Selected!';
                badge.style.opacity = '1';
                badge.style.background = 'linear-gradient(135deg, #7ED321, #5CB818)';
            }

            // Reset other badges
            characterCards.forEach(c => {
                if (c !== this) {
                    c.style.background = '';
                    const otherBadge = c.querySelector('.select-badge');
                    if (otherBadge) {
                        otherBadge.textContent = '✓ Select';
                        otherBadge.style.opacity = '';
                        otherBadge.style.background = '';
                    }
                }
            });
        });
    });
});