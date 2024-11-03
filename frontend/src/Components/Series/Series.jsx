import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Series.css";

const Series = () => {
  const [shows, setShows] = useState([]);
  const apiKey = "13416f7036d85d722487c94092a3d9ea"; // Your TMDb API key
  const apiUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=2`;

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setShows(data.results); // Set the shows from the response
      } catch (error) {
        console.error("Failed to fetch shows:", error);
      }
    };

    fetchShows();
  }, [apiUrl]);

  return (
    <div>
      <h2 className="animeh2">TV Shows Airing Today</h2>

      <div className="container">
        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>→</button>
          <button>»</button>
        </div>

        <div className="grid">
          {shows.slice(0, 16).map((show) => (
            <div className="card" key={show.id}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                alt={show.name} 
              />
              <Link to={`/tv/${show.id}`} className="title">
                {show.name}
              </Link>
              <p className="info">{`${show.first_air_date} · Rating: ${show.vote_average}`}</p>
              <p className="type">TV Show</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>→</button>
          <button>»</button>
        </div>
      </div>
    </div>
  );
};

export default Series;
