import "./styling.css";
import Home from "./components/HomePage/Home";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/NavComponents/Nav";
import About from "./components/AboutUs/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Activities from "./components/NavComponents/Activities";
import Resources from "./components/NavComponents/Resources";
import Simpledesign from "./components/SimpleDesign/Simpledesign";
import Meetteam from "./components/MeetTeam/Meetteam";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        {/* <Route Path="/Activities" exact component = {Activities}/>
        <Route Path="/Resurces" exact component = {Resources}/> */}
      </Router>

      <Home />
      <Simpledesign />
      <About />
      <Meetteam />
      <ContactPage />

      <Footer />
    </div>
  );
}

export default App;
