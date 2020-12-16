export class FormValidation {
    constructor(settings, formElement) { 
    this._formElement = formElement;
    this._settings = settings;
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
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
        if (this._formElement.checkValidity()) {
            this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
        else {
            this._buttonElement.classList.add(this._settings.inactiveButtonClass);
            this._buttonElement.disabled = true;
        }
    }

    _setEventListeners() {
        const inputElements = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        inputElements.forEach((input) => {
        input.addEventListener('input', () =>{
        this._checkInputValidity(input);
        this._toggleButtonElement(this._buttonElement);
                });
            });
        this._toggleButtonElement(this._formElement, this._buttonElement);
    };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            });
        this._setEventListeners();
    };
};


