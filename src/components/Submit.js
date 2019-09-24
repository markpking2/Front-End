import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {activateMessageModal, deactivateMessageModal} from '../actions';
import ModalComponent from './Modal';

const SubmitContainer = styled.div `
    flex-direction: row;
    justify-content: center;
    padding: 2rem 4rem;
    margin: 2rem auto 0 auto;
    width: 45%;
    @media screen and (max-width: 800px) {
        width: 50%;
    }

    @media screen and (max-width: 600px) {
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
    text-align: center;
`

const FormParagraph = styled.p`
    color: rgb(42, 72, 78, 1);
    text-align: center;
`

const StyledButton = styled(Button) `
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

function Submit(props) {
    return (
        <SubmitContainer>
            <div>
                <FormHeading>Data to be submitted:</FormHeading>
                <FormParagraph>Your name: {props.values.senderName}</FormParagraph>
                <FormParagraph>Your phone: {props.values.senderPhone}</FormParagraph>
                <FormParagraph>Recipient name: {props.values.recipientName}</FormParagraph>
                <FormParagraph>Recipient phone: {props.values.recipientPhone}</FormParagraph>
            </div>
            <StyledButton onClick={() => props.setSubmitted(true)} type='submit'>Submit</StyledButton>
        </SubmitContainer>
    );
}

const mapStateToProps = state =>{
    return {
        messageModal: state.loginModal
    }

}

export default connect(mapStateToProps, {activateMessageModal, deactivateMessageModal})(Submit);