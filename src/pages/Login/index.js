import React from "react"
import "./login.css"
import { BiLock } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";


const Login = () => {
    return(
        <div className="login">
            <div className="login-logo">
                <img src="../assets/images/login-icon.png" alt="Login logo"></img>

            </div>
            <div className="login-right">
                <h1>Login</h1>

                <div className="loginInputEmail">
                <input type= "email" placeholder="E-mail Address"></input>
                <BiMailSend/>
                </div>
                
                <div>
                <input type="password" placeholder="Password"></input>
                <BiLock/>
                
                </div>

            </div>
        </div>
    )
}
export default Login;