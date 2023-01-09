'use strict';
const sliders = document.querySelectorAll('.slider');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

prevBtn.addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});

// function goToSlide(n) {
//   sliders.forEach(slider => {
//     const slides = slider.querySelectorAll('.slide');
//     slides[currentSlide].style.left = '-800px';
//   });
//   currentSlide =
//     (n + sliders[0].querySelectorAll('.slide').length) %
//     sliders[0].querySelectorAll('.slide').length;

//   sliders.forEach(slider => {
//     const slides = slider.querySelectorAll('.slide');
//     slides[currentSlide].style.left = '0px';

//   });
// }

function goToSlide(n) {
  // Calculate the new current slide
  currentSlide =
    (n + sliders[0].querySelectorAll('.slide').length) %
    sliders[0].querySelectorAll('.slide').length;

  // Loop through all of the sliders and set the left position of each slide
  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
      if (index < currentSlide) {
        slide.style.left = (index - currentSlide + slides.length) * 800 + 'px';
      } else {
        slide.style.left = (index - currentSlide) * 800 + 'px';
      }
    });
  });
}
