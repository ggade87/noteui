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
export const IsUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    logout();
  } else {
    let dtStr: string | null = localStorage.getItem("expirationDate");
    let expirationDate: Date = new Date(dtStr as string);
    if (expirationDate <= new Date()) {
      logout();
    } else {
      const userId = localStorage.getItem("userId");
      authSuccess(token, userId as string);
      checkAuthTimeout(
        (expirationDate.getTime() - new Date().getTime()) / 1000
      );
    }
  }
};
