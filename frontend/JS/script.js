// DOM variables
const menuToggler = document.querySelector(".navigation-toggler i");
const menu = document.querySelector(".navbb");
const footer = document.querySelector("#date");

// functions
// navigation -------------------------------------------------------------------------------------------
let showingMenu = false;
const toggleMenu = () => {
  if (showingMenu) {
    menu.animate([{ opacity: `1` }, { opacity: `0` }], { duration: 500 });
    setTimeout(() => {
      menu.classList.add("none-header");
      showingMenu = false;
    }, 500);
  } else {
    menu.animate([{ opacity: `0` }, { opacity: `1` }], { duration: 500 });

    let headerHeight = document.querySelector(".heading").offsetHeight;
    menu.classList.remove("none-header");
    // console.log(headerHeight);
    menu.style.top = `${headerHeight}px`;

    showingMenu = true;
  }
};

menuToggler.addEventListener("click", toggleMenu);
// -----------------------------------------------------------------------------------------------------

// footer -----------------------------------------------------------------------------------------------
const date = () => {
  footer.innerText += `${new Date().getFullYear()} © All rights reserved`;
};

document.addEventListener("DOMContentLoaded", date);
// --------------------------------------------------------------------------------------------------------
