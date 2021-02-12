import "./signin.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
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
        <a href="#" id="fb" className="fa fa-facebook"></a>
        <a href="#" id="twitter" className="fa fa-twitter"></a>
        <a href="#" id="google" className="fa fa-linkedin "></a>
      </div>
    </>
  );
}
export default Signup;
