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
                <div className="login-input-email">
                <BiMailSend/>
                <input type= "email" placeholder="email@domain.com"></input>
                </div>

                <div className="login-input-password">
                <BiLock/>
                <input type="password" placeholder="Password"></input>
                </div>
                <button  type="submit">
                    Sign In
                </button>

                <h4>Don't haver an account? </h4>
                <button type="submit">
                    Creat New Account
                </button>
            </div>
        </div>
    )
}
export default Login;