const POPUP_CLASS = "popup";
const CLOSE_BUTTON_CLASS = "popup__close-button";

class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_open");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_open");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (event) => {
      if (
        event.target.classList.contains(POPUP_CLASS) ||
        event.target.classList.contains(CLOSE_BUTTON_CLASS)
      ) {
        this.close();
      }
    });
  }
}

export { Popup };
