(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.name,i=e.link,l=e.likes,c=e._id,a=e.owner,u=e.handleCardClick,s=e.handleDeleteClick,f=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=o,this._image=i,this._likes=l,this._id=c,this._owner=a,this.handleCardClick=u,this.handleDeleteClick=s,this.handleLikeClick=f,this._template=document.querySelector(n).content.querySelector(".element"),this._getUser=r,this._deleteButton=this._template.querySelector(".button_type_delete")}var n,r;return n=t,(r=[{key:"like",value:function(){this._content.querySelector(".element__like").classList.add("element__like_active")}},{key:"isLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._getUser._id}))}},{key:"handleLike",value:function(){this.isLike()?(this._content.querySelector(".element__like").classList.remove("element__like_active"),this._likes.pop(this._getUser),this._content.querySelector(".element__like_number").textContent=this._likes.length):(this._content.querySelector(".element__like").classList.add("element__like_active"),this._likes.push(this._getUser),this._content.querySelector(".element__like_number").textContent=this._likes.length)}},{key:"setLike",value:function(){var e=this;this._likes.forEach((function(t){e._getUser._id===t._id&&e._content.querySelector(".element__like").classList.add("element__like_active")}))}},{key:"render",value:function(){var e=this;this._owner._id!==this._getUser._id?this._deleteButton.classList.add("button_visibility"):this._deleteButton.classList.remove("button_visibility"),this._content=this._template.cloneNode(!0),this._content.querySelector(".element__title").textContent=this._name;var t=this._content.querySelector(".element__image");return t.src=this._image,t.alt=this._image,this._content.querySelector(".element__like_number").textContent=this._likes.length,this._content.querySelector(".button_type_delete").addEventListener("click",(function(){return e.handleDeleteClick()})),this._content.querySelector(".button_type_like").addEventListener("click",(function(){return e.handleLikeClick()})),this._content.querySelector(".button_type_image").addEventListener("click",(function(){return e.handleCardClick()})),this._content}},{key:"delete",value:function(){this._content.remove(),this._content=null}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._settings=t,this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_checkInputValidity",value:function(e){e.checkValidity()?this._hideError(e):this._showError(e)}},{key:"_showError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._settings.inputErrorClass)}},{key:"_hideError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._settings.inputErrorClass)}},{key:"toggleButtonElement",value:function(){this._formElement.checkValidity()?(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)).forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonElement(e._buttonElement)}))})),this.toggleButtonElement(this._formElement,this._buttonElement)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this.closeButton=this._popupSelector.querySelector(".button_type_close"),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===this._popupSelector&&this.close()}},{key:"setEventListeners",value:function(){this.closeButton.addEventListener("click",this.close.bind(this)),this._popupSelector.addEventListener("click",this._handleOverlayClose)}}])&&o(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e))._popupImage=t._popupSelector.querySelector(".popup__image"),t._popupSubtitle=t._popupSelector.querySelector(".popup__subtitle"),t}return t=l,(n=[{key:"open",value:function(e,t){this._popupSubtitle.textContent=e,this._popupImage.src=t,this._popupImage.alt=t,a(f(l.prototype),"open",this).call(this)}}])&&c(t.prototype,n),l}(i);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerSelector=n,this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"render",value:function(){var e=this;this._items.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&h(t.prototype,n),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function l(e,t){var n,r=t.submitFormFunc;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,e))._submitFormFunc=r,n.form=n._popupSelector.querySelector(".popup__content"),n.submitButton=n._popupSelector.querySelector(".button_type_save"),n}return t=l,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupSelector.querySelectorAll(".popup__name"),this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;m(k(l.prototype),"setEventListeners",this).call(this),this._popupSelector.addEventListener("submit",(function(){var t=e._getInputValues();e._submitFormFunc(t)}))}},{key:"close",value:function(){m(k(l.prototype),"close",this).call(this),this.form.reset()}}])&&y(t.prototype,n),l}(i);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.job=this._job.textContent,e.avatar=this._avatar.src,e}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._job.textContent=t}},{key:"setUserPic",value:function(e){this._avatar.src=e}}])&&S(t.prototype,n),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.baseUrl,r=t.profileUrl,o=t.headers,i=t.likeUrl,l=t.avatarUrl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._profileUrl=r,this._headers=o,this._likeUrl=i,this._avatarUrl=l}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._baseUrl,{method:"GET",headers:this._headers}).then(this._handleResOk)}},{key:"addCards",value:function(e){return fetch(this._baseUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:e.firstname,link:e.secondname})}).then(this._handleResOk)}},{key:"addUserId",value:function(e){return fetch(this._profileUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.firstname,about:e.secondname})}).then(this._handleResOk)}},{key:"getUserId",value:function(){return fetch(this._profileUrl,{method:"GET",headers:this._headers}).then(this._handleResOk)}},{key:"addAvatarId",value:function(e){return fetch(this._avatarUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleResOk)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserId()])}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"/"+e,{method:"DELETE",headers:this._headers}).then(this._handleResOk)}},{key:"likeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-18/cards/likes/"+e,{method:"PUT",headers:this._headers}).then(this._handleResOk)}},{key:"deleteLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-18/cards/likes/"+e,{method:"DELETE",headers:this._headers}).then(this._handleResOk)}},{key:"_handleResOk",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&w(t.prototype,n),e}(),O=document.querySelector(".button_type_edit"),L=document.querySelector(".button_type_add"),j=document.querySelector(".button_type_avatar"),q=document.querySelector(".elements"),P=document.querySelector(".popup__name_type_title"),U=document.querySelector(".popup__name_type_subtitle");function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}document.querySelector(".popup__place_type_title"),document.querySelector(".popup__place_type_subtitle"),document.querySelectorAll(".button_type_delete");var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e))._popupForm=t._popupSelector.querySelector(".popup__content"),t}return t=l,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback(),e.close()})),A(B(l.prototype),"setEventListeners",this).call(this)}}])&&I(t.prototype,n),l}(i);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=new p(".popup_modal"),N=new _({items:[],renderer:function(e){return G({name:e.name,link:e.link})}},q);N.render();var J=new D(".popup_delete");function G(e){var n=e.name,r=e.link,o=e.likes,i=e._id,l=e.owner,c=new t({name:n,link:r,likes:o,_id:i,owner:l,handleCardClick:function(){return function(e){var t=e.name,n=e.link;V.open(t,n)}({name:n,link:r})},handleDeleteClick:function(){J.setSubmitAction((function(){Q.deleteCard(i).then((function(){c.delete()})).catch((function(e){console.log(e)}))})),J.open()},handleLikeClick:function(){c.isLike()?Q.deleteLike(i).then((function(e){c.handleLike(e)})):Q.likeCard(i).then((function(e){c.handleLike(e)})).catch((function(e){console.log(e)}))}},"#template",K),a=c.render();N.addItem(a),c.setLike()}Array.from(document.querySelectorAll(".popup__content")).forEach((function(e){var t=new r({inputSelector:".popup__name",submitButtonSelector:".button_type_save",inactiveButtonClass:"button_type_invalid",inputErrorClass:"popup__content_state_invalid",errorClass:"error"},e);t.enableValidation(),L.addEventListener("click",(function(){t.toggleButtonElement()})),j.addEventListener("click",(function(){t.toggleButtonElement()}))}));var H=new E({profileName:".profile__title",profileJob:".profile__subtitle",profileAvatar:".profile__avatar"}),M=new g(".popup_edit",{submitFormFunc:function(e){Q.addUserId(e).then((function(t){H.setUserInfo(t.name,t.about),console.log(e),M.close()})).catch((function(e){console.log(e)}))}});document.querySelectorAll(".button_type_save").forEach((function(e){e.addEventListener("click",(function(){e.textContent="Сохранение..."}))}));var z=new g(".popup_add",{submitFormFunc:function(e){Q.addCards(e).then((function(e){return G({name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner},z.close())})).catch((function(e){console.log(e)}))}}),$=new g(".popup_avatar",{submitFormFunc:function(e){Q.addAvatarId(e).then((function(e){H.setUserPic(e.avatar),$.close()})).catch((function(e){console.log(e)}))}});V.setEventListeners(),J.setEventListeners(),z.setEventListeners(),M.setEventListeners(),$.setEventListeners(),O.addEventListener("click",(function(){var e=H.getUserInfo();P.value=e.name,U.value=e.job,M.open(),M.submitButton.textContent="Сохранить"})),L.addEventListener("click",(function(){z.open(),z.submitButton.textContent="Создать"})),j.addEventListener("click",(function(){$.open(),$.submitButton.textContent="Сохранить"}));var K,Q=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-18/cards",headers:{authorization:"a40cc85c-64a0-4b1f-ad4a-926989d9eacf","Content-Type":"application/json"},profileUrl:"https://mesto.nomoreparties.co/v1/cohort-18/users/me",avatarUrl:"https://mesto.nomoreparties.co/v1/cohort-18/users/me/avatar"});Q.getAllNeededData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],l=new _({items:o,renderer:function(e){return G({name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner})}},q);K=i,H.setUserInfo(i.name,i.about),H.setUserPic(i.avatar),l.render()})).catch((function(e){console.log(e)}))})();