import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Field } from "formik";
import { Button } from 'reactstrap';
import styled from 'styled-components';

const StyledButton = styled(Button) `
    && {
        background-color: IndianRed;
    }
`
const NewField = styled(Field)`
  width: 100%;
  height: 35px;
  border: 1px solid red;
  background-color: white;
  margin-bottom: 20px;
  color: "#2A484E";
  border-radius: 0px;

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
        <div>
      
        <div>
          {touched.senderName && errors.senderName && <p>{errors.senderName}</p>}
          <NewField 
            type="text" 
            name="senderName" 
            placeholder="Sender's name" 
          />
        </div>
        <div>
          {touched.senderPhone && errors.senderPhone && <p>{errors.senderPhone}</p>}
          <NewField 
            type="text" 
            name="senderPhone" 
            placeholder="Sender's phone" 
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
      </div>
    );
}

export default NamePhone;

