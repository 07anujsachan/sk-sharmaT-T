import { About } from "./components/About";
import { Attractions } from "./components/Attractions";
import { Hero } from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/Scrolltop";
import { Tours } from "./components/Tours";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/Floating";
import { Price } from "./components/Taxi_fare";
import { Contact } from "./components/Contact";
import { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
// import { Details } from "./components/ContactDeatails";

function App() {
  const [isLoading, setisLoading] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      {/* <Details /> */}
      <BrowserRouter>
        <ScrollToTop />
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
