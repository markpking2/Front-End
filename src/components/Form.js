import React, { useState, useEffect } from 'react';
import { Form as FormikForm } from 'formik';
import { withFormik } from "formik";
import * as Yup from 'yup';
import { Route, Switch, Redirect } from 'react-router-dom';
import LiabilityWaiver from './LiabilityWaiver';
import NamePhone from './NamePhone';
import Submit from './Submit';
import {connect} from 'react-redux';
import {sendMessage, loginTest} from '../actions';
import styled from 'styled-components';
import {axiosWithAuth} from './AxiosAuth';
import Modal from './Modal';

// const OuterDiv = styled.div `
//     display: flex;
//     justify-content: center;
//     padding: 2rem;
//     width: 100%;
// `


function Form(props) {

  useEffect(()=>{
    const token = localStorage.getItem('ec-token');
    if(token){
        axiosWithAuth()
        .get('')
        .then(res=>{
          props.loginTest();
            //do nothing
            //token authenticated
        })
        .catch(err=>{
            localStorage.setItem('ec-token', "");
            props.history.push('/login');
            //incorrect token, remove token and push back to login page
        })
    }
},[])

  const [submitted, setSubmitted] = useState(false);

  const {
        values,
        touched,
        errors
  } = props;

  
  return (
      <div>
         <div>
          <FormikForm>
            <Switch>
              <Redirect from='/form' exact to='/form/namephone' />
              {/* actual path = 'form/namephone' */}
              <Route exact path='/form/namephone' render={(props) => <NamePhone {...props} values={values} touched={touched}
                errors={errors}
              />} />
                
              <Route path='/form/waiver' component={LiabilityWaiver} />
              <Route path ='/form/submit' render={(props) => <Submit values={values} setSubmitted={setSubmitted} history={props.history} push={props.history.push}/>} />
            </Switch>
          </FormikForm>
        </div>
      </div>
  );
}

const WithForm = withFormik({
  mapPropsToValues({ senderName, senderPhone, recipientName, recipientPhone, sendMessage }) {
    return {
      senderName: senderName || '',
      senderPhone: senderPhone || '',
      recipientName: recipientName || '',
      recipientPhone: recipientPhone || ''
    };
  },

  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    senderName: Yup.string()
      .required("Sender name is required"),
    senderPhone: Yup.string()
      .matches(/\d{10}/, 'Enter 10 digit phone number without any symbols')
      .max(10, 'Enter 10 digit phone number without any symbols')
      .required("Sender's phone is required"),
    recipientName: Yup.string()
      .required("Recipient's name is required"),
    recipientPhone: Yup.string()
      .matches(/\d{10}/, 'Enter 10 digit phone number without any symbols')
      .max(10, 'Enter 10 digit phone number without any symbols')
      .required("Recipient's phone is required"),
  }),
  //======END VALIDATION SCHEMA==========

  handleSubmit(values, { props, setSubmitted, resetForm, setSubmitting }) {
    
    values.senderPhone = '+1' + values.senderPhone;
    values.recipientPhone = '+1' + values.recipientPhone;
    props.sendMessage(values, props.history);

  }
})(Form);

export default connect(null, {sendMessage, loginTest})(WithForm);
