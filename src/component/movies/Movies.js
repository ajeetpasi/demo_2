import { useEffect, useState } from "react";
import "./Movies.css";
let api = "https://api.themoviedb.org/3/movie/now_playing?page=1";

let IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGJjZGI5YWM5ODNhOWE1M2U5NDQwZDk1YWNlNWVkZCIsInN1YiI6IjY2MzM3NzdjODEzY2I2MDEyNzg3MDE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.obkDNhJfHlR4k9ptiyprl0lEmDBBRofOGIU56saw8DM",
  },
};
// let apiKey = "10bcdb9ac983a9a53e9440d95ace5edd";
const Movies = () => {
  const [moviesData, setMoviesData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(api, options);
    const json = await data.json();
    console.log(json.results);
    const moviedata = await json.results;
    setMoviesData(moviedata);
  }
  return (
    <div>
      {moviesData && (
        <div className="main1">
          {moviesData.map((item) => (
            <div className="cards">
              <img src={IMG_CDN_URL + item.backdrop_path} width="300px" />
              <h5>{item.title}</h5>
              <h5>{item.release_date}</h5>

              <h6>{item.vote_average}</h6>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
