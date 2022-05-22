function enableValidation(settings) {
  const forms = Array.from(document.querySelectorAll(".popup__form"));
}

function preventDefaultFormBehavior(forms) {
  //is the function parameter defined correctly?
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
