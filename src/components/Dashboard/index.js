import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <main>
      <nav>
        <Link to="/dashboard">About</Link>
      </nav>
    </main>
  );
}

export default Dashboard;
