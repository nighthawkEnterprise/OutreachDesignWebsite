import "./signin.css"

function Signup(){
    return(
        <form action='' id='loginform'>
           <label for="username">USERNAME</label>
            <input type="text" id="username" />
            <label for="password">PASSWORD</label>
             <input type="text" id="password" />
            <input type="submit" value="submit" className="submit" />
        </form>
    )
}
export default Signup