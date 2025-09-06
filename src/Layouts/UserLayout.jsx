
// src/components/Layout.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../pages/LandingPage.jsx";
// import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  // routes where navbar should be hidden
  const hideNavbarRoutes = ["/signup", "/login"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
