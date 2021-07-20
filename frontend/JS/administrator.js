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
            <p class="order-id">ID: ${card._id}</p>
            <p class="order-id">User: ${
              card.user ? card.user : `no account`
            }</p>
            <p class="main-user-card-date">Date: ${card.createdAt.slice(
              0,
              10
            )}, Time: ${card.createdAt.slice(11, 19)}</p>
            <p class="main-user-card-email">${card.email}</h>
            <p class="main-user-card-phone_number">${card.phone_number}</p>
            <p class="main-user-card-details">${
              card.order_details ? card.order_details : ""
            } </p>
              <div>
              <button class="inProgress-btn" data-id="${
                card._id
              }">In progress</button>
              <button class="done-btn" data-id="${card._id}">Done</button>
              </div>
          </div>

        </div>
        `;
      }

      adminInfoOutput.innerHTML = output;
      const moreDetailsOutput = document.querySelectorAll(`.main-user-card`);
      console.log(moreDetailsOutput);
      moreDetailsOutput.forEach((item) =>
        item.addEventListener("click", getMoreDetails, "capture")
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
  console.log(ENDPOINT_ORDER_API + e.target.dataset.id);
  fetch(ENDPOINT_ORDER_API + e.target.dataset.id, {
    method: `PUT`,
    headers: {
      "Content-type": `application/json`,
    },
    body: JSON.stringify({ inProgress: `true` }),
  }).then((res) => {
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire(
        "The request is successful!",
        "Now reloading the page!",
        "success"
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
const getMoreDetails = (e) => {
  console.log(e.currentTarget.lastElementChild);
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
