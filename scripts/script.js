let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-icon");
let popUp = document.querySelector(".popup");


let popUpToggle = () => {
    popUp.classList.toggle("popup_is-opened");
}

editButton.addEventListener("click", popUpToggle);
closeButton.addEventListener("click", popUpToggle);


let formElement = document.querySelector(".popup__container");


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let nameInput = document.querySelector(".popup__name");
    let jobInput = document.querySelector(".popup__job");

    
    let titleName = document.querySelector(".profile__title");
    let titleJob = document.querySelector(".profile__subtitle");
    
    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;

    popUpToggle();
}


formElement.addEventListener('submit', formSubmitHandler);