import './index.css';
import {Card} from "../components/card.js";
import {FormValidation} from "../components/validate.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {Section} from "../components/section.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import {Api} from "../components/api.js"
import {editButton, addButton, 
    cardsElement, nameInput, 
    jobInput, 
    formSelector,
    avatarButton} from '../utils/constants.js'
import { PopupWithSubmit } from '../components/PopupWithSubmit';


    function clickCard({name, link}) {
        popupImage.open(name, link)
    }
    const popupImage = new PopupWithImage('.popup_modal');

    const cardsList = new Section({
        items: [],
        renderer: ({name, link}) => createCard({name, link})
        },      
        cardsElement,
    );
cardsList.render()


const handleSubmitPopup = new PopupWithSubmit(
    '.popup_delete')
    

function createCard({name, link, likes,_id, owner}) {
    const card = new Card({name, link, likes, _id, owner,
        handleCardClick:  () => clickCard({name, link}),  
        handleDeleteClick: () => {
            
            handleSubmitPopup.setSubmitAction(()=> {
                api.deleteCard(_id)
                .then(()=>{
                    card.delete()
                })   
                .catch((err) => {
                    console.log(err);
                })
            })
            handleSubmitPopup.open(); 
            },
            handleLikeClick: ()=>{
                card.isLike()
                ? api.deleteLike(_id)
                .then((res)=>{
                    card.handleLike(res)
                })
                : api.likeCard(_id)
                .then((res)=>{
                    card.handleLike(res)
                }).catch((err) => {
                    console.log(err);
                })
            }

    }, "#template", getUser)
    const cardElement = card.render();
    cardsList.addItem(cardElement);
    card.setLike()
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
    addButton.addEventListener('click', ()=>{formValidation.toggleButtonElement()})
    avatarButton.addEventListener('click', ()=>{formValidation.toggleButtonElement()})
    });

    const handleUserInfo = new UserInfo({
    profileName: '.profile__title', 
    profileJob:'.profile__subtitle', 
    profileAvatar:'.profile__avatar'})

    const handleProfilePopup = new PopupWithForm('.popup_edit',  
    {submitFormFunc:  (dataForm) =>{
        api.addUserId(dataForm).then((data) =>{
            handleUserInfo.setUserInfo(data.name, data.about) 
            console.log(dataForm)
            handleProfilePopup.close();  
        })
        .catch((err) => {
            console.log(err);
        })
    }}) 
    
    

    const buttonList = document.querySelectorAll('.button_type_save')
    buttonList.forEach(item =>{
        item.addEventListener('click', ()=>{
            item.textContent="Сохранение..."
        })
    })


    const handleAddPopup = new PopupWithForm('.popup_add',  { 
    submitFormFunc:(data) => {
        api.addCards(data)
        .then(({name, link, likes, _id, owner}) => createCard({name, link, likes, _id, owner}, "#template", getUser, handleAddPopup.close()))
            .catch((err) => {
                console.log(err);
            })
        }
    })



    const handleAvatarPopup = new PopupWithForm('.popup_avatar', {
        submitFormFunc: (dataForm) =>{
            api.addAvatarId(dataForm).then((data) =>{
                handleUserInfo.setUserPic(data.avatar)
                handleAvatarPopup.close()
            }).catch((err) => {
                console.log(err);
            })
        }
    })
    




    popupImage.setEventListeners();
    handleSubmitPopup.setEventListeners()
    handleAddPopup.setEventListeners()
    handleProfilePopup.setEventListeners()
    handleAvatarPopup.setEventListeners()

    editButton.addEventListener("click", () => {
        const getUser = handleUserInfo.getUserInfo();
        nameInput.value = getUser.name
        jobInput.value = getUser.job
        handleProfilePopup.open() 
        handleProfilePopup.submitButton.textContent="Сохранить"
    });
    addButton.addEventListener("click", () => {
        handleAddPopup.open()
        handleAddPopup.submitButton.textContent="Создать"
    });
    avatarButton.addEventListener("click", () =>{
        handleAvatarPopup.open()
        handleAvatarPopup.submitButton.textContent="Сохранить"
    })


    const api = new Api({
        baseUrl: "https://mesto.nomoreparties.co/v1/cohort-18/cards",
        headers: {
            "authorization": "a40cc85c-64a0-4b1f-ad4a-926989d9eacf",
            "Content-Type": "application/json"
        },
        profileUrl: "https://mesto.nomoreparties.co/v1/cohort-18/users/me",
        avatarUrl:'https://mesto.nomoreparties.co/v1/cohort-18/users/me/avatar',
    }); 

    let getUser;

    api.getAllNeededData().then(arg =>{
        const [getCard, userData] = arg
            const cardsList = new Section({
                items: getCard,
                renderer: ({name, link, likes, _id, owner}) => createCard({name, link, likes, _id, owner}, "#template", getUser)
                },      
                cardsElement
                
            );  
            getUser = userData;
            handleUserInfo.setUserInfo(userData.name, userData.about) 
            handleUserInfo.setUserPic(userData.avatar),
            cardsList.render()
            })
            .catch((err) => {
            console.log(err);
            }); 


