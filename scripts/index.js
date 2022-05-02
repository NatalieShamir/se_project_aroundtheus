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
const popup = document.querySelector(".popup");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input_type_name");
const inputJob = document.querySelector(".popup__form-input_type_job");

//Buttons and Other DOM Elements
const closeEditProfileButton = document.querySelector(".popup__close-button");
const openEditProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

//Functions
function openPopup() {
  popup.classList.add("popup_open");

  const profileNameText = profileName.textContent;
  const profileJobText = profileJob.textContent;

  inputName.value = profileNameText;
  inputJob.value = profileJobText;
}

function onSubmit(event) {
  event.preventDefault();

  const inputNameValue = inputName.value;
  const inputJobValue = inputJob.value;

  profileName.textContent = inputNameValue;
  profileJob.textContent = inputJobValue;

  closePopup();
}

function closePopup() {
  popup.classList.remove("popup_open");
}

//Event Handlers
openEditProfileButton.addEventListener("click", openPopup);
form.addEventListener("submit", onSubmit);
closeEditProfileButton.addEventListener("click", closePopup);

const templateGalleryItem = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const gallery = document.querySelector(".cards__gallery");
const galleryItem = templateGalleryItem.cloneNode(true);
const title = galleryItem.querySelector(".card__title");
const image = galleryItem.querySelector("card__image");

title.textContent("123");
image.style.backgroundImage = "url(123)";
