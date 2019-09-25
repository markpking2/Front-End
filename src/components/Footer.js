import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 4vh;
    background: #2A484E;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        height: 6vh;
    }

    @media screen and (max-width: 800px) {
      min-height: 6vh;
  }

  @media screen and (max-width: 500px) {
      min-height: 10vh;
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
        <FooterContainer>
            <Copyright>
                <a href='https://empoweredconversation.com/'>
                    <span>© Empowered Conversations 2019.</span>
                    <span>All rights reserved.</span>
                </a>
            </Copyright>
            <Links>
                <a href='https://twitter.com/empoweredconvo/' target='blank'><FaIcon icon={faInstagram} className='fa-lg'/></a>
                <a href='https://www.facebook.com/empoweredconvo/' target='blank'><FaIcon icon={faTwitter} className='fa-lg'/></a>
                <a href='https://www.instagram.com/empoweredconvo/' target='blank'><FaIcon icon={faFacebook} className='fa-lg'/></a>
            </Links>
        </FooterContainer>
    );
}

export default Footer;