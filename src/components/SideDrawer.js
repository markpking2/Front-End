import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { logoutFunction, loginTest } from "../actions";
import AccountIcon from "./AccountIcon";

import { CSSTransition } from "react-transition-group";
import '../App.css'

const StyledList = styled.ul`
display: flex;
flex-direction:column;
padding:0;
margin: 0;
> .mobile-li{
width: 100%;
color: green;
text-align:center;
padding: 1.5rem 0;
border-bottom:1px solid #e0e0e0;
:hover{
    background-color:#fafafa;
}
}
> .acc-icon-mobile{
    width: 100%;
    text-align:center;
    padding: 1.5rem 0;
}

`;

const sideDrawer = props => {
    const handleLogOut = () => {
        props.logoutFunction();
        localStorage.setItem("ec-token", "");
      };
    return (
    <nav className={props.show ? 'side-drawer open': 'side-drawer'}>
        <StyledList onClick={props.click}>
            <li className="mobile-li"><Link className="drawer-link" to="/">Home</Link></li>
            <li className="mobile-li"><a className="drawer-link" href="https://ecbuild.netlify.com/">About</a></li>
            <li className="mobile-li"><Link className="drawer-link" to="/form">Begin Conversation</Link></li>
            <li className="mobile-li"><Link className="drawer-link" to="/module">Module</Link></li>
            {!props.isLoggedIn && <li className="mobile-li"><Link className="drawer-link" to="/login">Log In</Link></li>}
        </StyledList>
        {props.isLoggedIn && <StyledList><li className='acc-icon-mobile'><AccountIcon click={props.click}
            handleLogOut={handleLogOut}
          /></li></StyledList>}
    </nav>
    )};


const mapStateToProps = state => {
    return {
      isLoggedIn: state.isLoggedIn
    };
  };

  export default connect(
    mapStateToProps,
    { loginTest, logoutFunction }
  )(sideDrawer);
  