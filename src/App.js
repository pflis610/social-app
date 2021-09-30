import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Menu from './Menu';

import Validation from './Validation';

const userNameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === '') {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters';
  }
  if (fieldValue.trim().length < 4) {
    return `${fieldName} needs to be at least four characters`;
  }
  return null;
};

const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const passwordValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === '') {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters';
  }
  if (fieldValue.trim().length < 6) {
    return `${fieldName} needs to be at least six characters`;
  // }
  // if (fieldValue.trim() musi zawierać co najmniej 1 cyfrę, musi zawierać co najmniej jeden specjalny znak z następujących: ! # @ $ %) {
  //   return `${fieldName} needs to has at least one digit and one characters: ! # @ $ %`;
  }
  return null;
};

const confirmPasswordValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() !== passwordValidation(fieldValue)) {
    return`${fieldName} needs to be same as Password`;
  }
  return null;
};


const validate = {
  userName: name => userNameValidation('User Name', name),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
};

const initialValues = {
  email: 'no@email',
  userName: 'Mary Jane',
  password: 'password',
  confirmPassword: 'confirm password',
};



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
            <Route path="/signUp"
              render={() => (
                <SignUp validate={validate} initialValues={initialValues} />
              )}
            />
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
