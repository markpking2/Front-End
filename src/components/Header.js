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

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
const NavDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  > a {
    text-decoration: none;
    color: white;
    font-family: "Open Sans", sans-serif;
  }

  > a:hover {
    color: #24b4a5;
    text-decoration: none;
  }

  @media screen and (max-width: 900px) {
    width: 70%;
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
`;

const StyledLink = styled(Link)`
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

          <AccountIcon
            handleLogOut={handleLogOut}
            isLoggedIn={props.isLoggedIn}
          />
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
