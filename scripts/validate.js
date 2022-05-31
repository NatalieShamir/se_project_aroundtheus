function showInputError(input, formEl, { errorClass }) {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
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

function hasValidInputs(inputList) {
  inputList.every((input) => input.validity.valid === true);
}

function toggleButtonState(inputList, button, settings) {
  if (hasValidInputs(inputList)) {
    button.disabled = false;
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
  }
}

function setEventListeners(formEl, settings) {
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  const button = formEl.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(formEl, input, settings);
      toggleButtonState(formEl, button, settings);
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
  errorClass: "popup__form-error_visible",
});
