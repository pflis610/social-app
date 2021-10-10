import React, {useState} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Menu from './components/Menu';


function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return (
  
    <Router>
      <div className="App">

        <header className="App-header">
          <Menu setUser={setUser} user={user} />
        </header>

        <main>
          <Switch>
            <Route path="/login">
              <LogIn setUser={setUser} user={user} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>  
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

      </div>
    </Router>
    
  );
}


export default App;
