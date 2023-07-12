const BASE_URL = "http://localhost:3000";

function handleResponse(res) {
  console.log('auth api', res);
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error! : ${res.status}`);
  }
}

export function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials : "include",

    body: JSON.stringify({ password, email }),
  }).then(handleResponse);
}

export function logIn(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials : "include",


    body: JSON.stringify({ password, email }),
  }).then(handleResponse);
}

export function checkToken() {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials : "include",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      
    },

  }).then(handleResponse);
}
