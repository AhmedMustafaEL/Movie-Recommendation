import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviesDetails.css";
const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]); // State to hold video data
  const apiKey = "13416f7036d85d722487c94092a3d9ea"; // Your TMDb API key
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(movieUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    const fetchVideos = async () => {
      try {
        const response = await fetch(videoUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVideos(data.results); // Set the videos from the response
      } catch (error) {
        console.error("Failed to fetch movie videos:", error);
      }
    };

    fetchMovie();
    fetchVideos();
  }, [id, movieUrl, videoUrl]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container-c">
      <h1>{movie.title}</h1>
      <dev className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </dev>
      <div className="details">
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} minutes</p>
      </div>

      {videos.length > 0 && (
        <div>
          <h2>Trailer</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videos[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MoviesDetails;
