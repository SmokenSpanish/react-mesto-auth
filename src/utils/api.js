const configAPI = {
  myUrl: "https://mesto.nomoreparties.co/v1/cohort-23",
  headers: {
      authorization: "82812fb7-c1cd-4b78-9cdb-8e7701744213",
      "Content-Type": "application/json",
  },
};

class Api {
    constructor({myUrl, headers}) {
        this._myUrl = myUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      }
    
      getCards() {
        return fetch(`${this._myUrl}/cards`, {
          headers: this._headers,
        }).then(this._checkResponse);
      }
    
      getUserInfo() {
        return fetch(`${this._myUrl}/users/me`, {
          headers: this._headers,
        }).then(this._checkResponse);
      }
    
      setUserInfo(user) {
        return fetch(`${this._myUrl}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: user.name,
            about: user.about,
          }),
        }).then(this._checkResponse);
      }
    
      createCard(card) {
        return fetch(`${this._myUrl}/cards`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
            name: card.name,
            link: card.link,
          }),
        }).then(this._checkResponse);
      }
    
      deleteCard(cardId) {
        return fetch(`${this._myUrl}/cards/${cardId}`, {
          method: "DELETE",
          headers: this._headers,
        }).then(this._checkResponse);
      }
    
      changeLikeCardStatus(cardId, isLiked) {
        const method = isLiked ? 'PUT' : 'DELETE';
        return fetch(`${this._myUrl}/cards/likes/${cardId}`, {
          method,
          headers: this._headers,
        }).then(this._checkResponse);
      }
    
      setUserAvatar(avatar) {
        return fetch(`${this._myUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            avatar,
          }),
        }).then(this._checkResponse);
      }

}

const api = new Api(configAPI);

export default api;