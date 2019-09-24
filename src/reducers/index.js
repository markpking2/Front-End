import React from 'react';
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

const initialState = {
    successMessage: "",
    loading: false,
    errorMessage: "",
    isLoggedIn: false,
    loginModal: false,
    registerModal: false,
    messageModal: false,
    moduleModal: false
}

export const reducer = (state=initialState, action) => {
    switch(action.type) { 
        case MESSAGE_SUCCESS:
            console.log("Message success switch");
            return {
                ...state,
                loading: false,
                successMessage: "Message sent successfully"
            };
        case MESSAGE_ERROR:
            console.log("message error switch");
            return {
                ...state,
                loading: false,
                errorMessage: "There was an error, please try again"
            };
        case SENDING_DATA:
            console.log("sending data switch");
            return {
                ...state,
                loading: true
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
            case LOGIN_MODAL_ON:
                return {
                    ...state,
                    loginModal: true
                }
                case LOGIN_MODAL_OFF:
                return {
                    ...state,
                    loginModal: false
                }

                case REGISTER_MODAL_ON:
                return {
                    ...state,
                    registerModal: true
                }
                case REGISTER_MODAL_OFF:
                return {
                    ...state,
                    registerModal: false
                }

                case MESSAGE_MODAL_ON:
                return {
                    ...state,
                    messageModal: true
                }
                case MESSAGE_MODAL_OFF:
                return {
                    ...state,
                    messageModal: false
                }
                case MODULE_MODAL_ON:
                return {
                    ...state,
                    moduleModal: true
                }
                case MODULE_MODAL_OFF:
                return {
                    ...state,
                    moduleModal: false
                }

        default:
            return state;
    }
}