// variables
const writeBtn = document.querySelector('#write-btn');
const writeOutput = document.querySelector('#write-output-form');

const findBtn = document.querySelector('#find-store-btn');
const findOutput = document.querySelector('#find-output');

// functions
let toggled = false;
const writeEmail = (e) => {
  if (toggled) {
    toggled = false;
    writeOutput.innerHTML = ``;
  } else {
    toggled = true;
    writeOutput.innerHTML = `
      <form id="write-form">
      <input class="spacetables-email" type="text" placeholder="spacetables@gmail.com"/>
      <textarea class="question-textarea" name="" id="" cols="30" rows="10" placeholder="*Write your question or letter here"></textarea>
      <input class="name-input" type="text" placeholder="*Your name"/>
      <input class="number-input" type="text" placeholder="*Phone number"/>
      <input class="your-email-input" type="text" placeholder="*Your email"/>
      <button class="send-btn">Send</button>
      </form>
      `;
  }

  return writeOutput;
};

let toggle = false;
const findStore = () => {
  if (toggle) {
    toggle = false;
    findOutput.innerHTML = ``;
  } else {
    toggle = true;
    findOutput.innerHTML = `
  <div class="find-store-output-div">
  <a href="">AZ, Tempe</a>
  <a href="">CA, Burbank</a>
  <a href="">CA, Carson</a>
  <a href="">CA, Costa Mesa</a>
  <a href="">CA, Covina</a>
  <a href="">CA, East Palo Alto</a>
  <a href="">CA, Emeryville</a>
  <a href="">CA, San Diego</a>
  <a href="">CA, West Sacramento</a>
  <a href="">CO, Centennial</a>
  <a href="">CT, New Haven</a>
  <a href="">FL, Jacksonville</a>
  <a href="">FL, Miami</a>
  <a href="">FL, Orlando</a>
  <a href="">FL, Sunrise</a>
  <a href="">FL, Tampa</a>
  <a href="">GA, Atlanta</a>
  <a href="">IL, Bolingbrook</a>
  <a href="">IL, Schaumburg</a>
  <a href="">IN, Fishers</a>
  <a href="">KS, Merriam</a>
  <a href="">MA, Stoughton</a>
  <a href="">MD, Baltimore</a>
  <a href="">MD, College Park</a>
  <a href="">MI, Canton</a>
  <a href="">MN, Bloomington</a>
  <a href="">MO, St. Louis</a>
  <a href="">NC, Charlotte</a>
  <a href="">NJ, Elizabeth</a>
  <a href="">NJ, Paramus</a>
  <a href="">NV, Las Vegas</a>
  <a href="">NY, Brooklyn</a>
  <a href="">NY, Long Island</a>
  <a href="">NY, Queens</a>
  <a href="">NY, Upper East Side - Planning Studio</a>
  <a href="">OH, Columbus</a>
  <a href="">OH, West Chester</a>
  <a href="">OR, Portland</a>
  <a href="">PA, Conshohocken</a>
  <a href="">PA, Pittsburgh</a>
  <a href="">PA, South Philadelphia</a>
  <a href="">TN, Memphis</a>
  <a href="">TX, Frisco</a>
  <a href="">TX, Grand Prairie</a>
  <a href="">TX, Houston</a>
  <a href="">TX, Live Oak</a>
  <a href="">TX, Round Rock</a>
  <a href="">UT, Draper</a>
  <a href="">VA, Norfolk</a>
  <a href="">VA, Woodbridge</a>
  <a href="">WA, Renton</a>
  <a href="">WI, Oak Creek</a>
  </div>
  `;
  }
  return findOutput;
};

// events
writeBtn.addEventListener('click', writeEmail);
findBtn.addEventListener('click', findStore);
