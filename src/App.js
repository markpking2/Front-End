import React from "react";

import { Route, Switch } from "react-router-dom";

import Form from "./components/Form";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";
import SuccessPage from "./components/SuccessPage";
import Module from "./components/Module";

import MyAccount from "./components/MyAccount";
import Intro from "./components/Intro";

const OuterDiv = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(42, 72, 78, 1) 0%,
    rgba(55, 115, 117, 1) 33%,
    rgba(168, 216, 205, 1) 66%,
    rgba(221, 239, 227, 1) 100%
  );
  text-align: center;

  min-height: 94vh;
  padding: 2rem 0;

  @media screen and (max-width: 800px) {
    min-height: 92vh;
  }

  @media screen and (max-width: 500px) {
    min-height: 87vh;
  }
`;

//   @media screen and (max-width: 500px) {
//       min-height: 90vh;
//   }
// `
const values = {
  senderName: "Zach",
  senderPhone: "1234567890",
  recipientName: "Mark",
  recipientPhone: "0987654321"
};
function App() {
  return (
    <div>
      <OuterDiv>
        <header className="App-header">
          <Header />

          <Switch>
            <Route exact path="/" component={Intro} />
            <PrivateRoute path="/success" component={SuccessPage} />

            <PrivateRoute
              path="/form"
              component={props => <Form {...props} />}
            />
          </Switch>

          <Route path="/login" component={LoginForm} />

          <Route path="/module" component={Module} />
          <Route path="/register" component={RegisterForm} />
          <PrivateRoute path="/account" component={MyAccount} />
        </header>
      </OuterDiv>
      <Footer />
    </div>
  );
}

export default App;
