
import { Popup } from "./popup.js";

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupForm = this._popupSelector.querySelector('.popup__content')
    }
setSubmitAction(submitAction){
this._handleSubmitCallback = submitAction
}
    setEventListeners() {

        this._popupForm.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._handleSubmitCallback();
            this.close()
        })
        super.setEventListeners();
    }
}