
function showError(formElement, input, {inputErrorClass, errorClass}) {

const errorElement = formElement.querySelector(`#${input.id}-${errorClass}`);
errorElement.textContent = input.validationMessage;
input.classList.add(inputErrorClass);
}
function hideError(formElement, input, {inputErrorClass, errorClass}) {
    const errorElement = formElement.querySelector(`#${input.id}-${errorClass}`);
errorElement.textContent = '';
input.classList.remove(inputErrorClass);
};

function checkInputValidity(formElement, input, {inputErrorClass, errorClass}) {
    if (input.checkValidity()) {
        hideError(formElement, input, {inputErrorClass, errorClass});
    }
    else {
        showError(formElement, input, {inputErrorClass, errorClass});
    }
};



function toggleButtonElement(formElement, buttonElement, {inactiveButtonClass}) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    }
    else {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
}


function setEventListeners(formElement, {inputSelector, submitButtonSelector, ...rest}) {
    const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputElements.forEach((input) => {
    input.addEventListener('input', (evt) => {
    checkInputValidity(formElement, evt.target, {...rest});
    toggleButtonElement(formElement, buttonElement, {...rest});
            });
        });
        toggleButtonElement(formElement, buttonElement, {...rest});
    };
function enableValidation({formSelector, ...rest}) {
    const formElements = Array.from(document.querySelectorAll(formSelector));
    formElements.forEach(form => {
        form.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            });
        setEventListeners(form, {...rest});
    });
}

enableValidation({
    formSelector: '.popup__content',
    inputSelector: '.popup__name',
    submitButtonSelector: '.button_type_save',
    inactiveButtonClass: 'button_type_invalid',
    inputErrorClass: 'popup__content_state_invalid',
    errorClass: 'error'
});
