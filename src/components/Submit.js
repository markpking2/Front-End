import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {activateMessageModal, deactivateMessageModal} from '../actions';
import ModalComponent from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { CSSTransition } from "react-transition-group";


const SubmitContainer = styled.div `
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
        min-width: 90px;
        margin-top: 2rem;
        background-color: #24B4A5;
        border-color: white !important;
    }

    &:hover {
        background: white !important;
        color: #24B4A5 !important;
        border-color: #24B4A5 !important;
    }
`

const ArrowDiv = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem;
`

const FaIcon = styled(FontAwesomeIcon) `
    position: absolute;
    top: 1;
    color: rgb(42, 72, 78, 1);

    &:hover {
        color: rgba(221,239,227,1);
    }
`

function Submit({values, setSubmitted, history, messageModal}) {
    return (
        <SubmitContainer>
            
                <ArrowDiv>
                    <Link to='/form/waiver'><FaIcon icon={faArrowAltCircleLeft} className='fa-3x'/></Link>
                </ArrowDiv>
                <div style={{'padding': '4rem'}}>
                <FormHeading>Data to be submitted:</FormHeading>

                {/* <FormParagraph>Your name: {values.senderName}</FormParagraph>
                <FormParagraph>Your phone: {values.senderPhone}</FormParagraph> */}

                <FormParagraph>Recipient name: {values.recipientName}</FormParagraph>
                <FormParagraph>Recipient phone: {values.recipientPhone}</FormParagraph>
                
            
            <StyledButton onClick={() => setSubmitted(true)} type='submit'>Submit</StyledButton>
            </div>
            {messageModal && <ModalComponent message="Your message has been sent." title="Message Sent" history={history} endPath='/success' deactivate={deactivateMessageModal} />}
        </SubmitContainer>
    );
}

const mapStateToProps = state =>{
    return {
        messageModal: state.messageModal
    }

}

export default connect(mapStateToProps, {activateMessageModal, deactivateMessageModal})(Submit);