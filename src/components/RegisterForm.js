import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "./AxiosAuth";
import { connect } from "react-redux";
import {
  registerFunction,
  loginTest,
  activateRegisterModal,
  deactivateRegisterModal
} from "../actions";
import { Link } from "react-router-dom";
import ModalComponent from "./Modal";
import styled from "styled-components";
import { Button } from "reactstrap";

import { CSSTransition } from "react-transition-group";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
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

const NewField = styled(Field)`
  width: 100%;
  height: 35px;
  border: 1px solid rgba(168, 216, 205, 1);
  background-color: white;
  margin-bottom: 20px;
  color: rgb(42, 72, 78, 1);
  border-radius: 5px;
  text-align: left;
  padding-left: 20px;
`;

const Name = styled(Field)`
  width: 47%;
  height: 35px;
  border: 1px solid rgba(168, 216, 205, 1);
  background-color: white;
  margin-bottom: 20px;
  color: rgb(42, 72, 78, 1);
  border-radius: 5px;
  text-align: left;
  padding-left: 20px;
`;

const Names = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;

  && {
    background-color: #24b4a5;
    border-color: white !important;
  }

  &:hover {
    background: white !important;
    color: #24b4a5 !important;
    border-color: #24b4a5 !important;
  }
`;

const FormHeading = styled.h1`
  color: rgba(42, 72, 78, 1);
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;

const Error = styled.p`
  color: rgb(42, 72, 78, 1);
`;

const RegisterForm = ({
  errors,
  touched,
  values,
  status,
  history,
  loginTest,
  registerFunction,
  activateRegisterModal,
  deactivateRegisterModal,
  registerModal
}) => {

  useEffect(() => {
    const token = localStorage.getItem("ec-token");

    if (token) {
      axiosWithAuth()
        .get("/restricted")
        .then(res => {
          loginTest();
          history.push("/form");
          //already logged in
        })
        .catch(err => {
          localStorage.setItem("ec-token", "");
          //false token, reset and continue with register
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
          <FormHeading>Sign Up</FormHeading>

          <Names>
            <Name name="firstName" type="text" placeholder="First name?" />
            {touched.firstName && errors.firstName && (
              <Error>{errors.firstName}</Error>
            )}

            <Name name="lastName" type="text" placeholder="Last name?" />
            {touched.lastName && errors.lastName && (
              <Error>{errors.lastName}</Error>
            )}
          </Names>
          <NewField
            name="phone"
            type="text"
            placeholder="What is your phone number?"
          />
          {touched.phone && errors.phone && <Error>{errors.phone}</Error>}

          <NewField
            name="username"
            type="text"
            placeholder="Enter a unique username"
          />
          {touched.username && errors.username && (
            <Error>{errors.username}</Error>
          )}

          <NewField
            name="password"
            type="password"
            placeholder="What is your password?"
          />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}

          <NewField
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Error>{errors.confirmPassword}</Error>
          )}

          <span style={{ color: "rgba(42, 72, 78, 1)", textAlign: "left" }}>
            Already have an account? Click{" "}
            <Link
              style={{ color: "#24B4A5", textDecoration: "none" }}
              to="/login"
            >
              here
            </Link>{" "}
            to log in
          </span>

          <StyledButton type="submit">Sumbit</StyledButton>
        </StyledForm>
        {registerModal && (
          <ModalComponent
            message="You have been registered! Please log into your new account"
            title="Register successful"
            history={history}
            endPath="/login"
            deactivate={deactivateRegisterModal}
          />
        )}
      </div>
    </CSSTransition>
  );
};

const FormikRegisterForm = withFormik({
  mapPropsToValues({ firstName, lastName, phone, username, password, confirmPassword }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      phone: phone || "",
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .matches(/\d{10}/, "Enter 10 digit phone number without any symbols")
      .max(10, "Enter 10 digit phone number without any symbols")
      .required("A phone number is required"),
    username: Yup.string().required("A username is required"),
    password: Yup.string().required("A password is required"),
    confirmPassword: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
  }),

  handleSubmit(values, { setUsers, ...props } ) {
    props.props.registerFunction(values, props.props.history);
  }
})(RegisterForm);

const mapStateToProps = state => {
  return {
    registerModal: state.registerModal
  };
};

export default connect(
  mapStateToProps,
  {
    registerFunction,
    loginTest,
    activateRegisterModal,
    deactivateRegisterModal
  }
)(FormikRegisterForm);
