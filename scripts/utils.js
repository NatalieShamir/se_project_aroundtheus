export const popupPreviewImage = document.querySelector(
  ".popup__preview-image"
);
export const popupPreviewCaption = document.querySelector(
  ".popup__preview-caption"
);
export const addPreviewPopup = document.querySelector(".popup_type_preview");

export default function openPopup(popup) {
  popup.classList.add("popup_open");
  popup.addEventListener("mousedown", closePopupOnRemoteClick);
  document.addEventListener("keydown", handleKeyDown);
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
