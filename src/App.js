import React, { useState, useEffect } from "react";
import Photo from "./Photo/Photo";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import axios from "axios";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log("Nasa data", response.data);
        return setNasaData(response.data, console.log(nasaData))
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <>
      <Header copyright={nasaData.copyright}/>
      <div className="App">
        <Photo key={nasaData.date} image={nasaData.hdurl} />
      </div>
      <Footer />
    </>
  );
}
export default App;
