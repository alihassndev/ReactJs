import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/work/work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
