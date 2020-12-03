import  { Popup } from "./popup.js";

export class PopupWithImage extends Popup { 
    constructor(popupSelector) {
        super(popupSelector)

    }


    open(name, link) {
        this._popupSelector.querySelector('.popup__subtitle').textContent = name;
        this._popupSelector.querySelector('.popup__image').src = link;
        this._popupSelector.querySelector(".popup__image").alt = link;
        super.open();   
    }


}