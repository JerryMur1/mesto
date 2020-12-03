

export class Card {
constructor({name, link, handleCardClick}, cardSelector) {
    this._name = name;
    this._image = link;
    this.handleCardClick = handleCardClick;
    this._template = document.querySelector(cardSelector).content.querySelector('.element');
    }

    _delete() {
        this._content.remove();
    }
    _like() {
        
        this._content.querySelector('.element__like').classList.toggle("element__like_active");
        
    }

    render() {
        this._content = this._template.cloneNode(true);
        
        this._content.querySelector(".element__title").textContent = this._name;
        this._content.querySelector(".element__image").src = this._image;
        this._content.querySelector(".element__image").alt = this._image;

        this._content.querySelector(".button_type_delete").addEventListener('click', () => this._delete());
        this._content.querySelector(".button_type_like").addEventListener('click', () => this._like());
        this._content.querySelector(".button_type_image").addEventListener('click', () => this.handleCardClick());
        // popupElement.addEventListener('click', () => this._handleClosePopup())

        return this._content;
    }

}