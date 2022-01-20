import React from "react";

function Profile() {
  return (
    <div className="profile">
      <img
        id="profile-picture"
        alt="bootcapmer"
        src="https://image.shutterstock.com/image-photo/terenga-village-ulyanovsk-region-russia-260nw-1983510368.jpg"
      />

      <div className="profile-info">
        <h1 id="welcome-back">Welcome back!</h1>
        <h2 id="profile-name">Boot Camperson</h2>
        <p>You are on week:5</p>
      </div>
    </div>
  );
}

export default Profile;
