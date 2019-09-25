import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {activateModuleModal, deactivateModuleModal} from '../actions';
import ModalComponent from './Modal';

const StyledDiv = styled.div `
    color: white;
`

const StyledButton = styled(Button) `
    && {
        background: #24B4A5;
        border-color: white !important;
    }

    &:hover {
        background: white !important;
        color: #24B4A5 !important;
        border-color: #24B4A5 !important;
    }
`

const StyledInput = styled.input`
  width: 200px;
  height: 35px;
  border: 1px solid #24B4A5;
  background-color: white;
  margin-right: 1rem;
  color: "#2A484E";
  border-radius: 0px;
  text-align: center;
`

const StyledForm = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
`

const Video = styled.iframe `
    border: 0;
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
`

const Module = (props) => {
    const [code, setCode] = useState({
        userID: "",
        guest: ""
    });
    const [sent, setSent] = useState(false);
    const handleChange = e =>{
        setCode(
            {
                ...code,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(code);
        axios
        .post('https://empowered-conversations.herokuapp.com/module', code)
        .then(res=>{
                console.log(res);
                props.activateModuleModal();
            
            setSent(true);  //this removes button
            // moduleModal in state should be set to true
            setCode({userID: "", guest: ""});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return ( 
        <>
        <StyledDiv onSubmit={handleSubmit}>
        <h2>Please watch the video below</h2>
            <Video width="560" height="315" src="https://www.youtube.com/embed/6oqZ-2sRxJs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
            <p>You are about to have a hard conversation</p>
            <p>Fill out the form below with your unique token and click complete.</p><p> We will notify the other party that you are ready to have a conversation.</p>
            {!sent && <StyledForm>
                <StyledInput placeholder="Enter verification code" name="userID" value={code.token} onChange={handleChange} />
                <StyledInput placeholder="Enter your name" name="guest" value={code.guest} onChange={handleChange} />
                <StyledButton type='submit'>Complete</StyledButton>
            </StyledForm>}
            {/* {sent && <h6>Thank you. The person who directed you to this page has been notified that you are ready for a conversation</h6>} */}
        </StyledDiv>
        {props.moduleModal && <ModalComponent message="Thank you for completing this module. The person who directed you here has been notified and will be in touch with you shortly" title="Thank you" history={props.history} endPath='/login' deactivate={props.deactivateModuleModal} />}
        </>
     );
}

const mapStateToProps = state =>{
    return {
        moduleModal: state.moduleModal
    }
}
 
export default connect(mapStateToProps, {activateModuleModal, deactivateModuleModal})(Module);