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
}

form.addEventListener("submit", onSubmit);

function closePopup() {
  popup.classList.remove("popup_open");
}

closeEditProfileButton.addEventListener("click", closePopup);
