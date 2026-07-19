import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Banner from "./components/Banner";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Services />
              <Whyus />
              <Gallery />
              <Testimonials />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/book" element={<Book />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;