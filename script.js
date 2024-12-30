// Helper functions for sparkles
function createSparkles() {
    const popup = document.querySelector('.popup');
    for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
        popup.appendChild(sparkle);
    }
}

function removeSparkles() {
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach(sparkle => sparkle.remove());
}

// Heart popup functionality
let heartClicked = false;
let currentLine = 0;

function openPopup() {
    if (heartClicked) return;
    heartClicked = true;

    const popup = document.getElementById('popup');
    const heart = document.querySelector('.heart');
    const messageContainer = document.getElementById('message');

    const message = [
        "🌟 <span class='highlight-happy'>Happy New Year Cupcake</span> 🌟",
        "Wherever life takes you, that's where my heart will always follow.",
        "The future is uncertain, but one thing is forever true—my love for you.",
        "This year, I promise to cherish every single moment with you,",
        "To love you like every night could be our last,",
        "To laugh, hold, and dream with you.",
        "If the world was ending, I know exactly where I'd want to be—",
        "Right by your side, with your hand in mine,",
        "Smiling, loving, and making every second count.",
        "Cheers to another beautiful year of us—together, always.",
        "I am Forever Yours lakshya ❤️"
    ];

    popup.style.display = 'flex';
    heart.style.opacity = '0';

    createSparkles();

    function showLine() {
        if (currentLine < message.length) {
            const lineContainer = document.createElement('div');
            lineContainer.style.marginBottom = '10px';
            const span = document.createElement('span');
            span.innerHTML = message[currentLine]; // Use innerHTML to render the span
            span.style.animationDelay = '0.5s';
            lineContainer.appendChild(span);
            messageContainer.appendChild(lineContainer);

            currentLine++;
            setTimeout(showLine, 600);
        }
    }

    showLine();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    // Remove sparkles when closing popup
    removeSparkles();
}
