import axios from "axios";
import * as CONSTS from "../utils/consts";

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  console.log("err:", err.response?.data);
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

// creates a basic url for every request in this file
const authService = axios.create({
  baseURL: `https://remembrance-worms-45542.herokuapp.com/api/auth`,
  // baseURL: `http://localhost:5005/api/auth`,
});

// http://localhost:5005

export function login(credentials) {
  // /api/auth/login
  return authService
    .post("/login", credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function getLoggedIn() {
  return authService
    .get(`/session`, {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function signup(credentials) {
  return authService
    .post("/signup", credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function logout() {
  return authService
    .delete("/logout", {
      headers: {
        Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}
