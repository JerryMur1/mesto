

export class Api {
    constructor({baseUrl, profileUrl, headers, likeUrl, avatarUrl}) {
        this._baseUrl = baseUrl;
        this._profileUrl = profileUrl;
        this._headers= headers;
        this._likeUrl = likeUrl;
        this._avatarUrl = avatarUrl
    }
    
    getInitialCards() {
        return fetch(this._baseUrl, {
        method: "GET",
        headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    } 

    addCards(data){
        return fetch(this._baseUrl, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name:data.firstname,
                link:data.secondname,
            })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    addUserId(data) {
        return fetch(this._profileUrl, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name:data.firstname,
            about:data.secondname,
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    getUserId() {
        return fetch(this._profileUrl, {
            method: "GET",
            headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }


    
    addAvatarId(data) {
        return fetch(this._avatarUrl, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar:data.avatar,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    getAllNeededData() {
        return Promise.all([this.getInitialCards(),this.getUserId()])
    }


    deleteCard(_id) {
        return fetch(this._baseUrl + '/' + _id, {
            method: "DELETE",
            headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
        
    }

    likeCard(_id){
        return fetch("https://mesto.nomoreparties.co/v1/cohort-18/cards/likes" + '/' +_id, {
            method: "PUT",
            headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    deleteLike(_id){
        return fetch("https://mesto.nomoreparties.co/v1/cohort-18/cards/likes" + '/' +_id, {
            method: "DELETE",
            headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
}


