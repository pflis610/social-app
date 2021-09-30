import React from 'react';
import './Menu.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function Menu() {

    return(
        <div>
            <div className="logo">LOGO</div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">LogIn</Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                    </ul>
            </nav>
        </div>
    );
}


export default Menu;