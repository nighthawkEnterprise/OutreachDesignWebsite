import NavBar from "./components/NavBar/NavBar";
import SimpleDesign from "./components/SimpleDesign/SimpleDesign";
import Home from "./components/HomePage/Home";
import MeetUs from "./components/MeetUs/MeetUs";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Blog from "./components/BlogPage/Blog";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import PortfolioPage from "./components/Portfolio/PortfolioPage";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutUs />
      <SimpleDesign />
      <PortfolioPage />
      <Blog />
      <MeetUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
