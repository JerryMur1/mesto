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
const closeWindowModallButton = windowModall.querySelector(".button_type_close");
const imageButton = document.querySelector(".button_type_image");
const popUpAdd = document.querySelector(".popup_add");
const closePopUpAddButton = popUpAdd.querySelector(".button_type_close");
const popUpEdit = document.querySelector(".popup_edit");
const closePopUpEditButton = popUpEdit.querySelector(".button_type_close");
const nameInput = document.querySelector(".popup__name_type_title");
const jobInput = document.querySelector(".popup__name_type_subtitle");
const newPlace = document.querySelector(".popup__place_type_title");
const newImage = document.querySelector(".popup__place_type_subtitle");
const titleName = document.querySelector(".profile__title");
const titleJob = document.querySelector(".profile__subtitle");
const list = document.querySelector(".elements");
const template = document.querySelector(".template");
const popUps = document.querySelectorAll(".popup");
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
    const newItem = {
        name: newPlace.value,
        link: newImage.value
    };

    list.prepend(getItems(newItem));
    
    closePopUp(popUpAdd);
}



const renderList = () => {
    const items = initialCards.map(element => getItems(element));
    list.append(...items);
};

const getItems = (data) => {
    const card = template.content.cloneNode(true);
    const deleteButton = card.querySelector(".button_type_delete");
    const likeButton = card.querySelector(".element__like");
    const imageButton = card.querySelector(".button_type_image");
    const elementImage = card.querySelector(".element__image");
    imageButton.addEventListener("click", () => handlePreviewPicture(data));
    likeButton.addEventListener("click", handleLikeIcon);
    deleteButton.addEventListener('click', () => handleDeleteCard(deleteButton));
    
    
    card.querySelector(".element__title").textContent = data.name;
    elementImage.src = data.link;
    elementImage.alt = data.link;
    return card;
};

const handleDeleteCard = (deleteButton) => {
    const listItem = deleteButton.closest(".element");
    listItem.remove();
};
    const handleLikeIcon = (evt) => {
        evt.target.classList.toggle("element__like_active");
    };
    const handlePreviewPicture = (data) => {
        const windowSubtitle = document.querySelector(".popup__subtitle");
        const windowImage = document.querySelector(".popup__image");
        const windowModal = document.querySelector(".popup_modal")
        windowImage.src = data.link;
        windowSubtitle.textContent = data.name;
        openPopUp(windowModal);
    };


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
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
            closePopUp(windowModall);
        }
    });

    
    

renderList();




