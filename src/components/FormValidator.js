class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._popupFormButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const { inputErrorClass, errorClass } = this._settings;
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
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
        this._toggleButtonState();
      });
    });
  }

  _isAllInputsValid() {
    return this.inputElements.every(
      (inputElement) => inputElement.validity.valid === true
    );
  }

  _toggleButtonState() {
    const inactiveButtonClass = this._settings.inactiveButtonClass;
    const buttonElement = this._popupFormButton;

    if (this._isAllInputsValid()) {
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
    this._setEventListeners();
  }
}
export default FormValidator;
