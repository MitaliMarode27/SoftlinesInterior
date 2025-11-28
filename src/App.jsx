import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ModularInterior from "./ModularInterior";
import Projects from "./Projects";
import Walkthrough from "./Walkthrough";
import ContactPage from "./ContactPage";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Testimonials from "./Testimonal";
import DesignCatalog from "./DesignCatalog";
import PricingPackages from "./PricingPackages";
import FAQPage from "./FAQPage";
import HomePage from "./HomePage";

const App = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/modular" element={<ModularInterior/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/walkthrough" element={<Walkthrough/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/howitworks" element={<HowItWorks/>} />
        <Route path="/testimonals" element={<Testimonials/>} />
        <Route path="/catalog" element={<DesignCatalog/>} />
        <Route path="/pricing" element={<PricingPackages/>} />
        <Route path="/faq" element={<FAQPage/>} />
      </Routes>
    </>
  );
};

export default App;
