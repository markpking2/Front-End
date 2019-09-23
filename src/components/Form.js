import React, { useState } from 'react';
import { Form as FormikForm } from 'formik';
import { withFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { Route, Switch, Prompt, Redirect, matchPath } from 'react-router-dom';
import LiabilityWaiver from './LiabilityWaiver';
import NamePhone from './NamePhone';
import Submit from './Submit';

function Form(props) {
  const [submitted, setSubmitted] = useState(false);

  const {
        values,
        touched,
        errors
  } = props;

  
  return (
    <div>
      <Prompt
        when={!submitted}
        message={({ pathname }) => {
          return matchPath(pathname, { path: '/form' })
            ? true
            : 'Are you sure you want to navigate away?';
        }}
      />
      <FormikForm>
        <Switch>
          <Redirect from='/form' exact to='/form/namephone' />
          <Route path='/form/namephone' render={(props) => <NamePhone {...props} values={values} touched={touched}
            errors={errors}
          />} />
          <Route path='/form/waiver' component={LiabilityWaiver} />
          <Route path ='/form/submit' render={(props) => <Submit values={values} setSubmitted={setSubmitted} push={props.history.push}/>} />
        </Switch>
      </FormikForm>
    </div>
  );
}

const WithForm = withFormik({
  mapPropsToValues({ senderName, senderPhone, recipientName, recipientPhone }) {
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
    console.log(props);
    values.senderPhone = '+1' + values.senderPhone;
    values.recipientPhone = '+1' + values.recipientPhone;
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
        props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
    }
})(Form);

export default WithForm;
