//Import of Sweet Alert 2
// import Swal from "sweetalert2";
// API
const ENDPOINT_ORDER_API = 'http://localhost:5000/api/orders/';

// DOM variables
const adminInfoOutput = document.querySelector('#admin-info-output');

// functions
// admin ---------------------------------------------------------------------------------------------
// -- GET data
async function getUserInformation() {
  return await fetch(ENDPOINT_ORDER_API)
    .then((response) => response.json())
    .then((data) => {
      let cards = data.reverse();

      let output = '';

      for (let card of cards) {
        output += `
        <div class="main-user-card">
        <h2 class="main-user-card-name">${card.name}</h2>
        <h3 class="main-user-card-surname">${card.surname}</h3>
        <h3 class="main-user-card-email">${card.email}</h3>
        <h3 class="main-user-card-phone_number">${card.phone_number}</h3>
        <p class="main-user-card-details">${
          card.order_details ? card.order_details : ''
        }</p>
        

        <button class="more-details-btn show-more-btn"  data-id="${
          card._id
        }">More details</button>
        <div id="${card._id}"></div>
        </div>
        `;
      }

      adminInfoOutput.innerHTML = output;
      const moreDetailsOutput = document.querySelectorAll(`.show-more-btn`);
      console.log(moreDetailsOutput);
      moreDetailsOutput.forEach((item) =>
        item.addEventListener('click', getMoreDetails)
      );
      selectAllBtn();
      console.log(ENDPOINT_ORDER_API);
    })
    .catch((err) => console.log(err));
  // makeBtnActive();
}

const selectAllBtn = () => {
  const allInProgressBtn = document.querySelectorAll('.inProgress-btn');
  const allDoneBtn = document.querySelectorAll('.done-btn');
  allInProgressBtn.forEach((item) =>
    item.addEventListener(`click`, updateStatusOfAnOrder)
  );
  allDoneBtn.forEach((item) =>
    item.addEventListener(`click`, sendOrderToCompletedTables)
  );
};

const updateStatusOfAnOrder = (e) => {
  console.log(ENDPOINT_ORDER_API + e.target.dataset.id);
  fetch(ENDPOINT_ORDER_API + e.target.dataset.id, {
    method: `PUT`,
    headers: {
      'Content-type': `application/json`,
    },
    body: JSON.stringify({ isDone: `true` }),
  }).then((res) => {
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire(
        'The request is successful!',
        'Now reloading the page!',
        'success'
      );
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  });
};
const sendOrderToCompletedTables = (e) => {
  console.log(e.target.dataset.id);
};

const makeBtnActive = (e) => {};

// events
document.addEventListener('DOMContentLoaded', getUserInformation);
// ------------------------------------------------------------------------------------------------------

const moreDetailsBtns = document.querySelectorAll('.more-details-btn');
const moreDetailsOutput = document.querySelector('#more-details-output');

const getMoreDetails = (e) => {
  console.log(e.target.dataset.id);
  return fetch(ENDPOINT_ORDER_API)
    .then((response) => response.json())
    .then((data) => {
      let cards = data.reverse();

      let output = '';
      let element = ``;
      for (let card of cards) {
        if (e.target.dataset.id === card._id) {
          output += `
          <div>
          <p>${card.table_shape ? card.table_shape : '-'}</p>
          <p>${card.table_length ? card.table_length : '-'}</p>
          <p>${card.table_width ? card.table_width : '-'}</p>
          <p>${card.table_diameter ? card.table_diameter : '-'}</p>
          <p>${card.table_height ? card.table_height : '-'}</p>
          <p>${card.table_order_color ? card.table_order_color : '-'}</p>
          <p>${
            card.table_order_materials ? card.table_order_materials : '-'
          }</p>
          </div>
        `;
          element = card._id;
        }
        //
        // const moreDetailsOutput = document.querySelector(`${card._id}`);
        // console.log(moreDetailsOutput);
        // moreDetailsOutput.addEventListener('click', getMoreDetails);
      }
      console.log(output);
      console.log(element);
      document.querySelector(`#${element}`).innerHTML = output;

      selectAllBtn();
      console.log(ENDPOINT_ORDER_API);
    })
    .catch((err) => console.log(err));
};

// moreDetailsBtns.forEach((item) =>
//   item.addEventListener('click', getMoreDetails)
// );
