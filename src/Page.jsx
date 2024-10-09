import { Header, Coffee, Tea, AboutUs, Footer, AddFooter, Hero, Orders } from "javajunction-frontend";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useRef } from "react";

function App() {
  // Create refs for each section
  const coffeeRef = useRef(null);
  const teaRef = useRef(null);
  const aboutUsRef = useRef(null);

  // Scroll to the appropriate section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Header
                  customNavbarStyle="customNavbarStyle"
                  customNavLinkClass="customNavLinkClass"
                  navLinksClassName="NavLinksclassName"
                  scrollToSection={scrollToSection}
                  coffeeRef={coffeeRef}
                  teaRef={teaRef}
                  aboutUsRef={aboutUsRef}
                />
                <Hero />


                <div ref={coffeeRef}>
                  <Coffee />
                </div>

                <div ref={teaRef}>
                  <Tea />
                </div>

                <div ref={aboutUsRef}>
                  <AboutUs />
                </div>

                <Footer />
                <AddFooter />
              </>
            }
          />


          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;