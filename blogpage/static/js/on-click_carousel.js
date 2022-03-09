// let slidePosition = 0;
// const slides = document.getElementsByClassName("review_cards");
// const totalSlides = slides.length;

// document.getElementById("next-btn").addEventListener("click", function () {
//   moveToNextSlide();
// });

// document.getElementById("prev-btn").addEventListener("click", function () {
//   moveToPrevSlide();
// });

// function updateSlidePosition() {
//   for (let slide of slides) {
//     slide.classList.remove(".carousel_item");
//     slide.classList.add(".carousel-hidden");
//   }
//   slides[slidePosition].classList.add(".carousel_item");
// }

// function moveToNextSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }
//   updateSlidePosition();
// }

// function moveToPrevSlide() {
//   if (slidePosition === 0) {
//     slidePosition = totalSlides - 1;
//   } else {
//     slidePosition--;
//   }
//   updateSlidePosition();
// }
