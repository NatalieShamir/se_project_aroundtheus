export class Section {
  constructor({ renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((data) => {
      this._renderer(data);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
