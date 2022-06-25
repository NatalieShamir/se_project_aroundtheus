const popupPreviewImage = document.querySelector(".popup__preview-image");
const popupPreviewCaption = document.querySelector(".popup__preview-caption");
const addPreviewPopup = document.querySelector(".popup_type_preview");

function openPopup(popup) {
  popup.classList.add("popup_open");
  popup.addEventListener("mousedown", closePopupOnRemoteClick);
  document.addEventListener("keydown", handleKeyDown);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  popup.removeEventListener("mousedown", closePopupOnRemoteClick);
  document.removeEventListener("keydown", handleKeyDown);
}

function closePopupOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function handleKeyDown(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  }
}

export {
  openPopup,
  closePopup,
  addPreviewPopup,
  popupPreviewImage,
  popupPreviewCaption,
};
