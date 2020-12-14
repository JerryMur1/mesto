export class UserInfo {
    constructor({profileName, profileJob, profileAvatar}){
        this._name = document.querySelector(profileName);
        this._job = document.querySelector(profileJob);
        this._avatar = document.querySelector(profileAvatar)
    }

    getUserInfo(){
        const userData = {}
        userData.name = this._name.textContent;
        userData.job = this._job.textContent;
        userData.avatar = this._avatar.src
        return userData;
    }

    setUserInfo(name, job){
        this._name.textContent = name;
        this._job.textContent = job;
    }
setUserPic(avatar){
    this._avatar.src = avatar
}


}