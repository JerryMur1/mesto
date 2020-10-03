let editButton = document.querySelector(".button_type_edit");
let closeButton = document.querySelector(".button_type_close");
let popUp = document.querySelector(".popup");
let nameInput = document.querySelector(".popup__name_type_title");
let jobInput = document.querySelector(".popup__name_type_subtitle");
let titleName = document.querySelector(".profile__title");
let titleJob = document.querySelector(".profile__subtitle");

let popUpToggle = () => {
    popUp.classList.toggle("popup_is-opened");
};
let popUpCopy = () => {
    nameInput.value = titleName.textContent;
    jobInput.value = titleJob.textContent;
    popUpToggle();
};

editButton.addEventListener("click", popUpCopy);
closeButton.addEventListener("click", popUpToggle);


let formElement = document.querySelector(".popup__container");

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;

    popUpToggle();
}


formElement.addEventListener('submit', formSubmitHandler);

