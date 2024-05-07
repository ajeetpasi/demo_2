import { useEffect, useState } from "react";

const Weather = () => {
  let Api_Key = "6182a273b8ea8c9a9e7f5e9661574f9d";
  const [cityName, SetCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  async function fetchData() {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Api_Key}`
    );
    let json = await data.json();
    console.log(json);
    setWeatherData(json);
  }

  const handleChange = (e) => {
    SetCityName(e.target.value);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Button</button>
      {weatherData && (
        // Check if weatherData is not null before rendering
        <div>
          <h1>{weatherData.name}</h1>
          <h2>{weatherData.main.temp}</h2>
          <h3>{weatherData.main.temp_max}</h3>
        </div>
      )}

      {weatherData && (
        <div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://embedgooglemap.net/124/">shrek 123movies</a>
              {/* <br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;} */}
              {/* </style><a href="https://www.embedgooglemap.net"></a><style> */}
              .gmap_canvas
              {/* {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
