import React from 'react'
import Signin from './Sing'
import "./signin.css"

function SigninRegister(){
    return(
    <div className="login-container">
        <div className ="login-register-wrapper">
            <div className="nav-buttons">
                <button id="loginBtn">Login</button>
                <button id="registerBtn">Register</button>
            </div>
         <div className="form-group">
             <Signin/>
            {/* <form action = " " id ="loginform">login</form>
             <form action = " " id ="registerform">register</form> */}
        </div>
        <div className="forgot-panel" > 
            <a href="#"> Forgot your password?</a>
        </div>
    </div>
</div>
    )
}
export default SigninRegister;