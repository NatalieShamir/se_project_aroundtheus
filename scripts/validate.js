const pageSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-error_visible",
};

function showInputError(formElement, inputElement, pageSettings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(pageSettings.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(pageSettings.errorClass);
}

function hideInputError(formElement, inputElement, pageSettings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(pageSettings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(pageSettings.errorClass);
}

function checkInputValidity(formElement, inputElement, pageSettings) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, pageSettings);
  } else {
    showInputError(formElement, inputElement, pageSettings);
  }
}

function hasValidInputs(inputElements) {
  return inputElements.every((input) => input.validity.valid === true);
}

function toggleButtonState(inputElements, buttonElement, pageSettings) {
  if (hasValidInputs(inputElements)) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(pageSettings.inactiveButtonClass);
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add(pageSettings.inactiveButtonClass);
  }
}

function setEventListeners(formElement, pageSettings) {
  const inputElements = [
    ...formElement.querySelectorAll(pageSettings.inputSelector),
  ];
  const buttonElement = formElement.querySelector(
    pageSettings.submitButtonSelector
  );
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, pageSettings);
      toggleButtonState(inputElements, buttonElement, pageSettings);
    });
  });

  toggleButtonState(inputElements, buttonElement, pageSettings);
}

function enableValidation(pageSettings) {
  const formElements = [
    ...document.querySelectorAll(pageSettings.formSelector),
  ];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, pageSettings);
  });
}

enableValidation(pageSettings);
