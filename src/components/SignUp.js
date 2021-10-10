import React from 'react';
import './SignUp.css';

import {Input} from './Input.style';
import useSignUpForm from "../hooks/useSignUpForm";
import validate from '../helpers/signUpFormValidationRules';


const SignUp = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useSignUpForm(login, validate);


  function login() {
    console.log('No errors, submit callback called!');
  }

 
    return(
        <div className="sign-up">
            <h1>Sign Up</h1>
            
            <form className="sign-up-form" onSubmit={handleSubmit} noValidate>

                <Input autoComplete="off" className="input" type="text" name="userName" placeholder="User Name" onChange={handleChange} value={values.userName || ''} required />
                  {errors.userName && (<p className="error">{errors.userName}</p>)}               

                <Input autoComplete="off" className="input" type="email" name="email" placeholder="E-mail" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (<p className="error">{errors.email}</p>)}

                <Input autoComplete="off" className="input" type="text" name="password" placeholder="Password" onChange={handleChange} value={values.password || ''} required />
                  {errors.password && (<p className="error">{errors.password}</p>)}

                <Input autoComplete="off" className="input" type="text" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} value={values.confirmPassword || ''} required />
                  {errors.confirmPassword && (<p className="error">{errors.confirmPassword}</p>)}
                
                <button className="btn" type="submit">Sign Up</button>

            </form>
        </div>
    );
  
}


export default SignUp;