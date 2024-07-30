import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main>
        <WeatherForm setWeather={setWeather} />
        {weather && <WeatherCard weather={weather} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
