import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Info from "./Info";
import Gallery from "./Gallery";
import Portofolio from "./Portofolio";
import FAQ from "./FAQ";

import './Icon.css'

function Icon(){
    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
  
return(
    <Router>

    <Switch>
        <Route exact path="/info"  component={Info}></Route>
        <Route exact path="/gallery" exact component={Gallery}></Route>
        <Route exact path="/port" exact component={Portofolio}></Route>
        <Route exact path="/fqa" exact component={FAQ}></Route>
    </Switch>

        
    <div class="container">
        <Link to="" className="btn btn-1">
     
                <h2>icon</h2>
     
        </Link>

    <Link to="/gallery" className="btn btn-2">
       
            {/* <i className="fa fa-chevron-up"></i> */}
            <h2>Gallery</h2>
     
    </Link>

    <Link to="/port"  className="btn btn-3">
        
    {/* <i className="fa fa-music"></i> */}
        <h2>Prt</h2>
    
    </Link>

    <Link to="/faq" className="btn btn-4" >
       
        {/* <i className="fa fa-globe"></i> */}
        <h2>FQA</h2>
     
    </Link>

    <Link  to="/info" className="btn btn-5" >
        
            <h2>info</h2>
     
    </Link>
</div>
</Router>
)
}

export default Icon