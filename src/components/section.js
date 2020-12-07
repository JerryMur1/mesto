export class Section {
    constructor({items, renderer}, containerSelector) {
        this._containerSelector = containerSelector;
        this._items = items;
        this._renderer = renderer;
    }
    render() {
        this._items.reverse().forEach((item) => {
            this._renderer(item)
        });
    }
    addItem(element) {
        this._containerSelector.prepend(element);
    }
    
}