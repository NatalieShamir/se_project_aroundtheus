function toggleButtonState(inputs, button) {
  const isFormValid = inputs.every((input) => input.validity.valid);

  if (isFormValid) {
    button.disabled = false;
    button.classList.remove("popup__form-button_disabled");
  } else {
    button.disabled = "disabled";
    button.classList.add("popup__form-button_disabled");
  }
}

function showInputError(input, formEl, { errorClass }) {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  const { errorClass } = settings;
  errorSpan.textContent = input.validationMessage;
  input.classList.add(errorClass);
}

function hideInputError(input, formEl, { errorClass }) {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  errorSpan.textContent = "";
  input.classList.remove(errorClass);
}

function checkInputValidity(formEl, input, settings) {
  if (input.validity.valid) {
    hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
}

function setEventListeners(formEl, settings) {
  const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
  //const button = formEl.querySelector(".popup__form-button");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(formEl, input, settings);
      //toggleButtonState(inputs, button);
    });
  });
}

function enableValidation(settings) {
  const formElements = [...document.querySelectorAll(settings.formSelector)]; //find all forms
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => e.preventDefault());
  }); //prevent their default behavior- refreshing the page on submit
  setEventListeners(formEl, settings);
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__error_visible",
});
