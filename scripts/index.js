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
const windowModall = document.querySelector(".window_modal");
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

const closeByPopUp = (evt) => {
    if (evt.target.classList[1] == "popup_edit")
        openPopUp(popUpEdit)
    else if (evt.target.classList[1] == "popup_add")
        openPopUp(popUpAdd)
    else if (evt.target.classList[1] == "window_modal")
        openPopUp(windowModall)
}

const openPopUp = (popUp) => {
    popUp.classList.toggle("popup_is-opened");
};
const getPopUp = (popUp) => {
    nameInput.value = titleName.textContent;
    jobInput.value = titleJob.textContent;
    openPopUp(popUp);
};

editButton.addEventListener("click", () => getPopUp(popUpEdit));
addButton.addEventListener("click", () => openPopUp(popUpAdd));
closePopUpEditButton.addEventListener("click", () => openPopUp(popUpEdit));
closePopUpAddButton.addEventListener("click", () => openPopUp(popUpAdd));
closeWindowModallButton.addEventListener("click", () => openPopUp(windowModall));


const formElement = document.querySelector(".popup__container");
const formElementAdd = document.querySelector(".popup__container_add");

function submitForm (evt) {
    evt.preventDefault(); 
    
    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;

    openPopUp(popUpEdit);
};

function submitFormAdd (evt) {
    evt.preventDefault();
    const newItem = {
        name: newPlace.value,
        link: newImage.value
    };

    list.prepend(getItems(newItem));
    
    openPopUp(popUpAdd);
}

formElementAdd.addEventListener('submit', submitFormAdd);


formElement.addEventListener('submit', submitForm);

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
        const windowSubtitle = document.querySelector(".window__subtitle");
        const windowImage = document.querySelector(".window__image");
        const windowModal = document.querySelector(".window")
        windowImage.src = data.link;
        windowSubtitle.textContent = data.name;
        openPopUp(windowModal);
    };

renderList();




