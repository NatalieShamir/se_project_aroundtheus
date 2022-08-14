class Api {
  constructor(options) {
    this._baseUrl = options._baseUrl;
    this._headers = options._headers;
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: " 493dfbd5-914b-4624-a274-ddbc55b172ae",
    "Content-Type": "application/json",
  },
});
