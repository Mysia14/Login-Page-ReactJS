import React,{useState} from "react"
import "./login.css"
import { BiLock } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { HiOutlineEyeOff,HiEye } from "react-icons/hi";


function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")
    const [show, setShow] = useState (false)
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }
    return(
        <div className="login">
            <div className="login-logo">
                <img src="../assets/images/login-icon.png" alt="Login logo"></img>
            </div>
            <div className="login-right">
                <h1>Login App</h1>
                <div className="login-input-email">
                    <BiMailSend size ={25}/>
                    <input type= "email" placeholder="email@domain.com" value={email} onChange={e =>setEmail(e.target.value)}  ></input>
                </div>
                <div className="login-input-password">
                    <BiLock size ={28}/>
                    <input type= {show ? "text" : "password"}  placeholder= "Password" value={password} onChange={e =>setPassword(e.target.value)}></input>
                        <div className="login-eye">
                            {show ? (<HiEye onClick = {handleClick}/>):( <HiOutlineEyeOff onClick = {handleClick}/>)}
                        </div>
                </div>

                    <button  type="submit">
                        <p>Sign In</p>
                    </button>

                <h4>Don't haver an account? </h4>

                <button type="submit">
                    <p>Creat New Account</p>
                </button>

            </div>
        </div>
    )
}
export default Login;