const nextBtn = document.querySelector("next-btn");
const prevBtn = document.querySelector("prev-btn");
const navigationDots = document.querySelector("navigation-dot");

//set up slider

function init() {
  slideTestimony.forEach((reviews, i) => {
    reviews.style.left = i * 100 + "%";
  });
  slideTestimony[0].classList.add("current_card");
}
init();
