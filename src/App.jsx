import React, { useState } from "react";
import "./index.css";

const App = () => {
  const cities = [
    { name: "New York", weather: "Sunny", bgImage: "sunny.jpg" },
    { name: "London", weather: "Rainy", bgImage: "rainy.jpg" },
  ];

  const [index, setIndex] = useState(0);

  const toggleCity = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <div
      className="weather-container"
      style={{ backgroundImage: `url(${cities[index].bgImage})` }}
    >
      <h1>Weather Updates</h1>
      <div className="weather-display">
        <p className="city-name">
          City: <span>{cities[index].name}</span>
        </p>
        <p className="weather-condition">
          Weather: <span>{cities[index].weather}</span>
        </p>
      </div>
      <button className="update-button" onClick={toggleCity}>
        See The Weather
      </button>
    </div>
  );
};

export default App;