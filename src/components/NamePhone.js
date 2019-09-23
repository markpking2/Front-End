import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Field } from "formik";


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
        <div className='Form'>
        <div>
          {touched.senderName && errors.senderName && <p>{errors.senderName}</p>}
          <Field type="text" name="senderName" placeholder="Sender's name" />
        </div>
        <div>
          {touched.senderPhone && errors.senderPhone && <p>{errors.senderPhone}</p>}
          <Field type="text" name="senderPhone" placeholder="Sender's phone" />
        </div>
        <div>
          {touched.recipientName && errors.recipientName && <p>{errors.recipientName}</p>}
          <Field type="text" name="recipientName" placeholder="Recipient's name" />
        </div>
        <div>
          {touched.recipientPhone && errors.recipientPhone && <p>{errors.recipientPhone}</p>}
          <Field type="text" name="recipientPhone" placeholder="Recipient's phone" />
        </div>
        {error && <p>Please check you have entered in each field and for errors</p>}
        <Link to='/form/waiver' onClick={(e) => {
            if((values.senderName.length < 1 || values.senderPhone < 1 || values.recipientPhone < 1 || values.recipientPhone < 1) ||
            (errors.senderName || errors.senderPhone || errors.recipientName || errors.recipientPhone)){
                e.preventDefault();
                setError(true);
            }}}>Continue</Link>
      </div>
    );
}

export default NamePhone;

