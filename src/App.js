import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Menu from './Menu';


function App() {
  return (
  
    <Router>
      <div className="App">

        <header className="App-header">
          <Menu />
        </header>

        <body>
          <Switch>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>  
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </body>

      </div>
    </Router>
    
  );
}


export default App;
