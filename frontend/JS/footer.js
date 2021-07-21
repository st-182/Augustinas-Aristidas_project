// let footerHeight = document.querySelector(`footer`).offsetHeight;
// console.log(footerHeight);

const changeFooterHeightSettings = () => {
  let footerHeight = document.querySelector(`footer`).offsetHeight;
  // console.log(footerHeight);
  document.querySelector(`body`).style.paddingBottom = `${footerHeight}px`;
};
document.addEventListener("DOMContentLoaded", changeFooterHeightSettings);
window.addEventListener("resize", changeFooterHeightSettings);
