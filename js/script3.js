//navbar button
'use strict';

let elementVisible = false;

const toggleButton = document.getElementById('nav_button');
const element = document.querySelector('header nav');
const mainElement = document.querySelector('main');
const mainHeading = document.querySelector('header h1');

toggleButton.addEventListener('click', () => {
  if (elementVisible) {
    element.style.display = 'none';
    mainElement.style.display = 'flex   ';
    mainHeading.style.display = 'flex';
  } else {
    element.style.display = 'flex';
    mainElement.style.display = 'none';
    mainHeading.style.display = 'none';
  }
  elementVisible = !elementVisible;
});
