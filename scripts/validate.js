function showInputError(input, settings) {
  const { inputErrorClass } = settings;
  const error = input.validationMessage;
  const errorSpan = form.querySelector("#" + input.id + "-error");
  errorSpan.textContent = error;
  input.classList.add(inputErrorClass);
}

function hideInputError(input, settings) {
  const { inputErrorClass } = settings;
  const errorSpan = form.querySelector("#" + input.id + "-error");
  errorSpan.textContent = "";
  input.classList.remove(inputErrorClass);
}

function checkInputValidity(form, input, settings) {
  if (input.validity.valid) {
    hideInputError(input, form, settings);
  } else {
    showInputError(input, form, settings);
  }
}

function hasValidInputs(inputList) {
  inputList.every((input) => input.validity.valid === true);
}

function toggleButtonState(inputList, button, settings) {
  if (hasValidInputs(inputList)) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
  }
}

function setEventListeners(form, settings) {
  const inputList = [...form.querySelectorAll(settings.inputSelector)];
  const button = form.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(form, input, settings);
      toggleButtonState(form, button, settings);
    });
  });
}

function enableValidation(settings) {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
  });
  setEventListeners(form, settings);
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-error_visible",
};

enableValidation(config);
