//Variables
const formElements = document.querySelectorAll(`form`);
const formBtnRegisterOrLoginElements =
  document.querySelectorAll(`.form-btn-register`);

// Functions
const toggleForm = (e) => {
  //   console.log(formElements[0], formElements[1]);
  formElements[0].classList.toggle(`none`);
  formElements[1].classList.toggle(`none`);
  //   console.log(document.querySelector(`#form-name`).textContent);
  if (document.querySelector(`#form-name`).textContent === "Log in") {
    document.querySelector(`#form-name`).textContent = `Register`;
    formBtnRegisterOrLoginElements[1].animate(
      [{}, { color: `transparent`, transform: `scale(0.95)` }, {}],
      { duration: 500 }
    );
  } else {
    document.querySelector(`#form-name`).textContent = `Log in`;
    formBtnRegisterOrLoginElements[0].animate(
      [{}, { color: `transparent`, transform: `scale(0.95)` }, {}],
      { duration: 500 }
    );
  }
};
const createUser = (e) => {
  e.preventDefault();
  if (e.target.length === 4) {
    //login fetch
  } else {
    //register fetch
  }
};

//Events
formBtnRegisterOrLoginElements.forEach((btn) =>
  btn.addEventListener(`click`, toggleForm)
);
formElements.forEach((form) => form.addEventListener(`submit`, createUser));
