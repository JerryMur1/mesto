import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {  
    
    constructor(popupSelector, {submitFormFunc}) {
        super(popupSelector)
        this._submitFormFunc = submitFormFunc
        this.form = this._popupSelector.querySelector('.popup__content')
    }



    getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__name')
        this._inputValues = {};
        this._inputList.forEach(item => {
        this._inputValues[item.name] = item.value;
        })
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupSelector.addEventListener('submit', this._submitFormFunc.bind(this))
    }

    close() {
        super.close()
        this.form.reset();
    }
}