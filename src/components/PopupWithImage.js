import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__preview-image");
    this._caption = this._popupElement.querySelector(".popup__preview-caption");
  }
  open(link, name) {
    super.open();

    this._image.src = link;
    this._image.alt = "Clicked-on image enlarged";
    this._caption.textContent = name;
  }
}
