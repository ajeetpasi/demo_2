import logo from "./logo.svg";
import "./App.css";

import Home from "./component/home/Home";
import NavBar from "./component/navbar/Navbar";
import TOdoForm from "./component/todos/todoform";
import Weather from "./component/weatherApp/WeatherApp";
import Movies from "./component/movies/Movies";
import YouTube from "./component/youtube/Youtube";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import YouTubeDetail from "./component/youtube/YoutubeDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      {/* <TOdoForm /> */}
      {/* <Weather /> */}
      {/* <Movies /> */}

      {/* <YouTube /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<YouTube />}>
            {/* <Route index element={<Home />} /> */}
          </Route>
          <Route path="/home" element={<YouTubeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
