import React from "react";
import "./styles.css";
import { useState } from "react";

const locDB = {
  Banglore: [
    { name: "Banglore Fort", rating: "5/5" },
    { name: "Lal Bagh", rating: "4/5" }
  ],

  Malnad: [
    {
      name: "Sringeri",
      rating: "5/5"
    },
    {
      name: "Chickmaglore",
      rating: "5/5"
    }
  ],
  Waterfalls: [
    {
      name: "Jhari falls",
      rating: "3.5/5"
    },
    {
      name: "Dhood sagar",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedPlace, setPlace] = useState("Banglore");
  function placeClickHandler(place) {
    setPlace(place);
  }
  return (
    <div className="App">
      <h1><u> 🌈Amazing Locations🚗 </u></h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        <i><marquee>Checkout the beautiful places. Select one to get started.🎈</marquee></i>{" "}
      </p>

      <div>
        {Object.keys(locDB).map((place) => (
          <button
            onClick={() => placeClickHandler(place)}
            style={{
              cursor: "pointer",
              background: "lightblue",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              
              fontSize: "medium",
              fontWeight: "bold",
              margin: "1rem 0.3rem"
            }}
          >
            {place}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {locDB[selectedPlace].map((loc) => (
            <li
              key={loc.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid red",
                width: "80%",
                margin: "1rem 0rem",
                borderStyle: "dashed",
                backgroundColor: "lightgrey",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {loc.name} </div>
              <div style={{ fontSize: "smaller" }}> {loc.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
