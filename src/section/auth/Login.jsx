import React from "react";
import loginlogo from '../../asset/loginlogo.png';
import './Login.css';

const Login = () =>{
    return (
        <div className="loginpage">
            <img src={loginlogo} alt="" className="loginlogo"/>
            <p className="firstp">#We are Electric</p>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p style={{color: "#36A546", marginTop:"30px"}}>forget password?</p>
        </div>
       
    );
}

export default Login;