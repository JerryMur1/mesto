let initialCards = [
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

let editButton = document.querySelector(".button_type_edit");
let addButton = document.querySelector(".button_type_add");
let closeButton = document.querySelectorAll(".button_type_close");
let closestButton = document.querySelector(".button_type_closest");
let windowModall = document.querySelector(".window_modal");
let imageButton = document.querySelector(".button_type_image");
let popUpAdd = document.querySelector(".popup_add");
let popUpEdit = document.querySelector(".popup_edit");
let nameInput = document.querySelector(".popup__name_type_title");
let jobInput = document.querySelector(".popup__name_type_subtitle");
let newPlace = document.querySelector(".popup__place_type_title");
let newImage = document.querySelector(".popup__place_type_subtitle");
let titleName = document.querySelector(".profile__title");
let titleJob = document.querySelector(".profile__subtitle");
let list = document.querySelector(".elements");
let template = document.querySelector(".template");



let popUpToggle = (popUp) => {
    popUp.classList.toggle("popup_is-opened");
};
let popUpCopy = (popUp) => {
    nameInput.value = titleName.textContent;
    jobInput.value = titleJob.textContent;
    popUpToggle(popUp);
};

editButton.addEventListener("click", () => popUpCopy(popUpEdit));
addButton.addEventListener("click", () => popUpToggle(popUpAdd));
closeButton[0].addEventListener("click", () => popUpToggle(popUpEdit));
closeButton[1].addEventListener("click", () => popUpToggle(popUpAdd));
closestButton.addEventListener("click", () => popUpToggle(windowModall));


let formElement = document.querySelector(".popup__container");
let formElementAdd = document.querySelector(".popup__container_add");

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;

    popUpToggle(popUpEdit);
};

function formSubmitHandlerAdd (evt) {
    evt.preventDefault();
    const newItem = {
        name: newPlace.value,
        link: newImage.value
    };

    list.prepend(getItems(newItem));
    
    popUpToggle(popUpAdd);
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);


formElement.addEventListener('submit', formSubmitHandler);

const renderList = () => {
    const items = initialCards.map(element => getItems(element));
    list.append(...items);
};

const getItems = (data) => {
    const card = template.content.cloneNode(true);
    const deleteButton = card.querySelector(".button_type_delete");
    const likeButton = card.querySelector(".element__like");
    const imageButton = card.querySelector(".button_type_image");
    const windowImage = document.querySelector(".window__image");
    const windowSubtitle = document.querySelector(".window__subtitle");
    const windowModal = document.querySelector(".window");
    imageButton.addEventListener("click", () => {
        windowImage.src = data.link;
        windowSubtitle.textContent = data.name;
        popUpToggle(windowModal);
    });

likeButton.addEventListener("click", function(evt) {
    evt.target.classList.toggle("element__like_active");
});
    
    deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.closest(".element");
        listItem.remove();
    })

    
    
    card.querySelector(".element__title").innerText = data.name;
    card.querySelector(".element__image").src = data.link;

    return card;
};

renderList();




