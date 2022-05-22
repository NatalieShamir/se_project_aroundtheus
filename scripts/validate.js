function checkValidity(input) {
  if (input.validity.valid) {
    //hide error
  } else {
    //show error
  }
}

function enableValidation(settings) {
  const forms = Array.from(document.querySelectorAll(".popup__form"));
}

function preventDefaultFormBehavior(forms) {
  //is the function parameter defined correctly?
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
  });
}

function searchFormInputs() {
  const inputs = Array.from(form.querySelectorAll(".popup__form-input"));
}

function subscribeInputsChange(inputs) {
  ////is the function parameter defined correctly?
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkValidity(input);
      //check validity
      //toggle button state
    });
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
