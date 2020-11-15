import {Card} from "./card.js";
import {FormValidation} from "./validate.js";

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const editButton = document.querySelector(".button_type_edit");
const addButton = document.querySelector(".button_type_add");
const windowModall = document.querySelector(".popup_modal");

const popUpAdd = document.querySelector(".popup_add");

const popUpEdit = document.querySelector(".popup_edit");

const nameInput = document.querySelector(".popup__name_type_title");
const jobInput = document.querySelector(".popup__name_type_subtitle");
const newPlace = document.querySelector(".popup__place_type_title");
const newImage = document.querySelector(".popup__place_type_subtitle");
const titleName = document.querySelector(".profile__title");
const titleJob = document.querySelector(".profile__subtitle");


const formElement = document.querySelector(".popup__container");
const formElementAdd = document.querySelector(".popup__container_add");



function keyHandle(evt) {
    const activePopup = document.querySelector('.popup_is-opened');

    if (evt.key === 'Escape') {
        closePopUp(activePopup);
    }
};





const openPopUp = (popUp) => {
    popUp.classList.add("popup_is-opened");
    document.addEventListener("keydown", keyHandle)
};

const closePopUp = (popUp) => {
    popUp.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", keyHandle)
};


function submitForm (evt) {
    evt.preventDefault(); 
    
    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;

    closePopUp(popUpEdit);
};

function submitFormAdd (evt) {
    evt.preventDefault();
    const newItem = getItems({
        name: newPlace.value,
        link: newImage.value
    });
    
    
    list.prepend(newItem);
    closePopUp(popUpAdd);
}


const renderList = () => {
    const items = initialCards.map(element => getItems(element));
    list.prepend(...items);
};

const LIST_ITEM_TEMPLATE = "#template";
const list = document.querySelector(".elements");
function getItems(data) {
    const listItem = new Card(data, LIST_ITEM_TEMPLATE);
    return listItem.render(list);
};

const formSelector = ".popup__content";
const formElements = Array.from(document.querySelectorAll(formSelector));
formElements.forEach(formElement => {
const formValidation = new FormValidation({
    inputSelector: '.popup__name',
    submitButtonSelector: '.button_type_save',
    inactiveButtonClass: 'button_type_invalid',
    inputErrorClass: 'popup__content_state_invalid',
    errorClass: 'error'
}, formElement);

formValidation.enableValidation();
});

// form.enableValidation();
// const handleDeleteCard = (deleteButton) => {
//     const listItem = deleteButton.closest(".element");
//     listItem.remove();
// };


    // const handlePreviewPicture = (data) => {
    //     const windowSubtitle = document.querySelector(".popup__subtitle");
    //     const windowImage = document.querySelector(".popup__image");
    //     const windowModal = document.querySelector(".popup_modal")
    //     windowImage.src = data.link;
    //     windowSubtitle.textContent = data.name;
    //     openPopUp(windowModal);
    // };


    formElementAdd.addEventListener('submit', submitFormAdd);
    formElement.addEventListener('submit', submitForm);

    editButton.addEventListener("click", () => {
        nameInput.value = titleName.textContent;
        jobInput.value = titleJob.textContent;
        openPopUp(popUpEdit)
    });
    addButton.addEventListener("click", () => openPopUp(popUpAdd));
    popUpAdd.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
            closePopUp(popUpAdd);
        }
    });
    popUpEdit.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
            closePopUp(popUpEdit);
        }
    });
    windowModall.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup')) {
            closePopUp(windowModall);
        }
    });

    
    

renderList();




