import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Menu from './components/Menu';


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
            <Route path="/signup">
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
