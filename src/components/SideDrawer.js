import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { logoutFunction, loginTest } from "../actions";
import AccountIcon from "./AccountIcon";

import { CSSTransition } from "react-transition-group";
import '../App.css'


const sideDrawer = props => {
    return (
    <nav className={props.show ? 'side-drawer open': 'side-drawer'}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Begin Conversation</li>
            <li>Module</li>
            <li>Log in</li>
        </ul>
    </nav>
    )};

export default sideDrawer;