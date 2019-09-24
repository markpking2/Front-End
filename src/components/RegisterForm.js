import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import {axiosWithAuth} from './AxiosAuth';
import {connect} from 'react-redux';
import {registerFunction, loginTest} from '../actions';

const RegisterForm = ({errors, touched, values, status, history, loginTest}) => {

    useEffect(()=>{
        const token = localStorage.getItem('ec-token');

        if(token){

            axiosWithAuth()
            .get('/restricted')
            .then(res=>{
                loginTest();
                history.push('/form');
                //already logged in
            })
            .catch(err=>{
                localStorage.setItem('ec-token', "");
                //false token, reset and continue with register
            })
        }
    },[])

    return(
        <div>
            <h1>Register Form</h1>
            <Form>
                <Field name='username' type='text' placeholder='What is your username?' />
                {touched.username && errors.username && (<p>{errors.username}</p>)}
                
                <Field name='password' type='text' placeholder='What is your password?' />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                
                <button type='submit'>Register</button>
            </Form>
            <br />
            <p>Already have an account? Click <a href="/login">here</a> to log in</p>

        </div>
    );
};

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, password }){
        return{
            username: username || '',
            password: password || ''
        };
    }, 

    validationSchema: Yup.object().shape({

        username: Yup.string().required('A username is required'),
        password: Yup.string().required('A password is required'),

    }),

    handleSubmit(values, { setUsers, ...props }){
        props.props.registerFunction(values, props.props.history);
    }

})(RegisterForm);

export default connect(null, {registerFunction, loginTest})(FormikRegisterForm);