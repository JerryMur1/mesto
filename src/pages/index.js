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
popupImage.setEventListeners();

const cardsList = new Section({
    items: [],
    renderer: ({name, link}) => createCard({name, link})
    },      
    cardsElement,
);
cardsList.render()



// function createCard(item) {
//     const card = new Card({name: item.name, lik:item.link, likes:item.likes, _id:item._id, owner:item.owner,
//         handleCardClick:  () => clickCard(item),  
//         handleDeleteClick: () => {
//             const handleSubmitPopup = new PopupWithSubmit(
//                 '.popup_delete', ()=>{
//                 api.deleteCard(_id)
//                 .then((res)=>{
//                     card.delete()
//                 })  
//                 })
//                 handleSubmitPopup.open();
//                 handleSubmitPopup.setEventListeners()
//             }
//     }, "#template", getUser)
//     const cardElement = card.render();
//     cardsList.addItem(cardElement);
// }
// function innerTexts(button){
//     button.innerText = "ffd"
// }
const buttonSave = document.querySelectorAll('.button_type_save')
buttonSave.forEach(item =>{
    item.addEventListener('click', ()=>{
        item.textContent = 'Сохранение...'
    })
})



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

const handleUserInfo = new UserInfo({
profileName: '.profile__title', 
profileJob:'.profile__subtitle', 
profileAvatar:'.profile__avatar'})

const handleProfilePopup = new PopupWithForm('.popup_edit',  
{submitFormFunc:  (dataForm) =>{
    api.addUserId(dataForm).then((data) =>{
        handleUserInfo.setUserInfo(data.name, data.about) 
        console.log(dataForm)
      })
      .finally(() => {
        handleProfilePopup.close();  
      }); 
}}) 


// const handleProfilePopup = new PopupWithForm('.popup_edit',  
// {submitFormFunc:  (dataForm) =>{
//     api.addUserId(dataForm).then((data) =>{
//         handleUserInfo.setUserInfo(data.profileName, data.profileJob) 
//         console.log(dataForm)
//       })
//       .finally(() => {
//         handleProfilePopup.close();  
//       }); 
// }}) 


// function submitFormEdit(data){
//     handleUserInfo.setUserInfo(data.firstname, data.secondname) 
//     handleProfilePopup.close(); 
// }
// function submitAvatarForm(data){
//     handleUserInfo.setUserInfo(data.firstname) 
//     handleProfilePopup.close(); 
// }

// const handleSubmitPopup = new PopupWithSubmit(
//     '.popup_delete', ()=>{
//     api.deleteCard(_id)
//     .then((res)=>{
//         card.delete()
//     })   
//     handleSubmitPopup.open();
//     handleSubmitPopup.setEventListeners()
//     })

const handleAddPopup = new PopupWithForm('.popup_add',  { 
submitFormFunc:(data) => {
    api.addCards(data)
        .then(({name, link, likes, _id, owner}) => {
    const card = new Card({name, link, likes, _id, owner,
        handleCardClick: () => clickCard({name, link}),
        handleDeleteClick: () => {
        const handleSubmitPopup = new PopupWithSubmit(
            '.popup_delete', ()=>{
            api.deleteCard(_id)
            .then((res)=>{
                card.delete()
            })   
            })
            handleSubmitPopup.open();
            handleSubmitPopup.setEventListeners()
        },
        handleLikeClick: () => {
            card.isLike()
            ? api.deleteLike(_id)
            .then((res)=>{
                card.handleLike()
                
            })
            : api.likeCard(_id)
            .then((res)=>{
                card.handleLike()
                
            })
        }
    }, "#template", getUser)
    const cardElement = card.render();
    cardsList.addItem(cardElement);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(
    handleAddPopup.close() 
    )
}
    })



const handleAvatarPopup = new PopupWithForm('.popup_avatar', {
    submitFormFunc: (dataForm) =>{
        api.addAvatarId(dataForm).then((data) =>{
            handleUserInfo.setUserPic(data.avatar)
        })
        .finally(
            handleAvatarPopup.close()
        )
    }
})




handleAddPopup.setEventListeners()
handleProfilePopup.setEventListeners()
handleAvatarPopup.setEventListeners()

    editButton.addEventListener("click", () => {
        const getUser = handleUserInfo.getUserInfo();
        nameInput.value = getUser.name
        jobInput.value = getUser.job
        handleProfilePopup.open() 
        buttonSave[0].textContent="Сохранить"
    });
    addButton.addEventListener("click", () => {
        handleAddPopup.open()
        handleAddPopup.submitButton.classList.add('button_type_invalid')
        buttonSave[1].textContent="Создать"
    });
    avatarButton.addEventListener("click", () =>{
        handleAvatarPopup.open()
        buttonSave[2].textContent="Сохранить"
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

api.getAllNeededData().then(arg =>{
    const [getCard, getUser] = arg
        const cardsList = new Section({
            items: getCard,
            renderer: ({name, link, likes, _id, owner}) => {
                const card = new Card({name, link, likes, _id, owner,
                    handleCardClick:  () => clickCard({name, link}),  
                    handleDeleteClick: () => {
                        const handleSubmitPopup = new PopupWithSubmit(
                            '.popup_delete', ()=>{
                            api.deleteCard(_id)
                            .then(()=>{
                                card.delete()
                            })   
                            })
                            handleSubmitPopup.open();
                            handleSubmitPopup.setEventListeners()
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
                            })
                        }

                }, "#template", getUser)
                const cardElement = card.render();
                cardsList.addItem(cardElement);
                card.setLike()
            }
            },      
            cardsElement
        );

        cardsList.render()
        console.log(getCard)
        })




        
        .catch((err) => {
        console.log(err);
        }); 

        let getUser;
        api.getUserId().then((res)=>{
            getUser = res;
        })


        api.getUserId()
        .then((data) =>{
                    handleUserInfo.setUserInfo(data.name, data.about) 
                    console.log(data)
                    handleUserInfo.setUserPic(data.avatar)
                })
        .catch((err) => {
            console.log(err); 
        }); 


