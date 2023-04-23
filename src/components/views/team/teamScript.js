// const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const dives = carouselContainer.querySelectorAll('div');
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= dives.length) {
    currentIndex = 0;
  }
  carouselContainer.style.transform = `translateX(-${currentIndex * 50}%)`;
}, 3000);
