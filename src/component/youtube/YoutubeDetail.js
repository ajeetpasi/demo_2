import { useEffect, useState } from "react";
import "./tubedetail.css";
const YouTubeDetail = () => {
  const [videokey, setVideokey] = useState(null);

  useEffect(() => {
    const storedVideokey = JSON.parse(localStorage.getItem("videokey"));
    if (storedVideokey) {
      setVideokey(storedVideokey);
    }
  }, []);
  return (
    <div className="main-page">
      {videokey && (
        <div className="videodatail">
          <iframe
            className="iframe1"
            width="700"
            height="600"
            src={`https://www.youtube.com/embed/${videokey}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YouTubeDetail;
