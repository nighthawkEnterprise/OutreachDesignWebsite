import NavBar from "./components/NavBar/NavBar";
import SimpleDesign from "./components/SimpleDesign/SimpleDesign";
import Home from "./components/HomePage/Home";
import MeetUs from "./components/MeetUs/MeetUs";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Blog from "./components/BlogPage/Blog";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Icon from './components/Icons/Icon';
import Info from "./components/Icons/Info";
import SigninRegister from "./components/Forms/Form";

import AnimatedNavbar from "./components/animateNavbar/animatedNavbar";
import { Link } from "react-scroll";
import "./components/NavBar//NavBar.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
       <NavBar/>
      
        <Home/>
        <SigninRegister/>
        <Icon/>
        <AboutUs />
        <SimpleDesign/>
        <Blog />
        <MeetUs />
        <Contact />
        <Footer />
      <div>
        <NavBar />
        {/* <Home /> */}
        {/* <SimpleDesign /> */}
        {/* <AboutUs /> */}
        {/* <Blog /> */}
        {/* <MeetUs /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
        {/* <AnimatedNavbar /> */}
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SimpleDesign" exact component={SimpleDesign} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route path="/MeetUs" component={MeetUs} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Footer" exact component={Footer} />
      </Switch>
    </Router>
  );
}

export default App;
