import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { logoutFunction, loginTest } from "../actions";
import AccountIcon from "./AccountIcon";

import { CSSTransition } from "react-transition-group";

const Logo = styled.img`
  width: 100px;

  &:hover {
    opacity: 0.4;
  }
`;

const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 2rem 2rem;
  min-height: 120px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
const NavDiv = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  text-decoration: none;
  > a {
    text-decoration: none;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-size: 1.1rem;
  }

  > a:hover {
    color: #24b4a5;
    text-decoration: none;
  }

  @media screen and (max-width: 950px) {
    width: 75%;
  }

  @media screen and (max-width: 750px) {
    width: 85%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
`;

const StyledButton = styled(Button)`
  && {
    background-color: IndianRed;
  }
`;

function Header(props) {
  const handleLogOut = () => {
    props.logoutFunction();
    localStorage.setItem("ec-token", "");
  };
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={5000}
      classNames="fade"
      unmountOnExit
    >
      <OuterDiv>
        <a href="https://ecbuild.netlify.com/">
          <Logo
            src={require("../img/EmpoweredConversationLogo.png")}
            alt="Empowered Conversation logo"
          />
        </a>

        <NavDiv>
          <StyledLink to="/">Home</StyledLink>

          <a href="https://ecbuild.netlify.com/">About</a>
          <StyledLink to="/form">Begin Conversation</StyledLink>
          <StyledLink to="/module">Module</StyledLink>
          {!props.isLoggedIn && <StyledLink to="/login">Log In</StyledLink>}
          {props.isLoggedIn && <AccountIcon
            handleLogOut={handleLogOut}
          />}
        </NavDiv>
      </OuterDiv>
    </CSSTransition>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};
export default connect(
  mapStateToProps,
  { loginTest, logoutFunction }
)(Header);
