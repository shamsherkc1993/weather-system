import React, { useState, useEffect } from "react";
import "./Home.css";
import logoimage from "./logo.png";

const Home = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Tokyo");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6a0471ceacfad5e5b09a0172db63ec40`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  console.log(city);

  return (
    <div className="container">
      <div className="row">
        <div className="main-div">
          <div class="mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Country / City"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <h4 className="city-name">
            <i class="fa-solid fa-city"></i>
            {search}
          </h4>
          {/* <i class="fa-solid fa-cloud"></i> */}
          <img src={logoimage} alt="logoimage" className="logoimg" />

          {!city ? (
            <p className="error-msg">No Country/City Found</p>
          ) : (
            <>
              <p className="temp">{city.temp}</p>

              <ul className="maxmin">
                <li>
                  <p className="max">
                    Max : <span className="title">{city.temp_max}</span>
                  </p>
                </li>
                <li>
                  <p className="humidity">
                    Humidity : <span className="title">{city.humidity}</span>
                  </p>
                </li>
                <li>
                  <p className="min">
                    Min : <span className="title">{city.temp_min}</span>
                  </p>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
