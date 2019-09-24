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
`
const NavDiv = styled.div `
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
    > a {
        text-decoration: none;
        color: white;
        font-family: 'Open Sans', sans-serif;
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
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/form'>Tool</StyledLink>
                <a href='#'>How It Works</a>
                <a href='#'>About</a>
                {props.isLoggedIn && <a href='/' onClick={()=>handleLogOut()}>Log Out</a>}
                {!props.isLoggedIn && <a href='/login'>Log In</a>}
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