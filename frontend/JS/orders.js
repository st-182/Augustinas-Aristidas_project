// Variables
// - DOM elements
const formElement = document.querySelector(`#new-order`);
const tableTypeElement = document.querySelector(`#form__size`);

const lengthOptionElement = document.querySelector(`#form__length`);
const widthOptionElement = document.querySelector(`#form__width`);
const diameterOptionElement = document.querySelector(`#form__diameter`);
const heightOptionElement = document.querySelector(`#form__height`);

// - logic
const sizeLength = [
  "length: custom",
  "length: 250cm",
  "length: 200cm",
  "length: 190cm",
  "length: 180cm",
];
const sizeWidth = [
  "length: custom",
  "length: 120cm",
  "length: 100cm",
  "length: 95cm",
  "length: 90cm",
  "length: 80cm",
];
const sizeHeight = [
  "length: custom",
  "length: 100cm",
  "length: 90cm",
  "length: 85cm",
  "length: 80cm",
  "length: 77cm",
  "length: 75cm",
  "length: 73cm",
  "length: 70cm",
];
const sizeDiameter = [
  "length: custom",
  "length: 150cm",
  "length: 120cm",
  "length: 100cm",
  "length: 90cm",
  "length: 80cm",
];
// Functions

const renderOptions = (e) => {
  switch (e.target.value) {
    case "custom":
      console.log(`custom is selected`);

      lengthOptionElement.classList.add(`none`);
      lengthOptionElement.previousElementSibling.classList.add(`none`);
      widthOptionElement.classList.add(`none`);
      widthOptionElement.previousElementSibling.classList.add(`none`);
      diameterOptionElement.classList.add(`none`);
      diameterOptionElement.previousElementSibling.classList.add(`none`);
      heightOptionElement.classList.add(`none`);
      heightOptionElement.previousElementSibling.classList.add(`none`);
      break;
    case "square":
      console.log(`square is selected`);
      break;
    case "round":
      console.log(`round is selected`);
      break;
  }
};

const sendOrderToBackend = (e) => {
  e.preventDefault();
  console.group(`Data`);
  for (let i = 0; i < e.target.length - 1; i++) {
    e.target[i].value ? console.log(e.target[i].value) : null;
  }
  console.groupEnd(`Data`);
};

// Events
tableTypeElement.addEventListener(`change`, renderOptions);
formElement.addEventListener(`submit`, sendOrderToBackend);
