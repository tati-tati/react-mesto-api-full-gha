const BASE_URL = "https://api.mesto.tati-tati.nomoredomains.work";

function handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error! : ${res.status}`);
    }
  }

  export function getInitialCards() {
    return fetch(`${BASE_URL}/cards`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials : "include"
    }).then(handleResponse);
  }

  export function getInfoUser() {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials : "include"

    }).then(handleResponse);
  }

  export function setUserInfo(item) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials : "include",


      body: JSON.stringify({
        name: item.name,
        about: item.about,
      }),
    }).then(handleResponse);
  }

  export function setUserAvatar(item) {
    return fetch(`${BASE_URL}/users/me/avatar`, {
      method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials : "include",


      body: JSON.stringify({
        avatar: item.avatar,
      }),
    }).then(handleResponse);
  }

  export function addNewCard(item) {
    return fetch(`${BASE_URL}/cards`, {
      method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials : "include",


      body: JSON.stringify(item),
    }).then(handleResponse);
  }

  export function getCurrentUser() {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials : "include"

    }).then(handleResponse);
  }

  export function changeLikeCardStatus(id, status) {
    if (status) {
      return fetch(`${BASE_URL}/cards/${id}/likes`, {
        method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials : "include"

      }).then(handleResponse);
    } else {
      return fetch(`${BASE_URL}/cards/${id}/likes`, {
        method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials : "include"

      }).then(handleResponse);
    }
  }

  export function deleteCard(cardId) {
    // console.log(cardId, `${this._baseUrl}/cards/${cardId}`)
    return fetch(`${BASE_URL}/cards/${cardId}`, {
      method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials : "include"

    }).then(handleResponse);
  }




// "Высылаю данные для 9-й проектной работы:

// Токен: 2f88b489-99f5-491c-a88e-5aa5d9bc02d4
// Идентификатор группы: cohort-62"
