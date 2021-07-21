const windowWidthChanged = (e) => {
  let windowWidth = window.innerWidth;
  //   console.log(windowWidth);
  if (windowWidth >= 768) {
    return true;
    // let cardElements = document.querySelectorAll(`.main-user-card`);
    // console.log(cardElements);
    // cardElements.forEach((item) => {
    //   item.removeEventListener("click", getMoreDetails);
    //   //   console.log(item.children[3]);
    //   //   item.children[2].style.paddingRight = `10px`;
    //   //   item.children[3].style.display = `none`;
    //   //   item.children[4].classList.remove(`none`);
    // });

    // let additionalInfoElements = document.querySelector(`.main-user-card`);
  } else {
    return false;
  }
};
// document.addEventListener("DOMContentLoaded", windowWidthChanged);
// window.addEventListener("resize", windowWidthChanged);

export default windowWidthChanged;
