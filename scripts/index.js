const openEditProfileButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeEditProfileButton = document.querySelector(".popup__close-button");
const inputName = document.querySelector(".popup__form-input_type_name");
const inputAboutme = document.querySelector(".popup__form-input_type_aboutme");
const profileName = document.querySelector("profile__title");
const profileAboutme = document.querySelector("profile__subtitle");

//console.log(openEditProfileButton);
//console.log(popup);
//console.log(closeEditProfileButton);

openEditProfileButton.addEventListener("click", function () {
  popup.classList.add(popup_open);

  const profileNameText = profileName.textContent;
  const profileAboutmeText = profileAboutme.textContent;

  inputName.value = profileNameText;
  inputAboutme.value = profileAboutmeText;
});

closeEditProfileButton.addEventListener("click", function () {
  popup.classList.remove(popup_open);
});
