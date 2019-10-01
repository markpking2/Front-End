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
  text-align: center;
  background: linear-gradient(to top, #c9d6ff, #e2e2e2);
  height:auto;
  min-height: 96vh;
  padding-bottom: 2em;
  @media screen and (max-width: 800px) {
    min-height: 92vh;
  }
  @media screen and (max-width: 500px) {
    min-height: 87vh;
  }
`;


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
