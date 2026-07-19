import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Floater from "./components/Floater";
import Loader from "./components/Loader";

import Banner from "./components/Banner";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
import Testimonials from "./components/Testimonials";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* Route transition loader */}
      <Loader />

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Services />
              <Whyus />
              <Testimonials />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/book" element={<Book />} />
      </Routes>

      <Footer />

      <Floater />
    </Router>
  );
};

export default App;