import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div `
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5 rem;
    background: #2A484E;
`
const StyledLink = styled(Link) `
    text-decoration: none;
    color: white;
`
const Links = styled.div `
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    > a {
        color: white;
    }
`

const Copyright = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    color: white;
`

function Footer() {
    return (
        <FooterContainer>
            <Copyright>
                <p>© Empowered Conversations 2019. All rights reserved.</p>
            </Copyright>
            <Links>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/form'>Tool</StyledLink>
                <a href='#'>How It Works</a>
                <a href='#'>About</a>
                <a href='#'>Blog</a>
            </Links>
        </FooterContainer>
    );
}

export default Footer;