import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

const settings = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-error_visible",
};

//Modals
const editProfilePopup = document.querySelector(".popup_type_edit-profile");
const addCardPopup = document.querySelector(".popup_type_add-card");

//Forms
const editProfileForm = editProfilePopup.querySelector(
  ".popup__form_type_edit"
);
const openAddCardButton = document.querySelector(".profile__add-button");
const addCardForm = addCardPopup.querySelector(".popup__form_type_add-card");

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

//Buttons and Other DOM Elements
const openEditProfileButton = document.querySelector(".profile__edit-button");

//Inputs
const inputNameValue = document.querySelector(".popup__form-input_type_name");
const inputJobValue = document.querySelector(".popup__form-input_type_job");

//Templates
const cardTemplateSelector = "#card-template";

//Wrappers
const cardsGallery = document.querySelector(".cards__gallery");

//Form Validator Instances
const editProfileFormValidator = new FormValidator(settings, editProfileForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

//Functions
const renderCard = (cardData) => {
  const cardElement = new Card(cardData, cardTemplateSelector, (link, name) => {
    imagePopup.open(link, name);
  });
  cardsGallery.prepend(cardElement.getCardElement());
};

const handleAddCardSubmit = (data) => {
  renderCard({ name: data["title"], link: data["image"] }, initialCards);
  addCardPopupWithForm.close();
};

const handleEditProfileSubmit = (data) => {
  userInfo.setUserInfo(data.name, data.job);

  editProfilePopupWithForm.close();
};

//PopupWithForm Class Instances
const addCardPopupWithForm = new PopupWithForm(
  ".popup_type_add-card",
  handleAddCardSubmit
);
addCardPopupWithForm.setEventListeners();

const editProfilePopupWithForm = new PopupWithForm(
  ".popup_type_edit-profile",
  handleEditProfileSubmit
);
editProfilePopupWithForm.setEventListeners();

//PopupWithImage Class Instance
const imagePopup = new PopupWithImage(".popup_type_preview");
imagePopup.setEventListeners();

//Section Class Instance
const section = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__gallery"
);
section.renderItems();

//UserInfo Class Instance
const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__subtitle",
});

//Event Handlers
openEditProfileButton.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();
  console.log("profileData", profileData);
  inputNameValue.value = profileData.name;
  inputJobValue.value = profileData.job;
  editProfileFormValidator.resetValidation();
  editProfilePopupWithForm.open();
});
openAddCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
});
