import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Field } from "formik";
import { Button } from 'reactstrap';
import styled from 'styled-components';

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
  border-radius: 0px;
  text-align: left;
  padding-left: 20px
`

const FormContainer = styled.div `
  flex-direction: row;
  justify-content: center;
  padding: 2rem 4rem;
  margin: 2rem auto;
  width: 45%;
  @media screen and (max-width: 800px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto;
    width: 80%;
  }
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0px;

`

const FormHeadingContainer = styled.div `
  display: flex;
  flex-direction: column;
`

const FormHeading = styled.h1 `
  color: rgb(42, 72, 78, 1);
  text-align: left;
`

const FormParagraph = styled.p`
  color: rgb(42, 72, 78, 1);
  text-align: left;
`

function NamePhone(props) {
    const [error, setError] = useState(false);

    const {
        values,
        touched,
        errors,
    } = props;

    useEffect(() => {
        if(!(values.senderName.length < 1 || values.senderPhone < 1 || values.recipientPhone < 1 || values.recipientPhone < 1) &&
        !(errors.senderName || errors.senderPhone || errors.recipientName || errors.recipientPhone)){
            setError(false);
        }
    }, [error, errors.recipientName, errors.recipientPhone, errors.senderName, errors.senderPhone,
        values.recipientPhone, values.senderName.length, values.senderPhone]);
    

    return (
        <FormContainer>
            <FormHeadingContainer>
                <FormHeading>Start a Conversation</FormHeading>
                <FormParagraph>Take a deep breath... </FormParagraph>
            </FormHeadingContainer>
        <div>
          {touched.senderName && errors.senderName && <p>{errors.senderName}</p>}
          <NewField 
            type="text" 
            name="senderName" 
            placeholder="Your name" 
          />
        </div>
        <div>
          {touched.senderPhone && errors.senderPhone && <p>{errors.senderPhone}</p>}
          <NewField 
            type="text" 
            name="senderPhone" 
            placeholder="Your phone" 
          />
        </div>
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
            if((values.senderName.length < 1 || values.senderPhone < 1 || values.recipientPhone < 1 || values.recipientPhone < 1) ||
            (errors.senderName || errors.senderPhone || errors.recipientName || errors.recipientPhone)){
                e.preventDefault();
                setError(true);
            }}}><StyledButton>Continue</StyledButton></Link>
      </FormContainer>
    );
}

export default NamePhone;

