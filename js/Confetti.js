

document.getElementById('button-Con').addEventListener('click', function(event) {
    event.preventDefault(); //  default  behavior

    // Launches confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
