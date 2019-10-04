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
  padding: 0;
  min-height: 95px;
  @media screen and (max-width: 600px) {
    padding: 1em;
  }
`;
const NavDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  text-decoration: none;
  > a {
    text-decoration: none;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 1.1rem;
    font-weight:400;
    margin-right:30px;
    @media screen and (max-width: 850px) {
      font-size:1rem;
      margin-right:0px;
    }
    @media screen and (max-width: 550px) {
      display:none;
    }
  }
  > img{
    display:none;
    @media screen and (max-width: 550px) {
      display:flex;
      margin-left: auto;
    }
  }
  > a:hover {
    color:#666;
    text-decoration: none;
    transform:scale(1.15);
  }
  @media screen and (max-width: 950px) {
    width: 75%;
  }
  @media screen and (max-width: 750px) {
    width: 85%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    display:none;
  }

`;

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
  @media screen and (max-width: 550px) {
    display:none;
  }
`;
const MobileMenu = styled.img`

@media screen and (min-width: 600px) {
  display:none;
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
        <a className="logo-wrapper"href="https://ecbuild.netlify.com/">
          <Logo
            src={require("../img/ec-logo-w.svg")}
            alt="Empowered Conversation logo"
          />
        </a>

        <NavDiv>
          <StyledLink to="/">Home</StyledLink>
          <a href="https://ecbuild.netlify.com/">About</a>
          <StyledLink to="/form">Begin Conversation</StyledLink>
          <StyledLink to="/module">Module</StyledLink>
          {!props.isLoggedIn && <StyledLink to="/login">Log In</StyledLink>}
          {props.isLoggedIn && <AccountIcon className='account-icon'
            handleLogOut={handleLogOut}
          />}
        </NavDiv>
        <MobileMenu onClick={props.drawerClickHandler} src={require('../img/ham.svg')}></MobileMenu>
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
