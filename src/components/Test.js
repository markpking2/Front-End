import React from 'react';
import axios from 'axios';

const Test = () =>{

    const postReq = () =>{
        const token = localStorage.getItem('ec-token');
        const newAx = axios.create({
            baseURL: 'https://haircarebackend.herokuapp.com/api/stylists/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            }
        })
        const newGuy =  {"name": "Sue", "username": "112Sue", "password": "Sue","location": "San Francisco, CA", "specialty": "Curly Hair", "bio": "alive and doing hair", "email_address": "haircare@msn.net"}

        console.log('test button')
        newAx
        .post('/', newGuy)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>Hello This is test file

            <button onClick ={()=>postReq()}>Test button</button>
        </div>
    )
}

export default Test;