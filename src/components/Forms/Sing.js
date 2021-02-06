import "./signin.css";

function Signin() {
  return (
    <>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="password" id="password" />
      <input type="submit" value="submit" className="submit" />
    </>
  );
}
export default Signin;
