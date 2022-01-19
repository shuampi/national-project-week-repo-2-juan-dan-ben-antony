import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Header"
import Profile from "../Profile";
import Chart from "../Chart";

function Dashboard() {
  return (
    <main>
      <nav>
        <Link to="/dashboard">About</Link>
      </nav>
      <Profile/>
      <Chart/>
    </main>
  );
}

export default Dashboard;
