import { useEffect, useState } from "react";
import "./youtube.css";
import { Link } from "react-router-dom";
let Api_Key = "AIzaSyDuUzZIXqAO2rwjwJOwacItIF2f9Nb7QRM";
const YouTube = () => {
  const [movieName, setMovieName] = useState("");
  const [moviesData, setMoviesData] = useState(null);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const handlCLick = () => {
    fetchData();
  };
  //   fetchData();

  async function fetchData() {
    let data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${movieName}&key=${Api_Key}`
    );
    let json = await data.json();
    let real_data = json.items;
    console.log(real_data);

    setMoviesData(real_data);
  }

  const handleChange = (e) => {
    setMovieName(e.target.value);
  };

  const handlsavedata = () => {
    moviesData.map((item) => {
      let state_string = JSON.stringify(item.id.videoId);
      console.log(state_string);
      localStorage.setItem("videokey", state_string);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Movie Name"
        onChange={handleChange}
      />
      <button onClick={handlCLick}>submit</button>
      <button>save</button>
      {moviesData && (
        <div className="movies">
          {moviesData.map((item) => (
            <Link key={item.id.videoId} to="/home">
              <div className="cards" onClick={handlsavedata}>
                {item.id.videoId && (
                  <iframe
                    className="iframe"
                    width="full"
                    height="200"
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                )}
                <h6>{item.snippet.title}</h6>
                {/* <p>{item.snippet.description}</p> */}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* <div className="flex flex-wrap">
        {moviesData.map((item) => (
          <Link key={item.id.videoId} to={"/home/" + item.id.videoId}>
            <YouTubeCard resData={restaurant} />
          </Link>
        ))}
      </div> */}
    </div>
  );
};
export default YouTube;
