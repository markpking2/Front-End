import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "./AxiosAuth";
import { connect } from "react-redux";
import { editFunction, loginTest, deleteFunction } from "../actions";
import ModalComponent from "./Modal";
import { Button } from "reactstrap";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import {
  activateEditModal,
  deactivateEditModal,
  activateDeleteModal,
  deactivateDeleteModal
} from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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

const StyledDeleteButton = styled(Button)`
  margin-top: 20px;

  && {
    background: rgba(222, 79, 79, 1);
    border-color: white !important;
    max-width: 200px;
  }

  &:hover {
    background: white !important;
    color: #24b4a5 !important;
    border-color: #24b4a5 !important;
  }
`;

const NewField = styled(Field)`
  width: 90%;
  height: 35px;
  border: 1px solid rgba(168, 216, 205, 1);
  background-color: white;
  margin-bottom: 20px;
  color: rgb(42, 72, 78, 1);
  border-radius: 5px;
  textalign: left;
  padding-left: 20px;
`;

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
const FormHeading = styled.h1`
  color: rgba(42, 72, 78, 1);
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
`;
const Error = styled.p`
  color: rgb(42, 72, 78, 1);
`;

const SubmitContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 2rem auto 0 auto;
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

  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
`;

const FormHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormParagraph = styled.p`
  color: rgb(42, 72, 78, 1);
  text-align: center;
`;

const ArrowDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
`;

const FaIcon = styled(FontAwesomeIcon)`
  color: rgb(42, 72, 78, 1);

  &:hover {
    color: #24b4a5;
  }
`;
const Password = styled(Field)`
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

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MyAccount = ({
  errors,
  touched,
  values,
  status,
  history,
  loginTest,
  editModal,
  activateEditModal,
  deactivateEditModal,
  editFunction,
  deleteFunction,
  deleteModal
}) => {
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("ec-token");
    const uid = localStorage.getItem("userID");
    if (token) {
      axiosWithAuth()
        .get(`/users/${uid}`)
        .then(res => {
          loginTest();
          values.firstName = res.data.firstName;
          values.lastName = res.data.lastName;
          values.username = res.data.username;
          const phone = res.data.phone.slice(2);
          values.phone = phone;
          setEditFirstName(!editFirstName);
          setEditFirstName(editFirstName);
        })
        .catch(err => {
          localStorage.setItem("ec-token", "");
          history.push("/login");
        });
    }
  }, []);

  const handleDelete = () => {
    toggle();
    deleteFunction(history);
  };

  const askDelete = () => {
    setModal(true);
  };
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={5000}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <Modal isOpen={modal} toggle={toggle} className="primary">
          <ModalHeader
            id="login-modal"
            className="styled-header"
            toggle={toggle}
          >
            Warning
          </ModalHeader>
          <ModalBody>Are you sure you want to delete your account?</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => toggle()}>
              No
            </Button>
            <Button color="danger" onClick={() => handleDelete()}>
              Yes
            </Button>
          </ModalFooter>
        </Modal>
        <StyledForm>
          <FormHeading>Account Settings</FormHeading>
          <FlexRow>
            {!editFirstName && <p>First name: {values.firstName} </p>}
            {editFirstName && (
              <NewField
                name="firstName"
                type="text"
                placeholder="First name?"
              />
            )}
            {editFirstName && touched.firstName && errors.firstName && (
              <p>{errors.firstName}</p>
            )}
            <FaIcon
              onClick={() => setEditFirstName(!editFirstName)}
              icon={faPencilAlt}
              className="fa-lg"
            />
          </FlexRow>

          <FlexRow>
            {!editLastName && <p>Last name: {values.lastName} </p>}
            {editLastName && (
              <NewField name="lastName" type="text" placeholder="Last name?" />
            )}
            {editLastName && touched.lastName && errors.lastName && (
              <p>{errors.lastName}</p>
            )}
            <FaIcon
              onClick={() => setEditLastName(!editLastName)}
              icon={faPencilAlt}
              className="fa-lg"
            />
          </FlexRow>

          <FlexRow>
            {!editUsername && <p>Username: {values.username} </p>}
            {editUsername && (
              <NewField
                name="username"
                type="text"
                placeholder="What is your name?"
              />
            )}
            {editUsername && touched.username && errors.username && (
              <p>{errors.username}</p>
            )}
            <FaIcon
              onClick={() => setEditUsername(!editUsername)}
              icon={faPencilAlt}
              className="fa-lg"
            />
          </FlexRow>

          <FlexRow>
            {!editPhone && <p>Phone number: {values.phone} </p>}
            {editPhone && (
              <NewField
                name="phone"
                type="text"
                placeholder="What is your phone number?"
              />
            )}
            {editPhone && touched.phone && errors.phone && (
              <p>{errors.phone}</p>
            )}
            <FaIcon
              onClick={() => setEditPhone(!editPhone)}
              icon={faPencilAlt}
              className="fa-lg"
            />
          </FlexRow>

          <FlexRow>
            {!editPassword && <p>Password: ******** </p>}
            {editPassword && (
              <Password
                name="password"
                type="password"
                placeholder="Enter a new password"
              />
            )}
            {editPassword && touched.password && errors.password && (
              <p>{errors.password}</p>
            )}

            {editPassword && (
              <Password
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            )}
            {editPassword &&
              touched.confirmPassword &&
              errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <FaIcon
              onClick={() => setEditPassword(!editPassword)}
              icon={faPencilAlt}
              className="fa-lg"
            />
          </FlexRow>

          <StyledButton type="submit">Update</StyledButton>
          <StyledDeleteButton onClick={() => askDelete()}>
            Delete Account
          </StyledDeleteButton>
        </StyledForm>
        {editModal && (
          <ModalComponent
            message="Your details have been changed."
            title="Edit successful"
            history={history}
            endPath="/account"
            deactivate={deactivateEditModal}
          />
        )}
        {deleteModal && (
          <ModalComponent
            message="Your account has been deleted"
            title="Delete successful"
            history={history}
            endPath="/"
            deactivate={deactivateDeleteModal}
          />
        )}
      </div>
    </CSSTransition>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    username,
    phone,
    password,
    confirmPassword
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
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
    confirmPassword: Yup.string().when("password", {
      is: passValue => {
        return passValue;
      },
      then: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
    })
  }),

  handleSubmit(values, { setUsers, ...props }) {
    props.props.editFunction(values, props.props.history);
  }
})(MyAccount);

const mapStateToProps = state => {
  return {
    editModal: state.editModal,
    deleteModal: state.deleteModal
  };
};

export default connect(
  mapStateToProps,
  {
    editFunction,
    loginTest,
    activateEditModal,
    deactivateEditModal,
    deleteFunction,
    activateDeleteModal,
    deactivateDeleteModal
  }
)(FormikLoginForm);
