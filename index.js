// Handle Button Clicks

function changeBackgroundColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent =
    `Key pressed: ${event.key}`;
}

// Process Text Input

function displayUserInput() {
  const userInput = document.getElementById('textInput').value;

  document.getElementById('textInputDisplay').textContent =
    `You typed: ${userInput}`;
}

// Attach Event Listeners

function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};