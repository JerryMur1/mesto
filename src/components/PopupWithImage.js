import  { Popup } from "./popup.js";

export class PopupWithImage extends Popup { 
    constructor(popupSelector) {
        super(popupSelector)
this._popupImage = this._popupSelector.querySelector('.popup__image');
this._popupSubtitle = this._popupSelector.querySelector('.popup__subtitle')
    }


    open(name, link) {
        this._popupSubtitle.textContent = name;
        this._popupImage.src = link;
        this._popupImage.alt = link;
        super.open();   
    }


}