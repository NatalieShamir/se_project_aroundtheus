const openEditProfileButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeEditProfileButton = document.querySelector(".popup__close-button");
const inputName = document.querySelector(".popup__form-input_type_name");
const inputJob = document.querySelector(".popup__form-input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const form = document.querySelector(".popup__form");

function openPopup() {
  popup.classList.add("popup_open");

  const profileNameText = profileName.textContent;
  const profileJobText = profileJob.textContent;

  inputName.value = profileNameText;
  inputJob.value = profileJobText;
}

openEditProfileButton.addEventListener("click", openPopup);

function onSubmit(event) {
  event.preventDefault();

  const inputNameValue = inputName.value;
  const inputJobValue = inputJob.value;

  profileName.textContent = inputNameValue;
  profileJob.textContent = inputJobValue;

  closePopup();
}

form.addEventListener("submit", onSubmit);

closeEditProfileButton.addEventListener("click", closePopup);

function closePopup() {
  popup.classList.remove("popup_open");
}

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

const templateGalleryItem = document
  .querySelector(".card__template")
  .content.querySelector(".card");
const gallery = document.querySelector(".cards__gallery");
const galleryItem = templateGalleryItem.cloneNode(true);
const title = galleryItem.querySelector(".card__title");
const image = galleryItem.querySelector("card__image");
