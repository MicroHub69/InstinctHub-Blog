const carouselContainer = document.querySelector(".carousel_layout");
const cards = document.querySelector(".cells_container");

// Keep track of users mouse
let isPressedDown = false;

// x axies cursor for inner container
let cursorXspace;

carouselContainer.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXspace = e.offsetX - cards.offsetLeft;
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});
carouselContainer.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXspace}px`;
  boundCards();
});

function boundCards() {
  const defaultDrag = carouselContainer.getBoundingClientRect();
  const dragMove = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (dragMove.right < defaultDrag.right) {
    cards.style.left = `-${dragMove.width - defaultDrag.width}px`;
  }
}
