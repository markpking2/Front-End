import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {logoutFunction, loginTest} from '../actions';

const Logo = styled.img `
    width: 100px;
`

const OuterDiv = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`
const NavDiv = styled.div `
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
    > a {
        text-decoration: none;
        color: white;
        font-family: 'Open Sans', sans-serif;
    }

    > a:hover {
        color: #24B4A5;
        text-decoration: none;
    }

    @media screen and (max-width: 700px) {
        width: 80%;
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`

const StyledLink = styled(Link) `
    text-decoration: none;
    color: white;
`

const StyledButton = styled(Button) `
    && {
        background-color: IndianRed;
    }
`



function Header(props){
    
    const handleLogOut = () =>{
        props.logoutFunction();
        localStorage.setItem("ec-token", "");
    }
    return (
        <OuterDiv>
            <Logo src={require('../img/EmpoweredConversationLogo.png')} alt='Empowered Conversation logo'/>
            
            <NavDiv>
                <a href='https://ecbuild.netlify.com/'>Home</a>
                <a href='#'>How It Works</a>
                <a href='#'>About</a>
                <StyledLink to='/form'>Begin Conversation</StyledLink>
                {props.isLoggedIn && <StyledLink to ='/' onClick={()=>handleLogOut()}>Log Out</StyledLink>}
                {!props.isLoggedIn && <StyledLink to='/login'>Log In</StyledLink>}
            </NavDiv>
        </OuterDiv>
    );
}

const mapStateToProps = state =>{
    return {
        isLoggedIn: state.isLoggedIn
    }
}
export default connect(mapStateToProps, {loginTest, logoutFunction})(Header);