import React from "react";
import { useState } from "react";

const motQuo = [
  `“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
  `“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`,
  `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain`,
  `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt`,
  `“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale`,
  `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`,
  `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren`,
  `“The best time to plant a tree was 20 years ago. The second best
 time is now.” - Anonymous`,
];

const randnum = Math.floor(Math.random() * 8);

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
    <div className="profile-container">
      <div className="profile">
        <img
          id="profile-picture"
          alt="bootcapmer"
          src="https://pyxis.nymag.com/v1/imgs/4ba/89c/3b25df218bb770a38e4433487158736993-23-matrix-office-space.rsquare.w330.jpg"
        />
      </div>
      <div className="profile-info">
        <div>
          <h1>Motivational Quote of the day...</h1>
          <h3>{motQuo[randnum]}</h3>
        </div>
        <h1 id="welcome-back">Welcome back!</h1>
        <h2 id="profile-name">{bootcamperName}</h2>
        <p>You have done {numberOfReflections} reflections so far</p>
      </div>
    </div>
  );
}

export default Profile;

// https://image.shutterstock.com/image-photo/terenga-village-ulyanovsk-region-russia-260nw-1983510368.jpg
