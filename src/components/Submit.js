import React from 'react';


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
            <button onClick={() => props.setSubmitted(true)} type='submit'>Submit</button>
        </div>
    );
    
}

export default Submit;