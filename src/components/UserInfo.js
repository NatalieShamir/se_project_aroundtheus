export class UserInfo {
  constructor({
    profileNameSelector,
    profileJobSelector,
    profileAvatarSelector,
  }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    const name = this._profileName.textContent;
    const job = this._profileJob.textContent;
    return {
      name,
      job,
    };
  }

  setUserInfo(name, job, avatar) {
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
    this._profileAvatar.style.backgroundImage = `url(${avatar})`;
  }
}
