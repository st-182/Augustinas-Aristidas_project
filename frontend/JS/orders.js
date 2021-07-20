// Variables
Custom_URL = `http://localhost:5000/api/orders/custom`;
Constructed_URL = `http://localhost:5000/api/orders/constructed`;
// - DOM elements
const customFormElement = document.querySelector(`#new-custom-order`);
const constructorFormElement = document.querySelector(`#new-constructor-order`);
const tableTypeElement = document.querySelector(`#form__shape`);

//buttons which you see first on page
const customTableElement = document.querySelector(`#custom-table`);
const tableConstructorElement = document.querySelector(`#table-constructor`);
const startCustomTableElement = document.querySelector(`#custom-table-start`);
const startTableConstructorElement = document.querySelector(
  `#table-constructor-start`
);

//
const chooseFormElement = document.querySelector(`#choose-a-form`);
const changeFormElement = document.querySelector(`#change-a-form`);

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
  "Length: 250cm",
  "Length: 200cm",
  "Length: 190cm",
  "Length: 180cm",
];
const sizeWidth = [
  "Width: 120cm",
  "Width: 100cm",
  "Width: 95cm",
  "Width: 90cm",
  "Width: 80cm",
];
const sizeHeight = [
  "Height: 100cm",
  "Height: 90cm",
  "Height: 85cm",
  "Height: 80cm",
  "Height: 77cm",
  "Height: 75cm",
  "Height: 73cm",
  "Height: 70cm",
];
const sizeDiameter = [
  "Diameter: 150cm",
  "Diameter: 120cm",
  "Diameter: 100cm",
  "Diameter: 90cm",
  "Diameter: 80cm",
];

const colors = [
  "Blue",
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
//! ========!!!THIS IS CUSTOM TABLE FORM OR TABLE CONSTRUCTOR!!!=============
const showForm = (e) => {
  // console.log(e.target.id);
  // console.log(chooseFormElement.classList.contains(`none`));
  if (!chooseFormElement.classList.contains(`none`)) {
    chooseFormElement.classList.toggle(`none`);
    changeFormElement.classList.toggle(`none`);
  }

  if (`custom-table` === e.target.id || `custom-table-start` === e.target.id) {
    // console.log(`custom`);
    constructorFormElement.classList.add(`none`);
    customFormElement.classList.remove(`none`);
  } else if (
    `table-constructor` === e.target.id ||
    `table-constructor-start` === e.target.id
  ) {
    // console.log(`constructor`);
    // `table-constructor-start` || `table-constructor`:
    customFormElement.classList.add(`none`);
    constructorFormElement.classList.remove(`none`);
  }
};

//! ========!!!THIS IS ALERT!!!=============

const chooseAnOption = () => {
  Swal.fire("Any fool can use a computer");

  // Swal.fire({
  //   title:
  //     "Hello! Do you want to order a custom table or construct your table using our constructor?",
  //   showDenyButton: true,
  //   showCancelButton: true,
  //   confirmButtonText: `Save`,
  //   denyButtonText: `Don't save`,
  // }).then((result) => {
  //   /* Read more about isConfirmed, isDenied below */
  //   if (result.isConfirmed) {
  //     Swal.fire("Saved!", "", "success");
  //   } else if (result.isDenied) {
  //     Swal.fire("Changes are not saved", "", "info");
  //   }
  // });
};

//! ========!!!THIS IS RENDERING!!!=============
const renderOptions = (e) => {
  // chooseAnOption();
  renderSizeOptions(sizeLength, lengthOptionElement, 8);
  renderSizeOptions(sizeWidth, widthOptionElement, 7);
  renderSizeOptions(sizeHeight, heightOptionElement, 8);
  renderSizeOptions(sizeDiameter, diameterOptionElement, 9);
  renderSizeOptions(colors, colorOptionElement, 0);
  renderSizeOptions(materialTypes, materialOptionElement, 0);

  switch (tableTypeElement.value) {
    case "custom":
      renderCustom();
      break;
    case "Square":
      renderSquare();
      break;
    case "Round":
      renderRound();
      break;
  }
  renderMaterialList();
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
  DOMElement.innerHTML = array.reduce(
    (acc, item) =>
      (acc += `
      <option value="${item}">${item.slice(sliceParam, 30)}</option>
      `),
    ``
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
//! ========!!!RENDERING ENDED!!!=============
//! ========!!!THIS IS CREATION OF OBJECT!!!=============

const sendOrderToBackend = async (e) => {
  e.preventDefault();
  console.group(`Data`);
  for (let i = 0; i < e.target.length - 1; i++) {
    e.target[i].value ? console.log(e.target[i].value) : null;
  }
  console.groupEnd(`Data`);
  if (!constructorFormElement.classList.contains(`none`)) {
    console.log(`Constructor form is submitted`);
    let order = {
      name: e.target[0].value,
      surname: e.target[1].value,
      email: e.target[2].value,
      phone_number: e.target[3].value,
      table_shape: e.target[4].value,
      table_length:
        e.target[4].value === "Round" ? undefined : e.target[5].value,
      table_width:
        e.target[4].value === "Round" ? undefined : e.target[6].value,
      table_diameter:
        e.target[4].value === "Square" ? undefined : e.target[7].value,
      table_height: e.target[8].value,
      table_order_color: e.target[9].value,
      table_order_materials: e.target[10].value,
      inProgress: false,
      isDone: false,
      user_name: true,
    };
    await fetch(Constructed_URL, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire(
          "Your request was sent!",
          `status code is ${res.status}`,
          "success"
        );
      }
    });
    console.log(order);
  }
  if (!customFormElement.classList.contains(`none`)) {
    console.log(`Custom form is submitted`);
    let order = {
      name: e.target[0].value,
      surname: e.target[1].value,
      email: e.target[2].value,
      phone_number: e.target[3].value,
      order_details: e.target[4].value,
      inProgress: false,
      isDone: false,
      user_name: true,
    };
    await fetch(Custom_URL, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire(
          "Your request was sent!",
          `status code is ${res.status}`,
          "success"
        );
      }
    });
    console.log(order);
  }
};

// Events
document.addEventListener(`DOMContentLoaded`, renderOptions);
tableTypeElement.addEventListener(`change`, renderOptions);
constructorFormElement.addEventListener(`submit`, sendOrderToBackend);
customFormElement.addEventListener(`submit`, sendOrderToBackend);
materialOptionElement.addEventListener(`change`, renderMaterialList);

startCustomTableElement.addEventListener(`click`, showForm);
startTableConstructorElement.addEventListener(`click`, showForm);
customTableElement.addEventListener(`click`, showForm);
tableConstructorElement.addEventListener(`click`, showForm);
