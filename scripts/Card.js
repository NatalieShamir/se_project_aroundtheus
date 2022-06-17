class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  _addCardImageEventListener(cardImage) {
    cardImage.addEventListener("click", () => {
      openPopup(addPreviewPopup);
      popupPreviewImage.src = this._link;
      popupPreviewImage.alt = `Photo of ${this._name}`;
      popupPreviewCaption.textContent = this._name;
    });
  }

  _addDeleteCardEventListener(cardElement, deleteCardButton) {
    deleteCardButton.addEventListener("click", () => {
      cardElement.remove();
    });
  }

  _addLikeCardEventListener(likeCardButton) {
    likeCardButton.addEventListener("click", () => {
      likeCardButton.classList.toggle("card__like-button_active");
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

    this._addDeleteCardEventListener(cardElement, deleteCardButton);
    this._addLikeCardEventListener(likeCardButton);
    this._addCardImageEventListener(cardImage, cardData);

    return cardElement;
  };
}

//function generateCard(cardData) {
//  const cardElement = cardTemplate.cloneNode(true);

// const cardTitle = cardElement.querySelector(".card__title");
// const cardImage = cardElement.querySelector(".card__image");
// const deleteCardButton = cardElement.querySelector(".card__delete-button");
// const likeCardButton = cardElement.querySelector(".card__like-button");

// cardTitle.textContent = cardData.name;
// cardImage.style.backgroundImage = `url(${cardData.link})`;

// addDeleteCardEventListener(cardElement, deleteCardButton);

// addLikeCardEventListener(likeCardButton);

//  addCardImageEventListener(cardImage, cardData);

//  return cardElement;
//  }
