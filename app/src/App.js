import { About } from "./components/About";
import { Attractions } from "./components/Attractions";
import { Hero } from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Tours } from "./components/Tours";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/Floating";
import { Price } from "./components/Taxi_fare";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/prices" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;
