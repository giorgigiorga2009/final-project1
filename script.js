document.getElementById('modeToggle').addEventListener('click', function() {
    const body = document.body;
    const modeToggleBtn = document.getElementById('modeToggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Bright Mode';
    } else {
        modeToggleBtn.textContent = 'Dark Mode';
    }
});


document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 40 * dx / window.innerWidth / 2
    let angleY = 40 * dy / window.innerHeight / 2
        let body = document.body;
        body.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
    });

// test
