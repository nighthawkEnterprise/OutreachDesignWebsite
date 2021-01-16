import "./signin.css";

function Signin() {
  return (
    <>
      <i class="fa fa-envelope icon"></i>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <i class="fa fa-key icon"></i>
      <label for="password">PASSWORD</label>
      <input type="password" id="password" />
      <input type="submit" value="submit" className="submit" />
    </>
  );
}
export default Signin;
