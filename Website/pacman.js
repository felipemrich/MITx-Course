// pacman.js

class PacMan {
  constructor() {
    this.pageWidth = window.innerWidth;
    this.pageHeight = 1200; // Set the max y value
    this.pacArray = [
      ["./images/PacMan1.png", "./images/PacMan2.png"],
      ["./images/PacMan3.png", "./images/PacMan4.png"],
    ];
    this.directionX = this.getRandomDirection();
    this.directionY = this.getRandomDirection();
    this.posX = this.getRandomPosition(this.pageWidth);
    this.posY = this.getRandomPosition(this.pageHeight);
    this.focus = 0;
    this.createPacMan();
  }

  getRandomDirection() {
    // Returns a random direction (0 or 1)
    return Math.round(Math.random());
  }

  getRandomPosition(max) {
    // Returns a random position within the specified max value
    return Math.floor(Math.random() * max);
  }

  createPacMan() {
    this.img = document.createElement("img");
    this.img.src = this.pacArray[this.directionX][this.focus];
    this.img.width = 200;
    this.img.style.position = "absolute";
    this.img.style.left = this.posX + "px";
    this.img.style.top = this.posY + "px";
    document.body.appendChild(this.img);
  }

  run() {
    let imgWidth = this.img.width;
    let imgHeight = this.img.height;
    this.focus = (this.focus + 1) % 2;
    this.directionX = this.checkPageBoundsX(imgWidth);
    this.directionY = this.checkPageBoundsY(imgHeight);
    this.img.src = this.pacArray[this.directionX][this.focus];

    if (this.directionX) {
      this.posX -= 20;
      this.img.style.left = this.posX + "px";
    } else {
      this.posX += 20;
      this.img.style.left = this.posX + "px";
    }

    if (this.directionY) {
      this.posY -= 20;
      this.img.style.top = this.posY + "px";
    } else {
      this.posY += 20;
      this.img.style.top = this.posY + "px";
    }
  }

  checkPageBoundsX(imgWidth) {
    if (this.directionX === 0 && this.posX + imgWidth > this.pageWidth) {
      return 1;
    }
    if (this.directionX === 1 && this.posX < 0) {
      return 0;
    }
    return this.directionX;
  }

  checkPageBoundsY(imgHeight) {
    if (this.directionY === 0 && this.posY + imgHeight > this.pageHeight) {
      return 1;
    }
    if (this.directionY === 1 && this.posY < 0) {
      return 0;
    }
    return this.directionY;
  }
}

var pacmen = [];

function initializePacMan() {
  pacmen.push(new PacMan());
  setInterval(movePacMen, 300);
}

function movePacMen() {
  for (let i = 0; i < pacmen.length; i++) {
    pacmen[i].run();
    checkBorderCollision(pacmen[i]);
  }
}

function checkBorderCollision(pacMan) {
  let img = pacMan.img;
  let imgWidth = img.width;
  let imgHeight = img.height;
  let pageWidth = window.innerWidth;
  let pageHeight = pacMan.pageHeight;

  if (pacMan.posX + imgWidth > pageWidth) {
    pacMan.directionX = 1;
    pacMan.posX = pageWidth - imgWidth;
    img.style.left = pacMan.posX + "px";
  }

  if (pacMan.posX < 0) {
    pacMan.directionX = 0;
    pacMan.posX = 0;
    img.style.left = pacMan.posX + "px";
  }

  if (pacMan.posY + imgHeight > pageHeight) {
    pacMan.directionY = 1;
    pacMan.posY = pageHeight - imgHeight;
    img.style.top = pacMan.posY + "px";
  }

  if (pacMan.posY < 0) {
    pacMan.directionY = 0;
    pacMan.posY = 0;
    img.style.top = pacMan.posY + "px";
  }
}

// HTML button click event to add a new PacMan
document
  .getElementById("addPacmanButton")
  .addEventListener("click", function () {
    initializePacMan();
  });

// Initial PacMan creation
initializePacMan();
