import React, { useState, useEffect } from 'react';
import {
    useNavigate,
    Link
} from "react-router-dom";
import logo from '../assets/images/logo.png';

function LoginHeader(props) {

    let navigate = useNavigate();

    useEffect(() => {
    }, [])

    return (
        <div className='loginHeader'>
            <a className="logo"><img src={logo} alt="" /></a>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/ForgotPassword">ForgotPassword</Link></li>
            </ul> 
        </div>
    );
}

export default LoginHeader;