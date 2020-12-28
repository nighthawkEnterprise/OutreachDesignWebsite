import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Blog from "./components/BlogPage/Blog";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutUs />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
