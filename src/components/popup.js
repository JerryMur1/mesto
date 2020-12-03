export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._closeButton = document.querySelectorAll('.button_type_close')
    }

    open() {
        this._popupSelector.classList.add('popup_is-opened');
        document.addEventListener("keydown", this._handleEscClose.bind(this));
        
    }

    close() {
        this._popupSelector.classList.remove('popup_is-opened');
        document.removeEventListener("keydown", this._handleEscClose.bind(this))
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClose(evt) {
        if (evt.target === this._popupSelector) {
            this.close();
        }
    }
    setEventListeners() {

        this._closeButton.forEach(item =>{
            item.addEventListener('click', this.close.bind(this));
        })
        document.addEventListener('keydown', this._handleEscClose.bind(this))
        this._popupSelector.addEventListener('click', this._handleOverlayClose.bind(this))
      
    }

}