document.getElementById('button-Con').addEventListener('click', function(event) {
    event.preventDefault(); // don't do normal button
    createLasers();
});

function createLasers() {
    const canvas = document.getElementById('laserCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lasers = [];
    const laserCount = 10;

    for (let i = 0; i < laserCount; i++) {
        lasers.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            length: Math.random() * 105 + 80,/*long bois*/
            speed: Math.random() * 10 + 4,
            alpha: 1
        });
    }

    function drawLaser(laser) {
        ctx.strokeStyle = `rgba(255, 0, 0, ${laser.alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(laser.x, laser.y);/*move locale*/
        ctx.lineTo(laser.x, laser.y - laser.length);
        ctx.stroke();
    }

    function updateLasers() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < lasers.length; i++) {
            const laser = lasers[i];
            laser.y -= laser.speed;
            laser.alpha -= 0.02;

            if (laser.alpha <= 0) {
                lasers.splice(i, 1);
                i--;
            } else {
                drawLaser(laser);
            }
        }

        if (lasers.length > 0) {
            requestAnimationFrame(updateLasers);
        }
    }

    updateLasers();
}
