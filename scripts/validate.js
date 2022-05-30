function showError(input) {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
  input.classList.add("popup__form-input_theme_error");
}

function hideError(input) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove("popup__form-input_theme_error");
}

function checkValidity(input) {
  if (input.validity.valid) {
    hideError(input);
  } else {
    showError(input);
  }
}

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

function setEventListeners(formEl, settings) {
  const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
  const button = formEl.querySelector(".popup__form-button");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkValidity(input);
      toggleButtonState(inputs, button);
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

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
