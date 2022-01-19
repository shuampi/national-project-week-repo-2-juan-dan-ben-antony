import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Header"
import Profile from "../Profile";

function Dashboard() {
  return (
    <main>
      <nav>
        <Link to="/dashboard">About</Link>
      </nav>
      <Profile/>
    </main>
  );
}

export default Dashboard;
