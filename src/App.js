import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ToolPage from './components/ToolPage';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Link style={{'padding': '0 1rem'}} to='/'>Home</Link>
        <Link style={{'padding': '0 1rem'}} to='/form'>Our Tool</Link>
        <Switch>
          <Route exact path='/' component={ToolPage}/>
          <Route path='/form' component={Form}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
