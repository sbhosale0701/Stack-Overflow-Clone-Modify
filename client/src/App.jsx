/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Import All Components
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";

import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

function App() {
  const dispatch = useDispatch();

  // this cause, it can call those fun  every time it reload
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      // Fetch weather information
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=11dba91edeb54275e9a5fd11ad5ff161`
      )
        .then((response) => response.json())
        .then((data) => {
          var currentWeather = data.weather[0].main; // Assuming the weather condition is represented by a single main condition
          var currentTime = new Date().getHours();

          // Determine theme based on weather and time
          var theme = "light";
          if (currentWeather === "Clouds" || (currentTime >= 6 && currentTime < 18)) {
            theme = "dark";
          }

          // Update website theme
          document.body.classList.add(theme);
        })
        .catch((error) => {
          console.error("Error fetching weather:", error);
        });
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </>
  );
}

export default App;