import * as actionTypes from "./actionTypes";
import axios from "../../../axios-orders";
//const liveUrl = "https://murmuring-castle-18009.herokuapp.com";
const localUrl = "http://localhost:8080";
const apiurl = localUrl;
//const clientUrl = "/http://localhost:3000";
export const getSubMenu = (mid: string | undefined) => {
  return {
    type: "GET_MAIN_MENU",
    payload: mid,
  };
};

export const getContent = (smid: string | undefined) => {
  return {
    type: "GET_CONTENT",
    payload: smid,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const authSuccess = (token: string, userId: string) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const checkAuthTimeout = (expirationTime: number) => {
  setTimeout(() => {
    logout();
  }, expirationTime * 1000);
};

export const authenticateUser = (username: string, password: string) => {
  let token = "SetTokenString";
  let userId = "1234";
  const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
  localStorage.setItem("token", token);
  localStorage.setItem("expirationDate", "" + expirationDate);
  localStorage.setItem("userId", userId);
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
    isAuthenticated: true,
  };
};

export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: localStorage.getItem("userId"),
    isAuthenticated: token != null ? true : false,
  };
};
