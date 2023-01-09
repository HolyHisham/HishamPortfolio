'use strict';
const text = document.querySelector('.sec-text');

const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'System Administrator';
  }, 0);
  setTimeout(() => {
    text.textContent = 'Technical Support';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'Network Engineer';
  }, 8000); //1s = 1000 milliseconds
  setTimeout(() => {
    text.textContent = 'Web Developer';
  }, 12000);
};

textLoad();
setInterval(textLoad, 16000);

//slider
