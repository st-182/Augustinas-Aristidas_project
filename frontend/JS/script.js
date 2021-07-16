const menuToggler = document.querySelector('.navigation-toggler i');
const menu = document.querySelector('.navbb');
const footer = document.querySelector('#date');

let showingMenu = false;
const toggleMenu = () => {
  if (showingMenu) {
    menu.style.display = 'none';
    showingMenu = false;
  } else {
    menu.style.display = 'block';
    showingMenu = true;
  }
};

menuToggler.addEventListener('click', toggleMenu);

const date = () => {
  footer.innerText += new Date().getFullYear();
};

document.addEventListener('DOMContentLoaded', date);
