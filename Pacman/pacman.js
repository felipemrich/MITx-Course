// Initialize variables to keep track of Pac-Man's position, page width, and animation images.
var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];

// Initialize variables to track Pac-Man's movement direction and animation focus.
var direction = 0;
var focus = 0;

// The Run function handles the Pac-Man animation and movement.
function Run() {
  // Get the Pac-Man image element from the HTML document.
  let img = document.getElementById("PacMan");
  // Get the width of the Pac-Man image.
  let imgWidth = img.width;

  // Switch between the two animation images to create animation effect.
  focus = (focus + 1) % 2;

  // Check if Pac-Man reaches the page bounds and change direction if needed.
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);

  // Update the Pac-Man image source to the correct animation image.
  img.src = pacArray[direction][focus];

  // Move Pac-Man to the left (decrease position) if direction is 1, otherwise move to the right (increase position).
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }
}

// Run the Run function every 300 milliseconds to animate Pac-Man.
setInterval(Run, 300);

// The checkPageBounds function checks if Pac-Man reaches the page bounds and changes direction if needed.
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  // If direction is 0 (moving to the right) and Pac-Man reaches the right page bound, change direction to 1 (left).
  if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;

  // If direction is 1 (moving to the left) and Pac-Man reaches the left page bound, change direction to 0 (right).
  if (direction == 1 && pos < 0) direction = 0;

  // Return the updated direction value.
  return direction;
}

// Export the checkPageBounds function to be used in other modules if needed.
module.exports = { checkPageBounds };
