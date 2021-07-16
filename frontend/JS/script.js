// DOM variables
const menuToggler = document.querySelector('.navigation-toggler i');
const menu = document.querySelector('.navbb');
const footer = document.querySelector('#date');

// functions
// navigation -------------------------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------------------------------

// footer -----------------------------------------------------------------------------------------------
const date = () => {
  footer.innerText += `${new Date().getFullYear()} © All rights reserved`;
};

document.addEventListener('DOMContentLoaded', date);
// --------------------------------------------------------------------------------------------------------
