import NavBar from "./components/NavBar/NavBar";
import SimpleDesign from "./components/SimpleDesign/SimpleDesign";
import Home from "./components/HomePage/Home";
import MeetUs from "./components/MeetUs/MeetUs";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Blog from "./components/BlogPage/Blog";
import Contact from "./components/ContactPage/Contact";
import Portfolio from "./components/Portfolio/PortfolioPage";
import Footer from "./components/Footer/Footer";
import SigninRegister from "./components/Forms/Form";
import "./components/NavBar//NavBar.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioPage from "./components/Portfolio/PortfolioPage";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SimpleDesign" exact component={SimpleDesign} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Portfolio" exact component={PortfolioPage} />
        <Route path="/MeetUs" component={MeetUs} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Footer" exact component={Footer} />
        <Route path="/signin" exact component={SigninRegister} />
      </Switch>
    </Router>
  );
}

export default App;
//
