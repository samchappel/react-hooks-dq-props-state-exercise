import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby,
  normal: normalBaby
}

function BabyHog({ eyeColor, name, hobby }) {
const [ weight, setWeight ] = useState(10)

  function handleChangeWeight(e) {
    console.log(e.target.name)
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.name === "+") {
      console.log('increase weight')
      setWeight((previousWeight) => previousWeight + 1)
    } else {
      console.log('decrease weight')
      setWeight((previousWeight) => previousWeight - 1)
    }

    // e.target.name === "+" ? setWeight((previousWeight) => previousWeight + 1) : setWeight((previousWeight) => previousWeight - 1)
  }

  return (
    <li className="hogbabies">
      <h1>{ name }</h1>
      <h3>Weight: { weight }</h3>
      <h3>Hobby: { hobby }</h3>
      <h4>Eye Color: { eyeColor }</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyeColor]}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
