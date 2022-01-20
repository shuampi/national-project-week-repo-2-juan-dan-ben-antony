import React from "react";
import { useState } from "react";

function Profile() {
  const [bootcamperName, setBootcamperName] = useState("");
  const [numberOfReflections, setNumberOfReflections] = useState(0);

  async function getBootcamperInfo() {
    const response = await fetch("https://campfire-project.herokuapp.com/all");
    const data = await response.json();
    setBootcamperName(data.payload[0].bc_name);
    setNumberOfReflections(data.payload.length);
  }
  getBootcamperInfo();

  return (
    <div className="profile">
      <img
        id="profile-picture"
        alt="bootcapmer"
        src="https://image.shutterstock.com/image-photo/terenga-village-ulyanovsk-region-russia-260nw-1983510368.jpg"
      />

      <div className="profile-info">
        <h1 id="welcome-back">Welcome back!</h1>
        <h2 id="profile-name">{bootcamperName}</h2>
        <p>You have done {numberOfReflections} reflections so far</p>
      </div>
    </div>
  );
}

export default Profile;
