// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/LandingPage/Navbar";
// import Footer from "./components/Footer";
import AppRoutes from "./AppRoute.jsx";

function App() {
  return (
    <Router>
      <Navbar />        {/* Always visible */}
      <main className="min-h-screen">
        <AppRoutes />   {/* Routes content changes based on URL */}
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
