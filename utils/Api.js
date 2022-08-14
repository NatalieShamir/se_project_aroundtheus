class Api {
  constructor(options) {
    this._baseUrl = options._baseUrl;
    this._headers = options._headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + "users/me/", {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  getCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  editProfile() {
    return (fetch(this._baseUrl + "users/me"),
    {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: "another user name",
        about: "another user about",
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: " 493dfbd5-914b-4624-a274-ddbc55b172ae",
    "Content-Type": "application/json",
  },
});
