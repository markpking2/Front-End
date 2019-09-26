import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CSSTransition } from "react-transition-group";


const StyledLink = styled(Link) `
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: none;
        color: #24B4A5;
    }
`

const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
`

const FaIcon = styled(FontAwesomeIcon) `
    color: white;

    &:hover {
        color: #24B4A5;
    }
`

const XDiv = styled.div `
    display: flex;
    justify-content: flex-end;
`

function AccountIcon(props) {
    const [accountIcon, setAccountIcon] = useState(true);
    return (

        <CSSTransition
        in={true}
        appear={true}
        timeout={5000}
        classNames="fade"
        unmountOnExit
      >
        <div style={{'min-width': '100px', 'min-height': '75px'}}>

            {accountIcon && <FaIcon onClick={() => setAccountIcon(false)} icon={faUserCircle} className='fa-3x'/>}
            <StyledDiv>
                <XDiv>
                    {!accountIcon && <FaIcon onClick={() => setAccountIcon(true)} icon={faTimesCircle} className='fa-lg'/>}
                </XDiv>
                {!accountIcon && props.isLoggedIn && <StyledLink to ='/login' onClick={()=>props.handleLogOut()}>Log Out</StyledLink>}
                {!accountIcon && props.isLoggedIn && <StyledLink to='/account'>My Account</StyledLink>}
                {!accountIcon && !props.isLoggedIn && <StyledLink to='/login'>Log In</StyledLink>}
            </StyledDiv>
        </div>

        </CSSTransition>

    )
}

export default AccountIcon;