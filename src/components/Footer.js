import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from "react-transition-group";

const FooterContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 6vh;
    background: #2A484E;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        min-height: 8vh;
    }

  @media screen and (max-width: 500px) {
      min-height: 13vh;
  }
`
const StyledLink = styled(Link) `
    text-decoration: none;
    color: white;
`
const Links = styled.div `
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    > a {
        color: white;
    }

    > a:hover {
        color: #24B4A5;
        text-decoration: none;
    }
`

const Copyright = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    @media screen and (max-width: 800px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

    > a {
        color: white;
    }

    > a:hover {
        text-decoration: none;
        color: #24B4A5;
    }
`

const FaIcon = styled(FontAwesomeIcon) `
    color: white;

    &:hover {
        color: #24B4A5;
    }
`

function Footer() {
    return (
        <CSSTransition
        in={true}
        appear={true}
        timeout={5000}
        classNames="fade"
        unmountOnExit
      >
        <FooterContainer>
            <Copyright>
                <a href='https://empoweredconversation.com/'>
                    <span>© Empowered Conversations 2019. </span>
                    <span>All rights reserved.</span>
                </a>
            </Copyright>
            <Links>
                <a href='https://twitter.com/empoweredconvo/' target='blank'><FaIcon icon={faInstagram} className='fa-2x'/></a>
                <a href='https://www.facebook.com/empoweredconvo/' target='blank'><FaIcon icon={faTwitter} className='fa-2x'/></a>
                <a href='https://www.instagram.com/empoweredconvo/' target='blank'><FaIcon icon={faFacebook} className='fa-2x'/></a>
            </Links>
        </FooterContainer>
        </CSSTransition>
    );
}

export default Footer;