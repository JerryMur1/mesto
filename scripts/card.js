const popupImage = document.querySelector('.popup__image');
const popupElement = document.querySelector('.popup_modal');
const popupSubtitle = document.querySelector(".popup__subtitle");

export class Card {
constructor(data, cardSelector) {
    this._name = data.name;
    this._image = data.link;
    this._template = document.querySelector(cardSelector).content.querySelector('.element');
    }

    _delete() {
        this._content.remove();
    }
    _like() {
        
        this._content.querySelector('.element__like').classList.toggle("element__like_active");
        
    }
    _handleOpenPopup(){
        popupSubtitle.textContent = this._name;
        popupImage.src = this._image;
        popupElement.classList.add('popup_is-opened');
    }
    _handleClosePopup(){
        popupImage.src = '';
        popupElement.classList.remove('popup_is-opened');
    }

    render() {
        this._content = this._template.cloneNode(true);
        
        this._content.querySelector(".element__title").textContent = this._name;
        this._content.querySelector(".element__image").src = this._image;
        this._content.querySelector(".element__image").alt = this._image;



        this._content.querySelector(".button_type_delete").addEventListener('click', () => this._delete());
        this._content.querySelector(".button_type_like").addEventListener('click', () => this._like());
        this._content.querySelector(".button_type_image").addEventListener('click', () => this._handleOpenPopup());
        popupElement.addEventListener('click', () => this._handleClosePopup())

        return this._content;
    }

}