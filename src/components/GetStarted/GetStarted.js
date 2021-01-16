import './Getstarted.css'
import Dynamic from './img/Dynamic.gif'
import Static from './img/Static.jpg'
import Native from './img/Native.png'
import Footer from '../Footer/Footer';



function GetStarted(){
    return (
 <div>
<div className="getqote">
        <div class="getQoute-img">
            <div className="qouteSelection"><img src={Dynamic}></img></div>
                {/* <p className="dynamic">Dynamic</p> */}
            <div className="qouteSelection"><img src={Static}></img></div>
                {/* <p className="dynamic">Dynamic</p> */}
            <div className="qouteSelection"><img src={Native}></img></div>
                {/* <p className="dynamic">Dynamic</p> */}
        </div>  
   
<div className="form-q">
    <form className="getQoute-form">
        <label for="fullname">full name</label>
        <input type="text" id="fullname" />
        <label for="email">email</label>
        <input type="email" id="email" />
        <input type="submit" value="request qoute" class="submit" />
        {/* <button>Request Qoute</button> */}
    </form>
    </div>
</div>
            
<div className="get-footer">
    <Footer />
    </div>
</div> 
    )
}
export default GetStarted
