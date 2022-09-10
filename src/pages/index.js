import "./index.css";
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
  editProfilePopup,
  addCardPopup,
  changeAvatarPopup,
  avatarForm,
  previewImagePopup,
  changeAvatarButton,
  confirmDeletingWindowPopup,
  deleteCardForm,
} from "../scripts/constants.js";
import { api } from "../../utils/Api";

let userId;

Promise.all([api.getUserInfo(), api.getCards()]).then(([userData, cards]) => {
  userId = userData._id;
  userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
  section.renderItems(cards);
});

//Form Validator Instances
const editProfileFormValidator = new FormValidator(settings, editProfileForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);
const avatarFormValidator = new FormValidator(settings, avatarForm);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
deleteCardFormValidator.enableValidation();

const handleCardClick = (data) => {
  console.log(data);
  imagePopup.open(data);
};

const handleLikeClick = (cardElement) => {
  if (cardElement.isLiked()) {
    api.removeLike(cardElement.getId()).then((res) => {
      cardElement.setLikes(res.likes);
    });
  } else {
    api.addLike(cardElement.getId()).then((res) => {
      cardElement.setLikes(res.likes);
    });
  }
};

const handleDeleteClick = (cardElement) => {
  deleteCardPopupWithForm.open();

  deleteCardPopupWithForm.changeSubmitHandler(() => {
    api.deleteCard(cardElement.getId()).then(() => {
      cardElement.removeCard();
      deleteCardPopupWithForm.close();
    });
  });
};

const renderCard = (data) => {
  const cardElement = new Card(
    {
      data,
      userId,
      handleCardClick: () => handleCardClick(data),
      handleLikeClick: () => handleLikeClick(cardElement),
      handleDeleteClick: () => handleDeleteClick(cardElement),
    },
    cardTemplateSelector
  );

  const newCardElement = cardElement.getView();
  section.addItem(newCardElement);
};

//Section Class Instance
const section = new Section({ renderer: renderCard }, ".cards__gallery");

//Submit Handlers of Modals
const handleAddCardSubmit = ({ title, image }) => {
  addCardPopupWithForm.changeFormButtonText("saving");
  api.addCard(title, image).then((res) => {
    renderCard(res);
    addCardPopupWithForm.changeFormButtonText("initial");
    addCardPopupWithForm.close();
  });
};

const handleEditProfileSubmit = ({ name, job }) => {
  editProfilePopupWithForm.changeFormButtonText("saving");
  api.editProfile(name, job).then((res) => {
    userInfo.setUserInfo(res);
    editProfilePopupWithForm.changeFormButtonText("initial");
    editProfilePopupWithForm.close();
  });
};

const handleAvatarChangeSubmit = ({ image }) => {
  avatarChangePopupWithForm.changeFormButtonText("saving");
  api.editAvatar(image).then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    avatarChangePopupWithForm.changeFormButtonText("initial");
    avatarChangePopupWithForm.close();
  });
};

//PopupWithForm Class Instances
const addCardPopupWithForm = new PopupWithForm(
  addCardPopup,
  handleAddCardSubmit
);
addCardPopupWithForm.setEventListeners();

const editProfilePopupWithForm = new PopupWithForm(
  editProfilePopup,
  handleEditProfileSubmit
);
editProfilePopupWithForm.setEventListeners();

const avatarChangePopupWithForm = new PopupWithForm(
  changeAvatarPopup,
  handleAvatarChangeSubmit
);
avatarChangePopupWithForm.setEventListeners();

const deleteCardPopupWithForm = new PopupWithForm(
  confirmDeletingWindowPopup,
  handleDeleteClick
);
deleteCardPopupWithForm.setEventListeners();

//PopupWithImage Class Instance
const imagePopup = new PopupWithImage(previewImagePopup);
imagePopup.setEventListeners();

//UserInfo Class Instance
const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__subtitle",
  profileAvatarSelector: ".profile__image",
});

//Event Handlers
openEditProfileButton.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();
  inputNameValue.value = profileData.name;
  inputJobValue.value = profileData.job;
  editProfileFormValidator.resetValidation();
  editProfilePopupWithForm.open();
});
openAddCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopupWithForm.open();
});
changeAvatarButton.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarChangePopupWithForm.open();
});
