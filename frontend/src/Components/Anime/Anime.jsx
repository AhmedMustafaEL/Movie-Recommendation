import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./anime.css";

const Anime = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "13416f7036d85d722487c94092a3d9ea"; // Your TMDb API key
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results); // Set the movies from the response
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [apiUrl]);

  return (
    <div>
      <h2 className="animeh2">Popular Anime</h2>

      <div className="container">
        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>→</button>
          <button>»</button>
        </div>

        <div className="grid">
          {movies.slice(0, 16).map((movie) => (
            <div className="card" key={movie.id}>
              <div className={`badge ${movie.badge || 'hd'}`}>
                {movie.badge ? movie.badge.toUpperCase() : 'HD'}
              </div>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
              />
              <Link to={`/movie/${movie.id}`} className="title">
                {movie.title}
              </Link>
              <p className="info">{`${movie.release_date.split('-')[0]} · ${movie.runtime ? `${movie.runtime}m` : 'N/A'}`}</p>
              <p className="type">Movie</p>
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

export default Anime;
