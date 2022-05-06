//Declarations
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//Modals
const addCard = document.querySelector(".popup_type_add-card");
const addPreview = document.querySelector(".popup_type_preview");
const editProfile = document.querySelector(".popup_type_edit-profile");

//Forms
const editForm = editProfile.querySelector(".popup__form");
const addCardForm = addCard.querySelector(".popup__form");

//Buttons and Other DOM Elements
const openEditProfileButton = document.querySelector(".profile__edit-button");
const closeEditProfileButton = document.querySelector(".popup_close_profile");
const openAddCardButton = document.querySelector(".profile__add-button");
const closeAddCardButton = document.querySelector(".popup_close_add-card");
const closePopupPreviewButton = document.querySelector(".popup_close_preview");
//const deleteCardButton = document.querySelector(".card__delete-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

//Inputs
const inputName = document.querySelector(".popup__form-input_type_name");
const inputJob = document.querySelector(".popup__form-input_type_job");
const cardTitleInput = document.querySelector(".popup__form-input_type_title");
const cardLinkInput = document.querySelector(".popup__form-input_type_image");

//Wrappers
const cardsGallery = document.querySelector(".cards__gallery");

//Functions
function openEditProfilePopup() {
  editProfile.classList.add("popup_open");

  const profileNameText = profileName.textContent;
  const profileJobText = profileJob.textContent;

  inputName.value = profileNameText;
  inputJob.value = profileJobText;
}

function onSubmitEditProfile(event) {
  event.preventDefault();

  const inputNameValue = inputName.value;
  const inputJobValue = inputJob.value;

  profileName.textContent = inputNameValue;
  profileJob.textContent = inputJobValue;

  closeEditProfilePopup();
}

function closeEditProfilePopup() {
  editProfile.classList.remove("popup_open");
}

function createCardElement(card) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;

  return cardElement;
}

function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
}

function openAddCardModal() {
  addCard.classList.add("popup_open");
}

function closeAddCardPopup() {
  addCard.classList.remove("popup_open");
}

//function deleteCard() {
//deleteCardButton.classList.remove("card");
//}

//Event Handlers
editProfile.addEventListener("submit", onSubmitEditProfile);
openEditProfileButton.addEventListener("click", openEditProfilePopup);
closeEditProfileButton.addEventListener("click", closeEditProfilePopup);
openAddCardButton.addEventListener("click", openAddCardModal);
closeAddCardButton.addEventListener("click", closeAddCardPopup);
initialCards.forEach((card) => renderCard(card, cardsGallery));
addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const card = {
    name: cardTitleInput.value,
    link: cardLinkInput.value,
  };
  renderCard(card, cardsGallery);
  closeAddCardPopup();
});

//deleteCardButton.addEventListener("click", deleteCard);
