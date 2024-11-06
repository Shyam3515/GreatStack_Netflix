import "./titleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  //to make scroll horizontally without using shift key
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  // Data
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDY5YjNmNTkzMmE5NTgwMTMxMGRkYTIwNGZmMDZmOSIsInN1YiI6IjY2NmJmODYyYTkxOTAzOWVlNWE3ZGQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MlTwqKF4ja26zFY5OQNlZdyc5M9KquLAhnORBDNV1eI",
    },
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="title_cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
