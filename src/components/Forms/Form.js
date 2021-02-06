import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Signin from "./Sing";
import Signup from "./Signup";
import "./signin.css";

function SigninRegister() {
  const [registrationForm, setRegistrationForm] = useState(false);
  const loginproperties = useSpring({
    left: registrationForm ? -600 : 0,
    // opacity: registrationForm ? 0 : 1,
  });

  const registerproperties = useSpring({
    left: registrationForm ? 0 : 600,
    // opacity: registrationForm ? 1 : 0,
  });

  const loginBtnProperties = useSpring({
    borderBottom: registrationForm ? "solid 0px red" : "solid 0px red",
  });

  const registerBtnProperties = useSpring({
    borderBottom: registrationForm ? "solid 0px red" : "solid 0px red",
  });

  function signupClicked() {
    setRegistrationForm(true);
  }
  function signinClicked() {
    setRegistrationForm(false);
  }

  return (
    <div className="login-container">
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <animated.button
            onClick={signinClicked}
            className="loginBtn"
            style={loginBtnProperties}
          >
            Login
          </animated.button>

          <animated.button
            onClick={signupClicked}
            className="registerBtn"
            style={registerBtnProperties}
          >
            Register
          </animated.button>
        </div>

        <div className="form-group">
          <animated.form
            action=""
            className="loginform"
            style={loginproperties}
          >
            <Signin />
          </animated.form>

          <animated.form
            action=""
            className="registerform"
            style={registerproperties}
          >
            <Signup />
          </animated.form>
        </div>
        <animated.form className="forgot-panel" style={loginproperties}>
          <a href="#"> Forgot your password?</a>
        </animated.form>
      </div>
    </div>
  );
}
export default SigninRegister;
