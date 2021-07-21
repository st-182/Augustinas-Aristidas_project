//Import of Sweet Alert 2
// import Swal from "sweetalert2";
// API
const ENDPOINT_ORDER_API = "http://localhost:5000/api/orders/";

// DOM variables
const adminInfoOutput = document.querySelector("#admin-info-output");

// functions
// admin ---------------------------------------------------------------------------------------------
// -- GET data
async function getUserInformation() {
  return await fetch(ENDPOINT_ORDER_API)
    .then((response) => response.json())
    .then((data) => {
      let cards = data.reverse();

      let output = "";

      for (let card of cards) {
        output += `
        <div class="main-user-card">
          <p class="type-of-order">${
            card.order_details
              ? `<i class="far fa-list-alt"></i>`
              : card.table_shape === `Round`
              ? `<i class="far fa-circle"></i>`
              : `<i class="far fa-square"></i>`
          }</p>
          <p class="main-user-card-name">${card.name}</p>
          <p class="main-user-card-surname">${card.surname}</p>
          <p class="more-details-btn" ><i class="fas fa-chevron-down"></i></p>

          <div class="none additional-info">

            <div class="main-details">
              <p class="main-details-item main-user-card-id">ID: <span>${
                card._id
              }</span></p>
              <p class="main-details-item main-user-card-account">User: <span>${
                card.user ? card.user : `no account`
              }</span></p>
              <p class="main-details-item main-user-card-date">Date: <span>${card.createdAt.slice(
                0,
                10
              )}, Time: ${card.createdAt.slice(11, 19)}</span></p>
              <p class="main-details-item main-user-card-email">Email: <span>${
                card.email
              }</span></p>
              <p class="main-details-item main-user-card-phone_number">Phone number: <span>${
                card.phone_number
              }</span></p>
              <p class="main-details-item main-user-card-table_shape">Table shape: <span>${
                card.table_shape
              }</span></p>
            </div>

              <div class="${
                card.order_details
                  ? `none`
                  : card.table_shape === `Round`
                  ? `round-table-img`
                  : `square-table-img`
              }">
              <img src="${
                card.table_shape === `Round`
                  ? `../IMAGES/round-table.png`
                  : `../IMAGES/square-table.png`
              }" alt="table">
              <p class="main-user-card-table_length">${
                card.table_length ? card.table_length : ``
              }</p>
              <p class="main-user-card-table_diameter">${
                card.table_diameter ? card.table_diameter : ``
              }</p>
              <p class="main-user-card-table_width">${
                card.table_width ? card.table_width : ``
              }</p>
              <p class="main-user-card-table_height">${card.table_height}</p>
              </div>
            
              <div class="additional-details">
                <p class="additional-details-item main-user-card-table_order_color">${
                  card.table_order_color ? `Color:` : ``
                }<span>${
          card.table_order_color ? card.table_order_color : ``
        }</span></p>
                <p class="additional-details-item main-user-card-table_order_material_type">${
                  card.table_order_material_type ? `Material type:` : ``
                }<span>${
          card.table_order_material_type ? card.table_order_material_type : ``
        }</span></p>
                <p class="additional-details-item main-user-card-table_order_material">${
                  card.table_order_material ? `Material:` : ``
                }<span>${
          card.table_order_material ? card.table_order_material : ``
        }</span></p>
                <p class="additional-details-item main-user-card-details">${
                  card.order_details ? `Description: ` : ""
                }<span>${
          card.order_details ? card.order_details : ""
        }</span></p>
              </div>

              <div class="action-btns">
                <button class="inProgress-btn btn-style-rainbow" data-id="${
                  card._id
                }">${
          card.inProgress === `true`
            ? `Pause the order execution`
            : `Start the order execution`
        }</button>
                <button class="done-btn btn-style-rainbow" data-id="${
                  card._id
                }">The order is done</button>
              </div>
              <div class="action-btn-delete">
              <button class="delete-btn btn-style-rainbow" data-id="${
                card._id
              }">Reject and delete the order</button>
              </div>

          </div>

        </div>
        `;
      }

      adminInfoOutput.innerHTML = output;
      const moreDetailsOutput = document.querySelectorAll(`.main-user-card`);
      // console.log(moreDetailsOutput);
      moreDetailsOutput.forEach((item) =>
        item.addEventListener("click", getMoreDetails)
      );
      selectAllBtn();
    })
    .catch((err) => console.log(err));
  // makeBtnActive();
}

const selectAllBtn = () => {
  const allInProgressBtn = document.querySelectorAll(".inProgress-btn");
  const allDoneBtn = document.querySelectorAll(".done-btn");
  allInProgressBtn.forEach((item) =>
    item.addEventListener(`click`, updateStatusOfAnOrder)
  );
  allDoneBtn.forEach((item) =>
    item.addEventListener(`click`, sendOrderToCompletedTables)
  );
};

const updateStatusOfAnOrder = (e) => {
  //removes EventListener from order, so we can send data to server without animation
  e.target.parentNode.parentNode.parentNode.removeEventListener(
    "click",
    getMoreDetails
  );
  // changing inProgress status of order
  console.log(e.target.textContent);
  fetch(ENDPOINT_ORDER_API + e.target.dataset.id, {
    method: `PUT`,
    headers: {
      "Content-type": `application/json`,
    },

    body:
      e.target.textContent === `Start the order execution`
        ? JSON.stringify({ inProgress: `true` })
        : JSON.stringify({ inProgress: `false` }),
  }).then((res) => {
    console.log(res.status);
    if (res.status === 200) {
      // Swal.fire(
      //   "The request is successful!",
      //   "Now reloading the page!",
      //   "success"
      // );
      // e.target.disabled = true;
      // getUserInformation();
      // setTimeout(() => {
      //   location.reload();
      // }, 3000);
      // console.log(e.target);
      updateOrderButtonsLocally(e.target);
      e.target.animate(
        [{}, { color: `transparent`, transform: `scale(0.95)` }, {}],
        { duration: 500 }
      );
    }
  });

  //adds EventListner back, so you can close the card with animation
  let path = e.target.parentNode.parentNode.parentNode;
  setTimeout(() => {
    path.addEventListener("click", getMoreDetails);
  }, 100);
};

const updateOrderButtonsLocally = (btn) => {
  fetch(ENDPOINT_ORDER_API)
    .then((response) => response.json())
    .then((data) => {
      let order = data.filter((item) => item._id === btn.dataset.id);
      console.log(order[0].inProgress);
      order[0].inProgress === `false`
        ? (btn.parentNode.firstElementChild.textContent = `Start the order execution`)
        : (btn.parentNode.firstElementChild.textContent = `Pause the order execution`);
    })
    .catch((err) => console.log(err));
};

const sendOrderToCompletedTables = (e) => {
  e.target.parentNode.parentNode.parentNode.removeEventListener(
    "click",
    getMoreDetails
  );

  console.log(e.target.parentNode.parentNode.parentNode);
  Swal.fire("Good job!", "You clicked the button!", "success");

  let path = e.target.parentNode.parentNode.parentNode;
  setTimeout(() => {
    path.addEventListener("click", getMoreDetails);
  }, 100);

  // console.log(e.target.dataset.id);
};

const makeBtnActive = (e) => {};
const getMoreDetails = (e) => {
  // console.log(e.currentTarget.lastElementChild);
  // let offsetHeightBeforeToggle = e.currentTarget.lastElementChild.offsetHeight;

  if (!e.currentTarget.lastElementChild.classList.contains("none")) {
    // Closing keyframe
    //selecting elements since it is not possible to pass them to setTimeout
    let selectedElement = e.currentTarget;
    let additionalInfo = e.currentTarget.lastElementChild;
    setTimeout((e) => {
      //toggling class none inn order to hide additional info
      additionalInfo.classList.toggle(`none`);
      //manipulating the marginBottom property of selected element, so the animation would finish properly
      selectedElement.style.marginBottom = `${additionalInfo.offsetHeight}px`;
    }, 500);
    e.currentTarget.lastElementChild.style.top = `${e.currentTarget.offsetHeight}px`;
    //animation of selected element
    e.currentTarget.animate(
      [
        // keyframes
        { marginBottom: `${e.currentTarget.lastElementChild.offsetHeight}px` },
        { marginBottom: "0px" },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
      }
    );
    //animation of additional information element
    e.currentTarget.lastElementChild.animate(
      [
        // keyframes
        { opacity: "1" },
        { opacity: "0" },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
      }
    );
  } else {
    // Opening keyframe

    e.currentTarget.lastElementChild.classList.toggle(`none`);
    e.currentTarget.lastElementChild.style.top = `${e.currentTarget.offsetHeight}px`;
    e.currentTarget.style.marginBottom = `${e.currentTarget.lastElementChild.offsetHeight}px`;
    e.currentTarget.animate(
      [
        // keyframes
        { marginBottom: "0px" },
        { marginBottom: `${e.currentTarget.lastElementChild.offsetHeight}px` },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
      }
    );
    e.currentTarget.lastElementChild.animate(
      [
        // keyframes
        { opacity: "0" },
        { opacity: "1" },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
      }
    );
  }
};

// events
document.addEventListener("DOMContentLoaded", getUserInformation);
