// API
const ENDPOINT_API = "http://localhost:5000/api/portfolio/";

// DOM variables
const dataOutput = document.querySelector("#output");

// functions
// gallery ---------------------------------------------------------------------------------------------
// -- GET data
function getDeskInformation() {
  return fetch(ENDPOINT_API)
    .then((response) => response.json())
    .then((data) => {
      let desks = data.reverse();

      let output = "";

      for (let desk of desks) {
        output += `
              <div id="${desk._id}" class="cards">
                <img src="${desk.image}" alt="">
                <div class="display-none">
                <h3 class="name">${desk.name}</h3>
                <p class="size">${desk.sizes}</p>
                <p class="color">${desk.color}</p>
                <p class="material">${desk.material}</p>
                </div>
              </div>
              `;
      }

      dataOutput.innerHTML = output;

      console.log(ENDPOINT_API);
    })
    .catch((err) => console.log(err));
}

// events
document.addEventListener("DOMContentLoaded", getDeskInformation);
// ------------------------------------------------------------------------------------------------------
