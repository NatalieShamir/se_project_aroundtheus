const POPUP_CLASS = "popup";
const CLOSE_BUTTON_CLASS = "popup__close-button";

class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add(".popup_open");
  }

  close() {
    this._popupElement.classList.remove(".popup_open");
  }

  setEventListeners() {
    this._popupElement
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this.close;
      });
  }
}
