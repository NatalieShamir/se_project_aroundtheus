const pageSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-error_visible",
};

function showInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(settings.errorClass);
}

function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.errorClass);
}

function checkInputValidity(formElement, inputElement, settings) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, settings);
  } else {
    showInputError(formElement, inputElement, settings);
  }
}

function hasValidInputs(inputElements) {
  inputElements.every((input) => input.validity.valid === true);
}
function toggleButtonState(inputElements, buttonElement, settings) {
  if (hasValidInputs(inputElements)) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  }
}

function setEventListeners(formElement, settings) {
  const inputElements = [
    ...formElement.querySelectorAll(settings.inputSelector),
  ];
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputElements, buttonElement, settings);
    });
  });

  toggleButtonState(inputElements, buttonElement, settings);
}

function enableValidation(settings) {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
}

enableValidation(pageSettings);
