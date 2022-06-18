class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  _setEventListeners() {
    likeCardButton.addEventListener("click", () => {
      likeCardButton.classList.toggle("card__like-button_active");
    });
    deleteCardButton.addEventListener("click", () => {
      cardElement.remove();
    });
    cardImage.addEventListener("click", () => {
      openPopup(addPreviewPopup);
      popupPreviewImage.src = cardData.link;
      popupPreviewImage.alt = `Photo of ${cardData.name}`;
      popupPreviewCaption.textContent = cardData.name;
    });
  }

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);

    const cardTitle = this._cardElement.querySelector(".card__title");
    const cardImage = this._cardElement.querySelector(".card__image");
    const deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    const likeCardButton =
      this._cardElement.querySelector(".card__like-button");

    cardTitle.textContent = this._name;
    cardImage.style.backgroundImage = `url(${this._link})`;

    return cardElement;
  };
}
