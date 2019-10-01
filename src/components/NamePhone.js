import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Field } from "formik";
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { CSSTransition } from "react-transition-group";

const StyledButton = styled(Button) `
  margin-top: 20px;

    && {
        background-color: #24B4A5;
        border-color: white !important;
    }

    &:hover {
        background: white !important;
        color: #24B4A5 !important;
        border-color: #24B4A5 !important;
    }
`
const NewField = styled(Field)`
  width: 100%;
  height: 35px;
  border: 1px solid rgba(168, 216, 205, 1);
  background-color: white;
  margin-bottom: 20px;
  color: rgb(42, 72, 78, 1);

  border-radius: 5px;
  text-align: left;
  padding-left: 20px
`
const Video = styled.iframe `
  margin: 2rem auto;
  border: 0;
  border-radius: 5px;
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
`

const FormContainer = styled.div `
  flex-direction: row;
  justify-content: center;
  padding: 2rem 4rem;
  margin: 0 auto;
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
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;

`

const FormHeadingContainer = styled.div `
  display: flex;
  flex-direction: column;
`

const FormHeading = styled.h1 `
  color: rgb(42, 72, 78, 1);
  text-align: left;
  font-family: "Open Sans", sans-serif;
`

const FormParagraph = styled.p`
  color: rgb(42, 72, 78, 1);
  text-align: left;
`

// const FormHeadingContainer = styled.div `
//   display: flex;
//   flex-direction: column;
// `

// const FormHeading = styled.h1 `
//   color: rgb(42, 72, 78, 1);
//   text-align: left;
// `

// const FormParagraph = styled.p`
//   color: rgb(42, 72, 78, 1);
//   text-align: left;
// `

function NamePhone(props) {
    const [error, setError] = useState(false);

    const {
        values,
        touched,
        errors,
    } = props;

    useEffect(() => {
        if(!(values.recipientPhone < 1 || values.recipientPhone < 1) &&
        // values.senderName.length < 1 || values.senderPhone < 1 || 
        !(errors.recipientName || errors.recipientPhone)){
          // errors.senderName || errors.senderPhone || 
            setError(false);
        }
    }, [error, errors.recipientName, errors.recipientPhone, 
        values.recipientPhone, ]);
        // errors.senderName, errors.senderPhone,
        // values.senderName.length, values.senderPhone
    

    return (

      <CSSTransition
        in={true}
        appear={true}
        timeout={5000}
        classNames="fade"
        unmountOnExit
      >

      <div>
        <h2>Please watch this video before filling out the form below</h2>
        <Video width="560" height="315" src="https://www.youtube.com/embed/vOa2pj5jdmo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
        <FormContainer>
            <FormHeadingContainer>
                <FormHeading>Start a Conversation</FormHeading>
                <FormParagraph>Take a deep breath... </FormParagraph>
            </FormHeadingContainer>

        {/* <div>

          {touched.senderName && errors.senderName && <p>{errors.senderName}</p>}
          <NewField 
            type="text" 
            name="senderName" 
            placeholder="Your name" 
          />
        </div> */}
        {/* <div>
          {touched.senderPhone && errors.senderPhone && <p>{errors.senderPhone}</p>}
          <NewField 
            type="text" 
            name="senderPhone" 
            placeholder="Your phone" 
          />
        </div>  */}
        <div>
          {touched.recipientName && errors.recipientName && <p>{errors.recipientName}</p>}
          <NewField 
            type="text" 
            name="recipientName" 
            placeholder="Recipient's name" 
          />
        </div>
        <div>
          {touched.recipientPhone && errors.recipientPhone && <p>{errors.recipientPhone}</p>}
          <NewField 
            type="text" 
            name="recipientPhone" 
            placeholder="Recipient's phone" 
          />
        </div>
        <div>
          <span>You've got this.</span>
        </div>
        {error && <p>Please check you have entered in each field and for errors</p>}
        <Link to='/form/waiver' onClick={(e) => {
            if((values.recipientPhone < 1 || values.recipientPhone < 1) ||
            (errors.recipientName || errors.recipientPhone)){
              // values.senderName.length < 1 || values.senderPhone < 1 || 
              // errors.senderName || errors.senderPhone || 
                e.preventDefault();
                setError(true);
            }}}><StyledButton>Continue</StyledButton></Link>
      </FormContainer>
      </div>
      </CSSTransition>
    );
}

export default NamePhone;

