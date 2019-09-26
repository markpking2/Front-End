import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "./AxiosAuth";
import { connect } from "react-redux";
import {
  loginFunction,
  loginTest,
  activateLoginModal,
  deactivateLoginModal
} from "../actions";
import { Link } from "react-router-dom";
import ModalComponent from "./Modal";
import { Button } from "reactstrap";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const StyledButton = styled(Button)`
  margin-top: 20px;

  && {
    background: #24b4a5;
    border-color: white !important;
    max-width: 100px;
  }

  &:hover {
    background: white !important;
    color: #24b4a5 !important;
    border-color: #24b4a5 !important;
  }
`;

const NewField = styled(Field)`
  width: 100%;
  height: 35px;
  border: 1px solid rgba(168, 216, 205, 1);
  background-color: white;
  margin-bottom: 20px;
  color: rgb(42, 72, 78, 1);
  border-radius: 0px;
  textalign: left;
  padding-left: 20px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0px;
  padding: 2rem 4rem;
  margin: 2rem auto;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;
const FormHeading = styled.h1`
  color: rgba(42, 72, 78, 1);
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
`;
const Error = styled.p`
  color: rgb(42, 72, 78, 1);
`;

const MyAccount = ({
  errors,
  touched,
  values,
  status,
  history,
  loginTest,
  loginModal,
  activateLoginModal,
  deactivateLoginModal
}) => {
  useEffect(() => {
    const token = localStorage.getItem("ec-token");
    if (token) {
      axiosWithAuth()
        .get("/restricted")
        .then(res => {
          loginTest();
          // history.push('/form');
          //already logged in
        })
        .catch(err => {
          localStorage.setItem("ec-token", "");
          //false token, reset and continue with login
        });
    }
  }, []);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={5000}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <StyledForm>
          <FormHeading>Account Settings</FormHeading>
          {/* <NewField name='username' type='text' placeholder='Enter a new username' />
{touched.username && errors.username && (<p>{errors.username}</p>)} */}

          <NewField
            name="username"
            type="text"
            placeholder="What is your name?"
          />
          {touched.username && errors.username && <p>{errors.username}</p>}

          <NewField
            name="phone"
            type="text"
            placeholder="What is your phone number?"
          />
          {touched.phone && errors.phone && <p>{errors.phone}</p>}

          <NewField
            name="password"
            type="password"
            placeholder="Enter a new password"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}

          <NewField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p>{errors.confirmPassword}</p>
          )}

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
        {loginModal && (
          <ModalComponent
            message="Your details have been changed."
            title="Edit successful"
            history={history}
            endPath="/form"
            deactivate={deactivateLoginModal}
          />
        )}
      </div>
    </CSSTransition>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, phone, password, confirmPassword }) {
    return {
      username: username || "",
      password: password || "",
      phone: phone || "",
      confirmPassword: confirmPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Your name is required"),
    phone: Yup.string()
      .matches(/\d{10}/, "Enter 10 digit phone number without any symbols")
      .max(10, "Enter 10 digit phone number without any symbols")
      .required("Your phone number is required"),
    password: Yup.string().required("A password is required"),
    confirmPassword: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
  }),

  handleSubmit(values, { setUsers, ...props }) {
    console.log(values.username, values.password, values.confirmPassword);
  }
})(MyAccount);

const mapStateToProps = state => {
  return {
    loginModal: state.loginModal
  };
};

export default connect(
  mapStateToProps,
  { loginFunction, loginTest, activateLoginModal, deactivateLoginModal }
)(FormikLoginForm);
