import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import {axiosWithAuth} from './AxiosAuth';
import {connect} from 'react-redux';
import {loginFunction} from '../actions';


const OnBoardForm = ({errors, touched, values, status, history}) => {

    useEffect(()=>{
        const token = localStorage.getItem('ec-token');
        if(token){
            axiosWithAuth()
            .get('')
            .then(res=>{
                history.push('/form');
                //already logged in
            })
            .catch(err=>{
                localStorage.setItem('ec-token', null);
                //false token, reset and continue with login
            })
        }
    },[])

    return(
        <div>
            <h1>Login Form</h1>
            <Form>
                <Field name='username' type='text' placeholder='What is your username?' />
                {touched.username && errors.username && (<p>{errors.username}</p>)}
                
                <Field name='password' type='text' placeholder='What is your password?' />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                
                <button type='submit'>Login</button>
            </Form>

        </div>
    );
};

const FormikOnBoardForm = withFormik({
    mapPropsToValues({ username, password, loginFunction, history }) {
        return{
            username: username || '',
            password: password || '',   
            history: history
        };
    }, 

    validationSchema: Yup.object().shape({

        username: Yup.string().required('A username is required'),
        password: Yup.string().required('A password is required'),

    }),

    handleSubmit(values, { setUsers }){
        loginFunction(values);
    }

})(OnBoardForm);

export default connect(null, {loginFunction})(FormikOnBoardForm);