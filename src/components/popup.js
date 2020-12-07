export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this.closeButton = this._popupSelector.querySelector('.button_type_close');
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupSelector.classList.add('popup_is-opened');
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_is-opened');
        document.removeEventListener("keydown", this._handleEscClose)
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
        this.closeButton.addEventListener('click', this.close.bind(this));
        this._popupSelector.addEventListener('click', this._handleOverlayClose)
    }
}