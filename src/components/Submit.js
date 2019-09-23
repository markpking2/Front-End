import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const StyledButton = styled(Button) `
    && {
        background-color: IndianRed;
    }
`

function Submit(props) {
    return (
        <div>
            <div>
                <h2>Data to be submitted:</h2>
                <p>Sender name: {props.values.senderName}</p>
                <p>Sender phone: {props.values.senderPhone}</p>
                <p>Recipient name: {props.values.recipientName}</p>
                <p>Recipient phone: {props.values.recipientPhone}</p>
            </div>
            <StyledButton onClick={() => props.setSubmitted(true)} type='submit'>Submit</StyledButton>
        </div>
    );
    
}

export default Submit;