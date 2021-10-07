import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LogIn.css';

const LogIn = () => {

    const [values, setValues] = useState({});


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
        
                localStorage.setItem('user', JSON.stringify(req.data))
             
        
                console.log(req.data);  
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
            <h1>Log In</h1>
            <form className="log-in-form" onSubmit={handleSubmit} noValidate>
                <input type="text" className="input" placeholder="User Name" name="username" value= {values.username} onChange= {handleChange} /> 
                <input type="text" className="input" placeholder="Password" name="password" value= {values.password} onChange= {handleChange} />
                <button className="btn" type="submit">Log In</button>
                {localStorage.getItem('user') == {'error':true} && <p className="error">Not valid password</p>} 
            </form>    
        </div>
    );
}


export default LogIn;