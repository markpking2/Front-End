import React, {useEffect} from 'react';
import styled from 'styled-components';
import {axiosWithAuth} from './AxiosAuth';
import {connect} from 'react-redux';
import {loginTest} from '../actions';
import { CSSTransition } from "react-transition-group";

const OuterContainer = styled.div `
    width: 80%;
    margin: 0 auto;
    color: white;
`
const StyledBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0px;
    padding: 2rem 4rem;
    margin: 0 auto;
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

const AcceptDiv = styled.div ` 
    color: rgb(42, 72, 78, 1);
    margin: 0 auto;
    width: 95%;

    > p {
        text-align: left;
    }
`

const StyledHeading = styled.h1 `
  color: rgb(42, 72, 78, 1);
  text-align: center;

  @media screen and (max-width: 550px) {
        font-size: 2rem;
    }
`

const StyledParagraph = styled.p`
  color: rgb(42, 72, 78, 1);
  text-align: left;
`

const SuccessPage = (props) => {

    useEffect(()=>{
        const token = localStorage.getItem('ec-token');
        if(token){
            axiosWithAuth()
            .get('')
            .then(res=>{
              props.loginTest();
                //do nothing
                //token authenticated
            })
            .catch(err=>{
                localStorage.setItem('ec-token', "");
                props.history.push('/login');
                //incorrect token, remove token and push back to login page
            })
        }
    },[])


    return (
        <StyledBox>
            <AcceptDiv>
                <StyledHeading>Congratulations on taking the first step!</StyledHeading>
                <StyledParagraph>Your friend has recieved a message about your situation. Your name was not mentioned.</StyledParagraph>
                <StyledParagraph>When they finish their module you will get a text back saying they have completed it and are ready to talk.</StyledParagraph>
                <StyledParagraph>We know you may be anxious to get a text back.</StyledParagraph>
                <StyledParagraph>If you do not recieve a text that could mean one of two things:</StyledParagraph>
                <StyledParagraph> Either:</StyledParagraph>
                <StyledParagraph>1: Your friend never opened the link we sent them</StyledParagraph>
                <StyledParagraph>2: Your friend watched the video, but never completed the form saying they were done.</StyledParagraph>
                <StyledParagraph>You are more than welcome to still have this conversation with that friend, it just means they may not have utilized the tools we provided them with to prepare for the conversation.</StyledParagraph>
            </AcceptDiv>
        </StyledBox>
     );
}
 
export default connect(null, {loginTest})(SuccessPage);