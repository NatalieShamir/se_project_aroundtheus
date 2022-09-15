//Creates a Card with Text and an Image Link

export class Card {
  constructor(
    { data, userId, handleCardClick, handleLikeClick, handleDeleteClick },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._cardSelector = cardSelector;
    this._cardElement = this._getTemplate();
    this._cardLikesAmount = this._cardElement.querySelector(
      ".card__likes-amount"
    );

    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardDeleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
  }

  getId() {
    return this._id;
  } //gets identifier from the constructor

  _getTemplate() {
    const card = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return card;
  }

  //Private Method for Adding Event Listeners

  _setEventListeners() {
    const likeCardButton =
      this._cardElement.querySelector(".card__like-button");
    const deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    const cardImage = this._cardElement.querySelector(".card__image");
    likeCardButton.addEventListener("click", () => this._handleLikeClick());
    deleteCardButton.addEventListener("click", () =>
      this._handleDeleteClick(this)
    );
    cardImage.addEventListener("click", () =>
      this._handleCardClick(this._link, this._name)
    );
  }

  removeCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  setLikes = (newLikes) => {
    this._likes = newLikes;

    const likesAmount = this._likes.length;
    this._cardLikesAmount.textContent = likesAmount;

    const cardIsLikedByCurrentUser = this.isLiked();

    if (cardIsLikedByCurrentUser) {
      this._cardLikeButton.classList.add("card__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_active");
    }
  };

  isLiked() {
    return this._likes.find((user) => user._id === this._userId);
  }

  getView() {
    this._setEventListeners();

    this._cardImage.style.backgroundImage = `url(${this._link})`;
    this._cardTitle.textContent = this._name;

    this.setLikes(this._likes);

    if (this._userId !== this._ownerId) {
      this._cardDeleteButton.style.display = "none";
    }

    return this._cardElement;
  }
}
