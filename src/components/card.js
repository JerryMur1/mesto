

export class Card {
constructor({name, link, likes, _id, owner, handleCardClick, handleDeleteClick, handleLikeClick}, cardSelector, getUser) {
    this._name = name;
    this._image = link;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this.handleCardClick = handleCardClick;
    this.handleDeleteClick = handleDeleteClick;
    this.handleLikeClick = handleLikeClick;
    this._template = document.querySelector(cardSelector).content.querySelector('.element');
    this._getUser = getUser;
    this._deleteButton = this._template.querySelector('.button_type_delete')
    }
    
    like() {
        this._content.querySelector('.element__like').classList.add("element__like_active");
    }
    
    isLike() {
        return this._likes.some((like) => like._id === this._getUser._id)
    }  

    handleLike() {
        if(!this.isLike()){
            this._content.querySelector('.element__like').classList.add('element__like_active')
            this._likes.push(this._getUser);
            this._content.querySelector('.element__like_number').textContent = this._likes.length
        }
        else {
            this._content.querySelector('.element__like').classList.remove('element__like_active')
            this._likes.pop(this._getUser);
            this._content.querySelector('.element__like_number').textContent = this._likes.length
        }
    }
    

    setLike(){

        this._likes.forEach((item) =>{
            if(this._getUser._id === item._id)    {
                this._content.querySelector('.element__like').classList.add('element__like_active')
            }
        })
    }
    render() {
        if(this._owner._id !== this._getUser._id) {
            this._deleteButton.classList.add('button_visibility');
        } else {
            this._deleteButton.classList.remove('button_visibility');
        }
        this._content = this._template.cloneNode(true);
        this._content.querySelector(".element__title").textContent = this._name;
        const elementImage = this._content.querySelector('.element__image')
        elementImage.src = this._image;
        elementImage.alt = this._image;
        this._content.querySelector(".element__like_number").textContent = this._likes.length;
        this._content.querySelector(".button_type_delete").addEventListener('click', () => this.handleDeleteClick());
        this._content.querySelector(".button_type_like").addEventListener('click', () => this.handleLikeClick());
        this._content.querySelector(".button_type_image").addEventListener('click', () => this.handleCardClick());
        return this._content;

    }
    delete() {
        this._content.remove();
        this._content = null;
    }


}


