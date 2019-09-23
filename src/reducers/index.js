import React from 'react';
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
export const MESSAGE_ERROR = "MESSAGE_ERROR";
export const SENDING_DATA = "SENDING_DATA";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";

const initialState = {
    successMessage: "",
    loading: false,
    errorMessage: "",
    isLoggedIn: false
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

        default:
            return state;
    }
}