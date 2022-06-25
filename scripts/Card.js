import {
  openPopup,
  addPreviewPopup,
  popupPreviewImage,
  popupPreviewCaption,
} from "./utils.js";
//Creates a Card with Text and an Image Link

export class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  //Private Method for Adding Event Listeners

  _setEventListeners() {
    const likeCardButton =
      this._cardElement.querySelector(".card__like-button");
    const deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    const cardImage = this._cardElement.querySelector(".card__image");
    likeCardButton.addEventListener("click", this._handleLikeIcon);
    deleteCardButton.addEventListener("click", this._handleDeleteCard);
    cardImage.addEventListener("click", () =>
      this._handlePreviewImage(this._data)
    );
  }

  //Private Methods for Each One of the Handlers

  _handleLikeIcon = (evt) =>
    evt.target.classList.toggle("card__like-button_active");

  _handleDeleteCard = () => this._cardElement.remove();

  _handlePreviewImage = () => {
    openPopup(addPreviewPopup);
    popupPreviewImage.src = this._link;
    popupPreviewImage.alt = `Photo of ${this._name}`;
    popupPreviewCaption.textContent = this._name;
  };

  //Returns a Fully Functional Card Element Populated with Data

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);

    const cardTitle = this._cardElement.querySelector(".card__title");
    const cardImage = this._cardElement.querySelector(".card__image");

    cardTitle.textContent = this._name;
    cardImage.style.backgroundImage = `url(${this._link})`;

    this._setEventListeners();
    return this._cardElement;
  };
}
