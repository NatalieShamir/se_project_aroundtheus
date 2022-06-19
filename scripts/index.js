import FormValidator from "./FormValidator";
import { openPopup } from "./utils";

const settings = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-error_visible",
};

//Form Validator Instances
const editProfileFormValidator = new FormValidator(settings, editProfileForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

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
const editProfilePopup = document.querySelector(".popup_type_edit-profile");
const addCardPopup = document.querySelector(".popup_type_add-card");
const addPreviewPopup = document.querySelector(".popup_type_preview");

//Forms
const editProfileForm = editProfilePopup.querySelector(
  ".popup__form_type_edit"
);
const closeEditProfileButton = document.querySelector(
  ".popup__close-button_close_profile"
);
const openAddCardButton = document.querySelector(".profile__add-button");
const addCardForm = addCardPopup.querySelector(".popup__form_type_add_card");

//Buttons and Other DOM Elements
const openEditProfileButton = document.querySelector(".profile__edit-button");
const closeAddCardButton = document.querySelector(
  ".popup__close-button_close_add-card"
);
const closePopupPreviewButton = document.querySelector(
  ".popup__close-button_close_preview"
);
const createCartButton = document.querySelector(".popup__form-button_add-card");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

//Inputs
const inputName = document.querySelector(".popup__form-input_type_name");
const inputJob = document.querySelector(".popup__form-input_type_job");
const cardTitleInput = document.querySelector(".popup__form-input_type_title");
const cardLinkInput = document.querySelector(".popup__form-input_type_image");

//Templates
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

//Wrappers
const cardsGallery = document.querySelector(".cards__gallery");

//Image Modal Elements
const cardImage = document.querySelector(".card__image");
const popupPreviewImage = document.querySelector(".popup__preview-image");
const popupPreviewCaption = document.querySelector(".popup__preview-caption");

//Functions

function closePopup(popup) {
  popup.classList.remove("popup_open");
  popup.removeEventListener("mousedown", closePopupOnRemoteClick);
  document.removeEventListener("keydown", handleKeyDown);
}

function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function onSubmitEditProfile(event) {
  event.preventDefault();

  const inputNameValue = inputName.value;
  const inputJobValue = inputJob.value;

  profileName.textContent = inputNameValue;
  profileJob.textContent = inputJobValue;

  closePopup(editProfilePopup);
}

function generateCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  const likeCardButton = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = cardData.name;
  cardImage.style.backgroundImage = `url(${cardData.link})`;

  addDeleteCardEventListener(cardElement, deleteCardButton);

  addLikeCardEventListener(likeCardButton);

  addCardImageEventListener(cardImage, cardData);

  return cardElement;
}

function addDeleteCardEventListener(cardElement, deleteCardButton) {
  deleteCardButton.addEventListener("click", () => {
    cardElement.remove();
  });
}

function addLikeCardEventListener(likeCardButton) {
  likeCardButton.addEventListener("click", () => {
    likeCardButton.classList.toggle("card__like-button_active");
  });
}

function addCardImageEventListener(cardImage, cardData) {
  cardImage.addEventListener("click", () => {
    openPopup(addPreviewPopup);
    popupPreviewImage.src = cardData.link;
    popupPreviewImage.alt = `Photo of ${cardData.name}`;
    popupPreviewCaption.textContent = cardData.name;
  });
}

function renderCard(cardData) {
  const cardElement = generateCard(cardData);

  cardsGallery.prepend(cardElement);
}

initialCards.forEach(renderCard);

function closePopupOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function handleKeyDown(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  }
}

//Event Handlers
openEditProfileButton.addEventListener("click", () => {
  editProfileFormValidator.resetValidation();
  openPopup(editProfilePopup);
  fillProfileForm();
});
editProfilePopup.addEventListener("submit", onSubmitEditProfile);
closeEditProfileButton.addEventListener("click", () => {
  closePopup(editProfilePopup);
});
openAddCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  openPopup(addCardPopup);
});
closeAddCardButton.addEventListener("click", () => {
  closePopup(addCardPopup);
});

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderCard({ name: cardTitleInput.value, link: cardLinkInput.value });
  closePopup(addCardPopup);
  addCardForm.reset();
  const addCardFormInputElements = [cardTitleInput, cardLinkInput];
  toggleButtonState(addCardFormInputElements, createCartButton, pageSettings);
});

closePopupPreviewButton.addEventListener("click", () => {
  closePopup(addPreviewPopup);
});
