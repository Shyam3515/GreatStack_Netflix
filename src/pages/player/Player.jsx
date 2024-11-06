import React, { useEffect, useState } from "react";
import back_icon from "../../assets/back_arrow_icon.png";

import "./player.css";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDY5YjNmNTkzMmE5NTgwMTMxMGRkYTIwNGZmMDZmOSIsIm5iZiI6MTcxOTMyNDcyMC42MzA4MzEsInN1YiI6IjY2NmJmODYyYTkxOTAzOWVlNWE3ZGQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-0ZwVYYdt6DVwPcd4OU9vcPMNyzOIXm5KJ2UV7UGhFU",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_icon} alt="" onClick={() => navigate(-2)} />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
