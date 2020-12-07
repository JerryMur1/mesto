import './index.css';
import {Card} from "../components/card.js";
import {FormValidation} from "../components/validate.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {Section} from "../components/section.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";

import {initialCards, editButton, addButton, 
    cardsElement, nameInput, 
    jobInput, newPlace, newImage, 
    formSelector} from '../utils/constants.js'


function clickCard({name, link}) {
    popupImage.open(name, link)
}
const popupImage = new PopupWithImage('.popup_modal');
popupImage.setEventListeners();
const cardsList = new Section({
    items: initialCards,
    renderer: ({name, link}) => createCard({name, link})
    },      
    cardsElement
);
cardsList.render()



function createCard(item) {
    const card = new Card({name: item.name, link: item.link, 
        handleCardClick:  () => clickCard(item)
    }, "#template")
    const cardElement = card.render();
    cardsList.addItem(cardElement);
}




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

const handleUserInfo = new UserInfo({profileName: '.profile__title', profileJob:'.profile__subtitle'})

const handleProfilePopup = new PopupWithForm('.popup_edit',  
{submitFormFunc:  submitFormEdit}) 

function submitFormEdit(data){
    handleUserInfo.setUserInfo(data.firstname, data.secondname) 
    handleProfilePopup.close(); 
}


const handleAddPopup = new PopupWithForm('.popup_add',  { 
submitFormFunc: submitNewCardForm
    })

function submitNewCardForm() { 
        const newItem = { 
            name: newPlace.value, 
            link: newImage.value
        }; 
        createCard(newItem);
        handleAddPopup.close() 
    }




handleAddPopup.setEventListeners()
handleProfilePopup.setEventListeners()


    editButton.addEventListener("click", () => {
        const getUser = handleUserInfo.getUserInfo();
        nameInput.value = getUser.name
        jobInput.value = getUser.job
        handleProfilePopup.open()
    });
    addButton.addEventListener("click", () => {
        handleAddPopup.open()
        handleAddPopup.submitButton.classList.add('button_type_invalid')
    });






