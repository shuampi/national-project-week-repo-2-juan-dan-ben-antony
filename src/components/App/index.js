import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Dashboard from "../Dashboard";
import DaysTitle from "../DaysTitle";
import FeedbackForm from "../FeedbackForm";

import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;
