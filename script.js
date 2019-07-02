let navBar = document.querySelector(".navigation");

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    navBar.classList.add("nav-shrink");
  } else {
    navBar.classList.remove("nav-shrink");
  }
});

const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide img');
let currentSlide = 0;
const size = slide.clientWidth;

function changeSlide(newSlide) {
  slide.style.transform = 'translateX(' + (-size * newSlide) + 'px)';
  slide.style.transition = ' .2s';
}

function autoSlide() {
  if (currentSlide < 2) {
    currentSlide++;
    changeSlide(currentSlide);
  }
  if (currentSlide === 2) {
    slide.style.transform = 'translateX(0)';
    currentSlide = 0;
  }
}

setInterval(autoSlide, 1000);