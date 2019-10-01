import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { activateModuleModal, deactivateModuleModal } from "../actions";
import ModalComponent from "./Modal";
import { axiosWithAuth } from "./AxiosAuth";
import { loginTest } from "../actions";
import { CSSTransition } from "react-transition-group";

const StyledDiv = styled.div`
  color: rgb(42, 72, 78, 1);
`;

const StyledButton = styled(Button)`
  && {
    background: #24b4a5;
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
`;

const StyledInput = styled.input`
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

const StyledP = styled.p`
    color: rgba(42, 72, 78, 1),
    text-align: left;

`;

const StyledForm = styled.form`
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

const Video = styled.iframe`
  border: 0;
  border-radius: 5px;
  margin: 2rem auto;
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 60%;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const Module = props => {
  useEffect(() => {
    const token = localStorage.getItem("ec-token");
    if (token) {
      axiosWithAuth()
        .get("/restricted")
        .then(res => {
          props.loginTest();
        })
        .catch(err => {
          localStorage.setItem("ec-token", "");
        });
    }
  }, []);

  const [code, setCode] = useState({
    userID: "",
    guest: ""
  });
  const [sent, setSent] = useState(false);
  const handleChange = e => {
    setCode({
      ...code,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("https://empowered-conversations.herokuapp.com/module", code)
      .then(res => {
        props.activateModuleModal();
        setSent(true);
        setCode({ userID: "", guest: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={5000}
      classNames="fade"
      unmountOnExit
    >
      <>
        <h2>Please watch the video below</h2>
        <Video
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6oqZ-2sRxJs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
        <StyledForm onSubmit={handleSubmit}>
          <StyledDiv>
            <FormHeading>
              You are about to have a hard conversation.
            </FormHeading>
            {!sent && (
              <>
                <p style={{ color: "rgba(42, 72, 78, 1)", textAlign: "left" }}>
                  Fill out the form below with your unique token and click
                  complete.
                </p>
                <p style={{ color: "rgba(42, 72, 78, 1)", textAlign: "left" }}>
                  {" "}
                  We will notify the other party that you are ready to have a
                  conversation.
                </p>

                <StyledInput
                  placeholder="Enter verification code"
                  name="userID"
                  value={code.token}
                  onChange={handleChange}
                />
                <StyledInput
                  placeholder="Enter your name"
                  name="guest"
                  value={code.guest}
                  onChange={handleChange}
                />
                <StyledButton type="submit">Complete</StyledButton>
              </>
            )}
            {sent && (
              <p style={{ color: "rgba(42, 72, 78, 1)" }}>
                Thank you. The person who directed you to this page has been
                notified that you are ready for a conversation
              </p>
            )}
          </StyledDiv>
        </StyledForm>
        {props.moduleModal && (
          <ModalComponent
            message="Thank you for completing this module. The person who directed you here has been notified and will be in touch with you shortly"
            title="Thank you"
            history={props.history}
            endPath="/module"
            deactivate={props.deactivateModuleModal}
          />
        )}
      </>
    </CSSTransition>
  );
};

const mapStateToProps = state => {
  return {
    moduleModal: state.moduleModal
  };
};

export default connect(
  mapStateToProps,
  { activateModuleModal, deactivateModuleModal, loginTest }
)(Module);
