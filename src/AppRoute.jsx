
// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Signup from "./pages/Signup.jsx"
import MarketPage from "./pages/Market.jsx";
import Login from "./pages/Login.jsx";
import NewsPage from "./pages/News.jsx";
// import Signup from "../pages/Signup";
// import Login from "../pages/Login";
// import Market from "../pages/Market";
// import CryptoDetail from "../pages/CryptoDetail";
// import Dashboard from "../pages/Dashboard";
// import Portfolio from "../pages/Portfolio";
// import TransactionHistory from "../pages/TransactionHistory";
// import Navbar from "./components/LandingPage/Navbar.jsx"

// PrivateRoute Component
// const PrivateRoute = ({ children, isLoggedIn }) => {
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

const AppRoutes = ({ isLoggedIn }) => {
  return (
    <>
      {/* <Navbar />    */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
