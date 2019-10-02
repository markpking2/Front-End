import React, {useState} from "react";
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
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'


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
  const [sideDrawerOpen, setSideDrawerOpen]=useState(false)
const  drawerToggleClickHandler = () =>{
    setSideDrawerOpen(!sideDrawerOpen)
  }
  const  backdropClickHandler = () =>{
    setSideDrawerOpen(false)
  }
  let backdrop;
  if(sideDrawerOpen){
    backdrop =   <Backdrop click={backdropClickHandler}/>;
  }
  return (
    <div style={{height:'100%'}}>
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      <OuterDiv>
        <header className="App-header">
          <Header drawerClickHandler={drawerToggleClickHandler}/>
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
