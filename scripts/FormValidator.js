class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const { inputErrorClass, errorClass } = this._settings;

    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError(inputElement) {
    const { inputErrorClass, errorClass } = this._settings;

    const errorElement = this._formElement.querySelector(
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
    const { inputSelector } = this._settings;
    this.inputElements = [...this._formElement.querySelectorAll(inputSelector)];
    this.inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputElements);
      });
    });
  }

  _hasValidInputs() {
    this.inputElements.every(
      (inputElement) => inputElement.validity.valid === true
    );
  }

  _toggleButtonState() {
    const { inactiveButtonClass } = this._settings;
    const buttonElement = this._formElement.querySelector(submitButtonSelector);

    if (this._hasValidInputs()) {
      buttonElement.disabled = false;
      buttonElement.classList.remove(inactiveButtonClass);
    } else {
      buttonElement.disabled = true;
      buttonElement.classList.add(inactiveButtonClass);
    }
  }

  resetValidation() {
    this.inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState();
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(formElement, pageSettings);
  }
}

export default FormValidator;
//const settings = {
//inputSelector: ".popup__form-input",
//submitButtonSelector: ".popup__form-button",
//inactiveButtonClass: "popup__form-button_disabled",
//inputErrorClass: "popup__form-input_type_error",
//errorClass: "popup__form-error_visible",
//};

//const editForm = document.querySelector(".popup__form");

//const addCardForm = document.querySelector(".popup__form");

//const editFormValidator = new FormValidator(settings, editForm);

//const addCardFormValidator = new FormValidator(settings, addCardForm);
