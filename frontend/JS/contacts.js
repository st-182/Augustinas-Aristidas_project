// variables
const writeBtn = document.querySelector('#write-btn');
const writeOutput = document.querySelector('#write-output-form');

// functions
const writeEmail = (e) => {
  e.preventDefault();
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
  return writeOutput;
};

// events
writeBtn.addEventListener('click', writeEmail);
