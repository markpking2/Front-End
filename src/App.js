import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ToolPage from './components/ToolPage';
import Form from './components/Form';
import LoginForm from './components/LoginForm'
import styled from 'styled-components';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import SuccessPage from './components/SuccessPage';

const OuterDiv = styled.div `
  background: linear-gradient(180deg, rgba(42,72,78,1) 0%, rgba(55,115,117,1) 33%, rgba(168,216,205,1) 66%, rgba(221,239,227,1) 100%);
  text-align: center;
  height: 100vh;
`

function App() {
  return (
    <OuterDiv>
      <header className='App-header'>
        <Header/>
        <Switch>
          <Route exact path='/' component={ToolPage}/>
          <Route path='/success' component={SuccessPage}/>
          {/* <Route path='/form' component={Form}/> */}
          <PrivateRoute path="/form" component={props=> <Form {...props} />} />
          
        </Switch>
        <Route path ='/login' component={LoginForm} />
        <Route path ='/register' component={RegisterForm} />
        {/* <Route path ='/login' component={LoginForm} /> */}
        
        {/* <LoginForm /> */}
        <Footer/>
      </header>
    </OuterDiv>
  );
}

export default App;
