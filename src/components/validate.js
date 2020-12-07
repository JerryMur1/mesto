export class FormValidation {
    constructor(settings, formElement) { 
    this._formElement = formElement;
    this._settings = settings;
    }

    _checkInputValidity (input){
        if (input.checkValidity()) {
            this._hideError(input);
        }
        else {
            this._showError(input);
        }

    };

_showError(input){
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._settings.inputErrorClass);
}
_hideError(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(this._settings.inputErrorClass);
};



    _toggleButtonElement() {
        const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
        if (this._formElement.checkValidity()) {
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.disabled = false;
        }
        else {
            buttonElement.classList.add(this._settings.inactiveButtonClass);
            buttonElement.disabled = true;
        }
    }

    _setEventListeners() {
        const inputElements = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
        inputElements.forEach((input) => {
        input.addEventListener('input', () =>{
        this._checkInputValidity(input);
        this._toggleButtonElement(buttonElement);
                });
            });
        this._toggleButtonElement(this._formElement, buttonElement);
    };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            });
        this._setEventListeners();
    };
    
};


