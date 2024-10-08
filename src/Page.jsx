
import { Header, Coffee, Tea, AboutUs, Footer, NavLinks, AddFooter, Hero } from "javajunction-frontend"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>


      <Router>
        <Header customNavbarStyle="customNavbarStyle" customNavLinkClass="customNavLinkClass" navLinksClassName="NavLinksclassName" />
        <Routes>
          {/* Default route (home) can be Coffee */}
          <Route path="/" element={<Hero />} />

          {/* Nested routes for Tea and AboutUs */}
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Routes>
        <Footer />
        <AddFooter />
      </Router>
    </>
  );
}

export default App;
