// Variables
// - DOM elements
const formElement = document.querySelector(`#new-order`);
const tableTypeElement = document.querySelector(`#form__shape`);

const lengthOptionElement = document.querySelector(`#form__length`);
const widthOptionElement = document.querySelector(`#form__width`);
const diameterOptionElement = document.querySelector(`#form__diameter`);
const heightOptionElement = document.querySelector(`#form__height`);
const colorOptionElement = document.querySelector(`#form__color`);
const materialOptionElement = document.querySelector(`#form__materials`);
const materialListOptionElement = document.querySelector(
  `#form__materials-list`
);

// - logic
const sizeLength = [
  "length: 250cm",
  "length: 200cm",
  "length: 190cm",
  "length: 180cm",
  "length: custom",
];
const sizeWidth = [
  "width: 120cm",
  "width: 100cm",
  "width: 95cm",
  "width: 90cm",
  "width: 80cm",
  "width: custom",
];
const sizeHeight = [
  "height: 100cm",
  "height: 90cm",
  "height: 85cm",
  "height: 80cm",
  "height: 77cm",
  "height: 75cm",
  "height: 73cm",
  "height: 70cm",
  "height: custom",
];
const sizeDiameter = [
  "diameter: 150cm",
  "diameter: 120cm",
  "diameter: 100cm",
  "diameter: 90cm",
  "diameter: 80cm",
  "diameter: custom",
];

const colors = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];

const materialTypes = ["Wood", "Metal", "Plastic"];

const timberTypes = [
  "Bamboo",
  "Cedar",
  "Cherry",
  "Cross-laminated timber",
  "Engineered bamboo",
  "Glulam",
  "Green timber",
  "Hardwood",
  "Lime",
  "Mahogany",
  "Oak",
  "Oriented strand board",
  "Padauk wood",
  "Pine",
  "Plywood",
  "Sapele wood",
];
const metalTypes = ["Aluminum", "Copper", "Bronze", "Zinc"];
const plasticTypes = [
  "Polyethylene Terephthalate (PETE or PET)",
  "High-Density Polyethylene (HDPE)",
  "Polyvinyl Chloride (PVC)",
  "Low-Density Polyethylene (LDPE)",
  "Polypropylene (PP)",
  "Polystyrene or Styrofoam (PS)",
];

// Functions

const renderOptions = (e) => {
  renderSizeOptions(sizeLength, lengthOptionElement, 8);
  renderSizeOptions(sizeWidth, widthOptionElement, 7);
  renderSizeOptions(sizeHeight, diameterOptionElement, 9);
  renderSizeOptions(sizeDiameter, heightOptionElement, 9);
  renderSizeOptions(colors, colorOptionElement, 0);
  renderSizeOptions(materialTypes, materialOptionElement, 0);

  switch (tableTypeElement.value) {
    case "custom":
      renderCustom();
      break;
    case "square":
      renderSquare();
      break;
    case "round":
      renderRound();
      break;
  }
  renderMaterialList();
};

const sendOrderToBackend = (e) => {
  e.preventDefault();
  console.group(`Data`);
  for (let i = 0; i < e.target.length - 1; i++) {
    e.target[i].value ? console.log(e.target[i].value) : null;
  }
  console.groupEnd(`Data`);
};

const renderCustom = () => {
  // Show relevant inputs only
  lengthOptionElement.classList.add(`none`);
  lengthOptionElement.previousElementSibling.classList.add(`none`);
  widthOptionElement.classList.add(`none`);
  widthOptionElement.previousElementSibling.classList.add(`none`);
  diameterOptionElement.classList.add(`none`);
  diameterOptionElement.previousElementSibling.classList.add(`none`);
  heightOptionElement.classList.add(`none`);
  heightOptionElement.previousElementSibling.classList.add(`none`);
  //
};

const renderSquare = () => {
  // Show relevant inputs only
  lengthOptionElement.classList.remove(`none`);
  lengthOptionElement.previousElementSibling.classList.remove(`none`);
  widthOptionElement.classList.remove(`none`);
  widthOptionElement.previousElementSibling.classList.remove(`none`);
  diameterOptionElement.classList.add(`none`);
  diameterOptionElement.previousElementSibling.classList.add(`none`);
  heightOptionElement.classList.remove(`none`);
  heightOptionElement.previousElementSibling.classList.remove(`none`);
  //
};

const renderRound = () => {
  // Show relevant inputs only
  lengthOptionElement.classList.add(`none`);
  lengthOptionElement.previousElementSibling.classList.add(`none`);
  widthOptionElement.classList.add(`none`);
  widthOptionElement.previousElementSibling.classList.add(`none`);
  diameterOptionElement.classList.remove(`none`);
  diameterOptionElement.previousElementSibling.classList.remove(`none`);
  heightOptionElement.classList.remove(`none`);
  heightOptionElement.previousElementSibling.classList.remove(`none`);
  //
};

const renderSizeOptions = (array, DOMElement, sliceParam) => {
  array.forEach(
    (item) =>
      (DOMElement.innerHTML += `
      <option value="${item}">${item.slice(sliceParam, 30)}</option>
      `)
  );
};

const renderMaterialList = () => {
  switch (materialOptionElement.value) {
    case "Wood":
      materialListOptionElement.innerHTML = ``;
      renderSizeOptions(timberTypes, materialListOptionElement, 0);
      break;
    case "Metal":
      materialListOptionElement.innerHTML = ``;
      renderSizeOptions(metalTypes, materialListOptionElement, 0);
      break;
    case "Plastic":
      materialListOptionElement.innerHTML = ``;
      renderSizeOptions(plasticTypes, materialListOptionElement, 0);
      break;
  }
};

// Events
document.addEventListener(`DOMContentLoaded`, renderOptions);
tableTypeElement.addEventListener(`change`, renderOptions);
formElement.addEventListener(`submit`, sendOrderToBackend);
materialOptionElement.addEventListener(`change`, renderMaterialList);
