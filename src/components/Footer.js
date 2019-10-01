import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import { CSSTransition } from "react-transition-group";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 4vh;
  background: #57CEB3;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    max-height: 4vh;
  }
  @media screen and (max-width: 500px) {
    min-height: 6vh;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > a {
    color: white;
    margin-right: 10px;
  }

  > a:hover {
    color: #24b4a5;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left:1rem;

  color: white;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  > a {
    color: white;
    font-size:12px;
  }

  > a:hover {
    text-decoration: none;
    color: #24b4a5;
  }
`;

const FaIcon = styled(FontAwesomeIcon)`
  color: white;
  height: 20px;

  &:hover {
    color: #24b4a5;
  }
`;

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
          <a href="https://empoweredconversation.com/">
            <span>© Empowered Conversations 2019. All rights reserved.</span>
          </a>
        </Copyright>
        <Links>
          <a href="https://twitter.com/empoweredconvo/" target="blank">
            <FaIcon icon={faInstagram} className="fa-2x" />
          </a>
          <a href="https://www.facebook.com/empoweredconvo/" target="blank">
            <FaIcon icon={faTwitter} className="fa-2x" />
          </a>
          <a href="https://www.instagram.com/empoweredconvo/" target="blank">
            <FaIcon icon={faFacebook} className="fa-2x" />
          </a>
        </Links>
      </FooterContainer>
    </CSSTransition>
  );
}

export default Footer;
