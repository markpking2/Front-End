import React from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../components/AxiosAuth';


import {MESSAGE_SUCCESS, MESSAGE_ERROR, SENDING_DATA, LOGOUT, LOGIN} from '../reducers';

export const sendMessage = (message, history) =>{
    return dispatch =>{
        dispatch({
            type: SENDING_DATA
        });
        
        axiosWithAuth()
        .post('/', message)
        .then(res=>{
            dispatch({
                type: MESSAGE_SUCCESS
            });
            alert(res.data.message);
            history.push('/success');
        })
        .catch(err=>{
            console.log(err.response);
            dispatch({
                type: MESSAGE_ERROR
            });
        });
    }
}

export const loginFunction = (credentials, history) =>{
    

    return dispatch =>{
        console.log(credentials);
        axios
        .post('https://empowered-conversations.herokuapp.com/login', credentials)
        .then(res=>{
            localStorage.setItem("ec-token", res.data.token);
            dispatch({type: LOGIN});
            history.push('/form');
    // dispatch( {
    //     type: LOGIN
    // });
    
        })
        .catch(err=>{
            
            alert(err.response.data.message);

        });
    }
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

export const registerFunction = (credentials, history) =>{

    // console.log(credentials);
    // console.log(history);
    return dispatch =>{
        // dispatch({type: loadingsomething});
        // console.log('axios');
        axios
        .post('https://empowered-conversations.herokuapp.com/register', credentials)
        .then(res=>{
            alert("Successful Registration. Please log in");
            // console.log(res);
            // console.log('success');
            // localStorage.setItem("ec-token", res.data);
            history.push('/login');
    // return {
    //     type: LOGIN
    // }
    
        })
        .catch(err=>{
            console.log(err);
            console.log('error');

        });
    }
}