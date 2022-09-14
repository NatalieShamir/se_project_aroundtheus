import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(link, name) {
    super.open();
    const image = this._popupElement.querySelector(".popup__preview-image");
    const caption = this._popupElement.querySelector(".popup__preview-caption");

    image.src = link;
    image.alt = "Clicked-on image enlarged";
    caption.textContent = name;
  }
}
