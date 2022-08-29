export const settings = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-error_visible",
};

//Modals
export const editProfilePopup = document.querySelector(
  ".popup_type_edit-profile"
);
export const addCardPopup = document.querySelector(".popup_type_add-card");
export const changeAvatarPopup = document.querySelector(
  ".popup_type_avatar-change"
);
export const previewImagePopup = document.querySelector(".popup_type_preview");

//Forms
export const editProfileForm = editProfilePopup.querySelector(
  ".popup__form_type_edit"
);
export const addCardForm = addCardPopup.querySelector(
  ".popup__form_type_add-card"
);
export const avatarForm = changeAvatarPopup.querySelector(
  ".popup__form_type_avatar-change"
);

//Declarations
export const initialCards = [
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

//Buttons and Other DOM Elements
export const openEditProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const openAddCardButton = document.querySelector(".profile__add-button");
export const avatarElement = document.querySelector(".profile__image");

//Inputs
export const inputNameValue = document.querySelector(
  ".popup__form-input_type_name"
);
export const inputJobValue = document.querySelector(
  ".popup__form-input_type_job"
);

//Templates
export const cardTemplateSelector = "#card-template";

//Wrappers
export const cardsGallery = document.querySelector(".cards__gallery");
