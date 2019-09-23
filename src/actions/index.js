import React from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../components/AxiosAuth';


import {MESSAGE_SUCCESS, MESSAGE_ERROR, SENDING_DATA, LOGOUT, LOGIN} from '../reducers';

export const sendMessage = message =>{
    console.log('from sendmessage');
    return dispatch =>{
        dispatch({
            type: SENDING_DATA
        });
        console.log(message);
        // axiosWithAuth()
        // .post('', message)
        // .then(res=>{
        //     console.log(res);
        //     dispatch({
        //         type: MESSAGE_SUCCESS
        //     });
        // })
        // .catch(err=>{
        //     dispatch({
        //         type: MESSAGE_ERROR
        //     });
        // });
    }
}

export const loginFunction = (credentials) =>{
    
    const user = {
        username: credentials.username,
        password: credentials.password
    }
    const history = credentials.history;

    console.log("loginFunction running");
    history.push('/form');

    // return dispatch =>{
    //     console.log(credentials);
    //     axios
    //     .post('/login', credentials)
    //     .then(res=>{
    //         console.log(res);
    //         // localStorage.setItem("ec-token", res.data);
    //         // history.push('/form');
    // return {
    //     type: LOGIN
    // }
    
    //     })
    //     .catch(err=>{
    //         console.log(err);

    //     });
    // }
}

export const logoutFunction = () =>{
    return {
        type: LOGOUT
    }
}

export const loginTest = () =>{
    return {
        type: LOGIN
    }
}