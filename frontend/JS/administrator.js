// API
const ENDPOINT_API = 'http://localhost:5000/api/portfolio/';

// DOM variables
const tableOutput = document.querySelector('#table-output');

// functions
// gallery ---------------------------------------------------------------------------------------------
// -- GET data
function getTableInformation() {
  return fetch(ENDPOINT_API)
    .then((response) => response.json())
    .then((data) => {
      let tables = data.reverse();

      let output = '';

      for (let table of tables) {
        output += `
        <table class="main-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Size</th>
            <th>Color</th>
            <th>Material</th>
          </tr>
        </thead>
        <tbody id="main__table-body">
         <tr>
          <td class="main__table-images"><img class="main__table-image" src="${table.image}" alt="${table.image}"></td>
          <td class="main__table-names">${table.name}</td>
          <td class="main__table-sizes">${table.sizes}</td>
          <td class="main__table-colors">${table.color}</td>
          <td class="main__table-materials">${table.material}</td>
          <td class="main__table-btns">
          <button class="delete-btn">Delete</button>
          <button class="change-btn">Change</button>
          </td>
         </tr>
          `;
      }

      tableOutput.innerHTML = output;

      console.log(ENDPOINT_API);
    })
    .catch((err) => console.log(err));
}

// events
document.addEventListener('DOMContentLoaded', getTableInformation);
// ------------------------------------------------------------------------------------------------------
