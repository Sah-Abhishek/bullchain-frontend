
// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Signup from "./pages/Signup.jsx"
// import Signup from "../pages/Signup";
// import Login from "../pages/Login";
// import Market from "../pages/Market";
// import CryptoDetail from "../pages/CryptoDetail";
// import Dashboard from "../pages/Dashboard";
// import Portfolio from "../pages/Portfolio";
// import TransactionHistory from "../pages/TransactionHistory";

// PrivateRoute Component
// const PrivateRoute = ({ children, isLoggedIn }) => {
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

const AppRoutes = ({ isLoggedIn }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/market" element={<Market />} /> */}
      {/* <Route path="/market/:symbol" element={<CryptoDetail />} /> */}
      {/**/}
      {/* Protected Routes */}
      {/* <Route */}
      {/*   path="/dashboard" */}
      {/*   element={ */}
      {/*     <PrivateRoute isLoggedIn={isLoggedIn}> */}
      {/*       <Dashboard /> */}
      {/*     </PrivateRoute> */}
      {/*   } */}
      {/* /> */}
      {/* <Route */}
      {/*   path="/portfolio" */}
      {/*   element={ */}
      {/*     <PrivateRoute isLoggedIn={isLoggedIn}> */}
      {/*       <Portfolio /> */}
      {/*     </PrivateRoute> */}
      {/*   } */}
      {/* /> */}
      {/* <Route */}
      {/*   path="/history" */}
      {/*   element={ */}
      {/*     <PrivateRoute isLoggedIn={isLoggedIn}> */}
      {/*       <TransactionHistory /> */}
      {/*     </PrivateRoute> */}
      {/*   } */}
      {/* /> */}
    </Routes>
  );
};

export default AppRoutes;
