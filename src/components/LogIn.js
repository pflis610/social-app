import React, {useState} from 'react';
import axios from 'axios';
import './LogIn.css';

import {Redirect} from "react-router-dom";
import { Input } from './Input.style';

const LogIn = (props) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

    
        let logUser = {
            username: values.username,
            password: values.password,
            ttl: 3600,
        }
    
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        
        axios.post(
                'https://akademia108.pl/api/social-app/user/login', 
                JSON.stringify(logUser),
                { 'headers': headers })
            .then((req) => {
                
                if(req.data.error === false) {
                    localStorage.setItem('user', JSON.stringify(req.data))
                    props.setUser(req.data)
                }    

               
                if(req.data.error !== false) {
                    setErrors(true);
                } else {
                    setErrors(false);
                }

            }).catch((error) => {
                console.error(error);
            })
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
      };


    return(
        <div className="log-in">
            {props.user && <Redirect to="/" />}
            <h1>Log In</h1>
            <form className="log-in-form" onSubmit={handleSubmit} noValidate>
                <Input type="text" className="input" placeholder="User Name" name="username" value= {values.username} onChange= {handleChange} /> 
                <Input type="text" className="input" placeholder="Password" name="password" value= {values.password} onChange= {handleChange} />
                <button className="btn" type="submit">Log In</button>
                {errors && <p className="error">Not valid password</p>} 
            </form>    
        </div>
    );
}


export default LogIn;