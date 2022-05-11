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
const addPreview = document.querySelector(".popup_type_preview");

//Forms
const editForm = editProfilePopup.querySelector(".popup__form");
const addCardForm = addCardPopup.querySelector(".popup__form");

//Buttons and Other DOM Elements
const openEditProfileButton = document.querySelector(".profile__edit-button");
const closeEditProfileButton = document.querySelector(
  ".popup__close-button_close_profile"
);
const openAddCardButton = document.querySelector(".profile__add-button");
const closeAddCardButton = document.querySelector(
  ".popup__close-button_close_add-card"
);
const closePopupPreviewButton = document.querySelector(
  ".popup__close-button_close_preview"
);
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
function openEditProfilePopup() {
  editProfilePopup.classList.add("popup_open");

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
  editProfilePopup.classList.remove("popup_open");
}

function generateCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const deleteCardButton = cardElement.querySelector(".card__delete-button");
  const likeCardButton = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = cardData.name;
  cardImage.style.backgroundImage = `url(${cardData.link})`;

  likeCardButton.addEventListener("click", () => {
    likeCardButton.classList.toggle("card__like-button_active");
  });

  deleteCardButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardElement.querySelector(".card__image").addEventListener("click", () => {
    openPreviewPopup();
    popupPreviewImage.src = cardData.link;
    popupPreviewCaption.textContent = cardData.name;
  });

  cardsGallery.append(cardElement);
}

initialCards.forEach(generateCard);

function openAddCardPopup() {
  addCardForm.reset();
  addCardPopup.classList.add("popup_open");
}

function closeAddCardPopup() {
  addCardPopup.classList.remove("popup_open");
}

function openPreviewPopup() {
  addPreview.classList.add("popup_open");
}

function closePreviewPopup() {
  addPreview.classList.remove("popup_open");
}

//Event Handlers
editProfilePopup.addEventListener("submit", onSubmitEditProfile);
openEditProfileButton.addEventListener("click", openEditProfilePopup);
closeEditProfileButton.addEventListener("click", closeEditProfilePopup);
openAddCardButton.addEventListener("click", openAddCardPopup);
closeAddCardButton.addEventListener("click", closeAddCardPopup);
addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generateCard({ name: cardTitleInput.value, link: cardLinkInput.value });
  closeAddCardPopup();
});
closePopupPreviewButton.addEventListener("click", closePreviewPopup);
