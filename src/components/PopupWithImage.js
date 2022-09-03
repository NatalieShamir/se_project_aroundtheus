import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  /*   constructor(popupSelector) {
    super(popupSelector);
  } */

  open(link, name) {
    super.open();
    const image = this._popupElement.querySelector(".popup__preview-image");
    const caption = this._popupElement.querySelector(".popup__preview-caption");

    image.src = link;
    caption.textContent = name;
  }
}
