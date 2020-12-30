import NavBar from "./components/NavBar/NavBar";
import SimpleDesign from "./components/SimpleDesign/SimpleDesign";
import Home from "./components/HomePage/Home";
import MeetUs from "./components/MeetUs/MeetUs";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Blog from "./components/BlogPage/Blog";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Icon from './components/Icons/Icon';
import Info from "./components/Icons/Info";
import SigninRegister from "./components/Forms/Form";


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
    </Router>
  );
}

export default App;
// 