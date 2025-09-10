// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoute.jsx";
import Layout from "./Layouts/UserLayout.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
        <Toaster position="top-center" reverseOrder={false} />
      </Layout>
    </Router>
  );
}

export default App;
