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
    formSelector, submitButtonSelector} from '../utils/constants.js'







function clickCard(name, link) {
    popupImage.setEventListeners();
    popupImage.open(name, link)
}
const popupImage = new PopupWithImage('.popup_modal');

const cardsList = new Section({
    items: initialCards,
    renderer: ({name, link}) => {
        const card = new Card({name: name, link: link, 
        handleCardClick:  () => clickCard(name, link)
    }, "#template")
    const cardElement = card.render();
    cardsList.addItem(cardElement);
    
    }},      
    cardsElement
);
cardsList.render()








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

function submitFormEdit(){
    handleUserInfo.setUserInfo(nameInput.value, jobInput.value) 
    handleProfilePopup.close(); 
}


const handleAddPopup = new PopupWithForm('.popup_add',  { 
submitFormFunc: submitForm
    }) 
 

   function submitForm() { 
        const newItem = { 
            name: newPlace.value, 
            link: newImage.value, 
            handleCardClick: () => clickCard(newPlace.value, newImage.value) 
        }; 
        const card = new Card(newItem, '#template') 
        const cardElement = card.render(); 
        cardsList.addItem(cardElement); 
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
        submitButtonSelector[1].classList.add('button_type_invalid')
    });






