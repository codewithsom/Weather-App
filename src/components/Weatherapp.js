import React, {useEffect, useState} from "react";
import "./css/style.css";

const Weatherapp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Jaipur");

  useEffect( () => {
    const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9f58ee3e207feaf21f0ec9262c78df78`
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
    };
    fetchApi();
  },[search] )

  return (
    <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputField" 
                onChange={ (event) => { setSearch(event.target.value) } }  />

            </div>
    {!city ? (
        <p className="errorMsg">Oops! 🙃 No Data Found</p>
    ) : (
        <div>
        <div className="info">
        <h2 className="location">
            <i className="fas fa-street-view"> </i> {search}
        </h2>

        <h1 className="temp">
            {city.temp}° C
        </h1>

        <h3 className="tempmin_max"> Min : {city.temp_min}° C | Max : {city.temp_min}° C</h3>

    </div> 

    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </div>
    )}

      

        </div>
    </>
  )
}

export default Weatherapp