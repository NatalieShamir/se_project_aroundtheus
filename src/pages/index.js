import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  settings,
  editProfileForm,
  openAddCardButton,
  addCardForm,
  initialCards,
  openEditProfileButton,
  inputNameValue,
  inputJobValue,
  cardTemplateSelector,
  cardsGallery,
} from "../scripts/constants.js";

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
