// Select the ball element
const ball = document.getElementById('ball');

// Add a click event listener
ball.addEventListener('click', () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    // Change the ball's background color
    ball.style.backgroundColor = randomColor;
});
