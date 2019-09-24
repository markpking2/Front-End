import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {activatemModuleModal, deactivatemModuleModal} from '../actions';
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
    width: 500px;

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`

const Module = (props) => {
    const [code, setCode] = useState({
        token: ""
    });
    const [sent, setSent] = useState(false);
    const handleChange = e =>{
        setCode({[e.target.name]: e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(code);
        // axios
        // .post('https://empowered-conversations.herokuapp.com/module', code)
        // .then(res=>{
            //     console.log(res);
            
            // setSent(true);  //this removes button
            //moduleModal in state should be set to true
            // setCode({token: ""});
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    }
    return ( 
        <>
        <StyledDiv onSubmit={handleSubmit}>
        <h2>Please watch the video below</h2>
            <Video src="https://player.vimeo.com/video/359791537?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autopause=0&amp;app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" title="Responder Video Preview" data-ready="true"/>
            <p>You are about to have a hard conversation</p>
            <p>Fill out the form below with your unique token and click complete.</p><p> We will notify the other party that you are ready to have a conversation.</p>
            {!sent && <StyledForm>
                <StyledInput placeholder="Enter unique token" name="token" value={code.token} onChange={handleChange} />
                <StyledButton type='submit'>Complete</StyledButton>
            </StyledForm>}
            {/* {sent && <h6>Thank you. The person who directed you to this page has been notified that you are ready for a conversation</h6>} */}
        </StyledDiv>
        {props.moduleModal && <ModalComponent message="Thank you for completing this module. The person who directed you here has been notified and will be in touch with you shortly" title="Thank you" history={props.history} endPath='/success' deactivate={props.deactivateModuleModal} />}
        </>
     );
}

const mapStateToProps = state =>{
    return {
        moduleModal: state.moduleModal
    }
}
 
export default connect(mapStateToProps, {activatemModuleModal, deactivatemModuleModal})(Module);