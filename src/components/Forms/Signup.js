import "./Signin.css" 
import { Link } from 'react-router-dom'

function Signup(){
    return(
        <>
     <label for="fullname">full name</label>
      <input type="text" id="fullname" />
      <label for="email">email</label>
      <input type="email" id="email" />
      <label for="password">password</label>
      <input type="password" id="password" />
      <label for="password">confirm password</label>
      <input type="password" id="confirmpassword" />
      <input type="submit" value="submit" class="submit" />
      <div className="icon-cont">
      <a to="https://www.facebook.com/login/web/" id="fb" class="fa fa-facebook"></a>
      <a to="https://twitter.com/login" id ="twitter" class="fa fa-twitter"></a>
      <a to="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" id="google" class="fa fa-google "></a>
      </div>
        </>
    )
}
export default Signup