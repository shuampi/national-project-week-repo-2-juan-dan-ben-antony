import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "../Profile";
import DashboardDisplayContainer from "../DashboardDisplayContainer";
import "./index.css";

function Dashboard() {
  return (
    <main className="main-content">
      <nav>
        <Link to="/dashboard">About</Link>
      </nav>
      <Profile />
      <DashboardDisplayContainer />
    </main>
  );
}

export default Dashboard;

// changed above to dashboard container so athe the changes in display can be taken care of in there
