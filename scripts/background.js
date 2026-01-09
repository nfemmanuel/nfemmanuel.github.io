// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('matrix-bg');

    // Check if canvas exists
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }

    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Matrix rain settings
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        // Fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Check theme
        const isDark = document.body.classList.contains('dark-mode');
        ctx.fillStyle = isDark ? 'rgba(93, 122, 69, 0.15)' : 'rgba(255, 253, 246, 0.03)';
        ctx.font = fontSize + 'px monospace';

        // Draw drops
        for (let i = 0; i < drops.length; i++) {
            const text = Math.random() > 0.5 ? '1' : '0';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
});