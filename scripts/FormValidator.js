class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
  }

  _showInputError(inputElement) {
    const { inputErrorClass, errorClass } = this.settings;

    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError(inputElement) {
    const { inputErrorClass, errorClass } = this.settings;

    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  }

  _setEventListeners() {
    const { inputSelector, submitButtonSelector } = this.settings;
    const inputElements = [...this.formElement.querySelectorAll(inputSelector)];
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputElements);
      });
    });
  }

  _hasValidInputs = (inputElements) =>
    inputElements.every((inputElement) => inputElement.validity.valid === true);

  _toggleButtonState(inputElements) {
    const { inactiveButtonClass } = this.settings;
    const buttonElement = this.formElement.querySelector(submitButtonSelector);

    if (this._hasValidInputs(inputElements)) {
      buttonElement.disabled = false;
      buttonElement.classList.remove(inactiveButtonClass);
    } else {
      buttonElement.disabled = true;
      buttonElement.classList.add(inactiveButtonClass);
    }
  }

  enableValidation() {
    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(formElement, pageSettings);
  }
}

const settings = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-error_visible",
};

const formElement = document.querySelector(".popup__form");

const formValidator = new FormValidator(settings, formElement);
