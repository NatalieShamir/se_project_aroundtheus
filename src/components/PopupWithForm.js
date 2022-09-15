import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._formInput = this._formElement.querySelectorAll(".popup__form-input");
    this._formSubmitButton = this._popupElement.querySelector(
      ".popup__form-button"
    );
    this._initialButtonText = this._formSubmitButton.textContent;
  }

  _getInputValues() {
    const values = {};

    const inputs = [...this._formInput];

    inputs.forEach((input) => {
      const key = input.name;
      const value = input.value;

      values[key] = value;
    });

    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const valuesFromForm = this._getInputValues();
      this._handleSubmit(valuesFromForm);
    });
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler;
  }

  changeFormButtonText(textType) {
    const formButton = this._formSubmitButton;
    if (textType === "saving") {
      formButton.textContent = "Saving...";
    }

    if (textType === "initial") {
      formButton.textContent = this._initialButtonText;
    }
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
