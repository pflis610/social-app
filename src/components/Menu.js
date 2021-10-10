import React from 'react';
import './Menu.css';
import {Link} from "react-router-dom";
import axios from 'axios';



function Menu(props) {

    const logOut = (event) => {
        event.preventDefault()

        let user = JSON.parse(localStorage.getItem('user'))

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + user.jwt_token,
        }
        
        
        axios.post(
                'https://akademia108.pl/api/social-app/user/logout', 
                JSON.stringify({}),
                { 'headers': headers })
            .then((req) => {
        
                localStorage.setItem('user', null)  
                props.setUser(null);
                console.log(req.data);  
            }).catch((error) => {
                console.error(error);
            })
        console.log('wyloguj');
    }


    return(
        <div className="top-container">
            <div className="logo">LOGO</div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {!props.user  &&
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>}
                    {props.user  &&
                        <li>
                            <Link to="/logout" onClick={logOut}>Log Out</Link>
                        </li>}
                    {!props.user  &&
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>}
                </ul>
            </nav>
        </div>
    );
}


export default Menu;