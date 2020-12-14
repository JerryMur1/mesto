
import { Popup } from "./popup.js";

export class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleSubmitCallback) {
        super(popupSelector)
        this._popupForm = this._popupSelector.querySelector('.popup__content')
        this._handleSubmitCallback = handleSubmitCallback
    }
// setSubmitAction(submitAction){
// this._handleSubmitCallback = submitAction
// }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._handleSubmitCallback();
            this.close()
        })
    }
}