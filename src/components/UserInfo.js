export class UserInfo {
    
    constructor({profileName, profileJob}){
        this._name = document.querySelector(profileName);
        this._job = document.querySelector(profileJob);
    }

    getUserInfo(){
        const userData = {}
        userData.name = this._name.textContent;
        userData.job = this._job.textContent;
        return userData;
    }

    setUserInfo(name, job){
        this._name.textContent = name;
        this._job.textContent = job;
    }
}