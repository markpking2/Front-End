import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { logoutFunction, loginTest } from "../actions";
import AccountIcon from "./AccountIcon";

import { CSSTransition } from "react-transition-group";

const Backdrop = styled.div`
position: fixed;
width:100%;
height:100%;
background: rgba(0,0,0,0.3);
z-index:100;
top:0;
left:0;
`;

const backdrop = props => (
   <Backdrop onClick={props.click}>

   </Backdrop>
);

export default backdrop;