let mainContent = document.querySelector('body');
const mainMenu = document.querySelector('.main-menu');
const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', openMenu);

function openMenu() {
  if (mainMenu.classList.contains('is-active')) {
    // Close the menu
    mainMenu.classList.remove('is-active');
    burgerMenu.classList.remove('icon--close');
    burgerMenu.classList.add('icon--menu');
    mainContent.style.opacity = 1; // Restore the content
  } else {
    // Open the menu
    mainMenu.classList.add('is-active');
    burgerMenu.classList.remove('icon--menu');
    burgerMenu.classList.add('icon--close');
    mainContent.style.opacity = 0.5; // Dim the content
  }
}