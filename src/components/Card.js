//Creates a Card with Text and an Image Link

export class Card {
  constructor(
    data,
    userId,
    templateCardSelector,
    handleCardClick,
    handleLikeIcon
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
    this._handleCardClick = handleCardClick;
    this._handleLikeIcon = handleLikeIcon;
    this._userId = userId;
  }

  getId = () => {
    return this._id;
  };

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
      this._handleCardClick(this._link, this._name)
    );
  }

  _handleDeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  setLikes = (newLikes) => {
    this._likes = newLikes;

    const likesAmount = this._likes.length;
    this._cardElement.querySelector(".card__likes-amount").textContent =
      likesAmount;

    const cardIsLikedByCurrentUser = false;

    if (cardIsLikedByCurrentUser) {
      this._cardElement
        .querySelector(". card__like-button")
        .classList.toggle("card__like-button_active");
    }
  };

  //Returns a Fully Functional Card Element Populated with Data

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);

    const cardTitle = this._cardElement.querySelector(".card__title");
    const cardImage = this._cardElement.querySelector(".card__image");

    cardTitle.textContent = this._name;
    cardImage.style.backgroundImage = `url(${this._link})`;

    this._setEventListeners();

    this.setLikes(this._likes);

    return this._cardElement;
  };
}
