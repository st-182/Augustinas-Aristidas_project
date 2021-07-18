// API
const ENDPOINT_ORDER_API = "http://localhost:5000/api/orders/";

// DOM variables
const tableOutput = document.querySelector("#table-output");

// functions
// admin ---------------------------------------------------------------------------------------------
// -- GET data
async function getTableInformation() {
  return await fetch(ENDPOINT_ORDER_API)
    .then((response) => response.json())
    .then((data) => {
      let tables = data.reverse();

      let output = "";

      for (let table of tables) {
        output += `
        <table class="main-table">
        <tbody id="main__table-body">
         <tr>
          <td class="main__table-names">${table.name}</td>
          <td class="main__table-surnames">${table.surname}</td>
          <td class="main__table-emails">${table.email}</td>
          <td class="main__table-numbers">${table.phone_number}</td>
          <td class="main__table-details">${
            table.order_details ? table.order_details : "-"
          }</td>
          <td class="main__table-shapes">${
            table.table_shape ? table.table_shape : "-"
          }</td>
          <td class="main__table-lengths">${
            table.table_length ? table.table_length : "-"
          }</td>
          <td class="main__table-widths">${
            table.table_width ? table.table_width : "-"
          }</td>
          <td class="main__table-diameters">${
            table.table_diameter ? table.table_diameter : "-"
          }</td>
          <td class="main__table-heights">${
            table.table_height ? table.table_height : "-"
          }</td>
          <td class="main__table-colors">${
            table.table_order_color ? table.table_order_color : "-"
          }</td>
          <td class="main__table-materials">${
            table.table_order_materials ? table.table_order_materials : "-"
          }</td>
          <td class="main__table-btns">
          <button class="underway-btn" data-id="${table._id}">Underway</button>
          <button class="accomplished-btn" data-id="${
            table._id
          }">Accomplished</button>
          </td>
         </tr>
          `;
      }

      tableOutput.innerHTML = output;
      selectAllBtn();
      console.log(ENDPOINT_ORDER_API);
    })
    .catch((err) => console.log(err));
}

const selectAllBtn = () => {
  const allInProgressBtn = document.querySelectorAll(".underway-btn");
  const allDoneBtn = document.querySelectorAll(".accomplished-btn");
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
    body: JSON.stringify({ isDone: `true` }),
  });
};
const sendOrderToCompletedTables = (e) => {
  console.log(e.target.dataset.id);
};

// events
document.addEventListener("DOMContentLoaded", getTableInformation);
// ------------------------------------------------------------------------------------------------------
