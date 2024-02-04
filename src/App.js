import {Routes, Route} from "react-router-dom"
import About from "./about/About";
import Header from "./header/Header";
import Portfolio from './portfolio/Portfolio'
import Services from './services/Services'
import Contact from './contact/Contact'
import Navigation from "./navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
