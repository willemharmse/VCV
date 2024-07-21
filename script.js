document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add('active');
        } else {
            menuItem[i].classList.remove('active');
        }
    }

    // Add hover effect for nav items
    menuItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Existing code for menu items
    
    initPlasmaBackground();
});

function initPlasmaBackground() {
    const canvas = document.getElementById('plasma-bg');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    function drawPlasma() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const w = canvas.width;
        const h = canvas.height;
        
        const imgData = ctx.createImageData(w, h);
        const data = imgData.data;
        
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const idx = (x + y * w) * 4;
                
                // Base color: dark blue
                let r = 20;
                let g = 100;
                let b = 150;
                
                // Add some variation
                r += Math.sin(x * 0.01 + time) * 20;
                g += Math.sin(y * 0.01 + time) * 20;
                b += Math.sin((x + y) * 0.01 + time) * 40;
                
                // Ensure colors stay within 0-255 range
                data[idx] = Math.max(0, Math.min(255, r));
                data[idx + 1] = Math.max(0, Math.min(255, g));
                data[idx + 2] = Math.max(0, Math.min(255, b));
                data[idx + 3] = 255; // Alpha
            }
        }
    
        ctx.putImageData(imgData, 0, 0);
        time += 0.1;
        
        requestAnimationFrame(drawPlasma);
    }

    drawPlasma();
}



const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})