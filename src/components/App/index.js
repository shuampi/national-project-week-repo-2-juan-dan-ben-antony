import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Dashboard from "../Dashboard";
import DaysTitle from "../DaysTitle";
import FeedbackForm from "../FeedbackForm";
import { Routes, Route, Link } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="form" element={<FeedbackForm />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
