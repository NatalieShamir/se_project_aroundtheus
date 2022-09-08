import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
  }

  _getInputValues() {
    const values = {};

    const inputs = [
      ...this._formElement.querySelectorAll(".popup__form-input"),
    ];

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

  close() {
    super.close();
    this._formElement.reset();
  }
}
