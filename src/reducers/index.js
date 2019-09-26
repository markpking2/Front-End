import React from "react";
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
export const MESSAGE_ERROR = "MESSAGE_ERROR";
export const SENDING_DATA = "SENDING_DATA";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const LOGIN_MODAL_ON = "LOGIN_MODAL_ON";
export const LOGIN_MODAL_OFF = "LOGIN_MODAL_OFF";
export const REGISTER_MODAL_ON = "REGISTER_MODAL_ON";
export const REGISTER_MODAL_OFF = "REGISTER_MODAL_OFF";
export const MESSAGE_MODAL_ON = "MESSAGE_MODAL_ON";
export const MESSAGE_MODAL_OFF = "MESSAGE_MODAL_OFF";
export const MODULE_MODAL_ON = "MODULE_MODAL_ON";
export const MODULE_MODAL_OFF = "MODULE_MODAL_OFF";
export const EDIT_MODAL_ON = "EDIT_MODAL_ON";
export const EDIT_MODAL_OFF = "EDIT_MODAL_OFF";
export const DELETE_MODAL_ON = "DELETE_MODAL_ON";
export const DELETE_MODAL_OFF = "DELETE_MODAL_OFF";

const initialState = {
  successMessage: "",
  loading: false,
  errorMessage: "",
  isLoggedIn: false,
  loginModal: false,
  registerModal: false,
  messageModal: false,
  moduleModal: false,
  editModal: false,
  deleteModal: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: "Message sent successfully"
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: "There was an error, please try again"
      };
    case SENDING_DATA:
      return {
        ...state,
        loading: true
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGIN_MODAL_ON:
      return {
        ...state,
        loginModal: true
      };
    case LOGIN_MODAL_OFF:
      return {
        ...state,
        loginModal: false
      };

    case REGISTER_MODAL_ON:
      return {
        ...state,
        registerModal: true
      };
    case REGISTER_MODAL_OFF:
      return {
        ...state,
        registerModal: false
      };

    case MESSAGE_MODAL_ON:
      return {
        ...state,
        messageModal: true
      };
    case MESSAGE_MODAL_OFF:
      return {
        ...state,
        messageModal: false
      };
    case MODULE_MODAL_ON:
      return {
        ...state,
        moduleModal: true
      };
    case MODULE_MODAL_OFF:
      return {
        ...state,
        moduleModal: false
      };
    case EDIT_MODAL_ON:
      return {
        ...state,
        editModal: true
      };
    case EDIT_MODAL_OFF:
      return {
        ...state,
        editModal: false
      };

    case DELETE_MODAL_ON:
      return {
        ...state,
        deleteModal: true
      };
    case DELETE_MODAL_OFF:
      return {
        ...state,
        deleteModal: false
      };

    default:
      return state;
  }
};
