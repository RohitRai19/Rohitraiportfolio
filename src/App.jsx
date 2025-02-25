import Navbar from "./component/Navbar";
import About from "./component/About";
import Service from "./component/Service/Service";
import Skill from './component/Skills'
import Project from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
              <Navbar/>
            <About/>
             <Service/>
             <Skill/>
             <Project/>
             <Testimonials/>
             <Contact/>
             <Footer/>

    </>
  );
};

export default App;
