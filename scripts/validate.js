
popUpAdd.addEventListener("click", closeByPopUp);
popUpEdit.addEventListener("click", closeByPopUp);
windowModall.addEventListener("click", closeByPopUp);
const keyHandle = (evt) => {
    if (evt.key === 'Escape') {
        windowModall.classList.remove('popup_is-opened');
        popUpEdit.classList.remove('popup_is-opened');
        popUpAdd.classList.remove('popup_is-opened');
    }
};
document.addEventListener("keydown", keyHandle);

function showError(formElement, input) {
const errorElement = formElement.querySelector(`#${input.id}-error`);
errorElement.textContent = input.validationMessage;
input.classList.add('popup__content_state_invalid');
}
function hideError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
errorElement.textContent = '';
input.classList.remove('popup__content_state_invalid');
};

function checkInputValidity(formElement, input) {
    if (input.checkValidity()) {
        hideError(formElement, input);
    }
    else {
        showError(formElement, input);
    }
};



function toggleButtonElement(formElement, buttonElement) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove("button_type_invalid");
        buttonElement.disabled = false;
    }
    else {
        buttonElement.classList.add("button_type_invalid");
        buttonElement.disabled = true;
    }
}


function setEventListeners(formElement) {
    const inputElements = Array.from(formElement.querySelectorAll(".popup__name"));
    const buttonElement = formElement.querySelector(".button_type_save");
    inputElements.forEach((input) => {
    input.addEventListener('input', (evt)=> {
    checkInputValidity(formElement, evt.target);
    toggleButtonElement(formElement, buttonElement);
            });
        });
        toggleButtonElement(formElement, buttonElement);
    };
function enableValidation() {
    const formElements = Array.from(document.querySelectorAll(".popup__content"));
    formElements.forEach(form => {
        form.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            });
        setEventListeners(form);
});
}


enableValidation();
