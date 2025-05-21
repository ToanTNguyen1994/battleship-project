const board = document.getElementById('board');

// Create the 3x3 grid
for (let i = 0; i < 9; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.setAttribute('data-index', i);
  board.appendChild(square);
}

// Randomly select the battleship location
const battleshipIndex = Math.floor(Math.random() * 9);

// Handle user clicks
board.addEventListener('click', function(e) {
  const target = e.target;

  if (!target.classList.contains('square')) return;

  const index = parseInt(target.getAttribute('data-index'));

  // Prevent repeated clicks
  if (target.classList.contains('correct') || target.classList.contains('incorrect')) return;

  if (index === battleshipIndex) {
    target.classList.add('correct');
    alert("Hit! You found the battleship! 🛳️");
  } else {
    target.classList.add('incorrect');
  }
});
