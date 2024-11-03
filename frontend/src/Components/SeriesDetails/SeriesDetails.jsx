import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SeriesDetails.css"
const SeriesDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [videos, setVideos] = useState([]);
  const apiKey = "13416f7036d85d722487c94092a3d9ea"; // Your TMDb API key
  const showUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
  const videoUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(showUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Failed to fetch TV show details:", error);
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
        console.error("Failed to fetch TV show videos:", error);
      }
    };

    fetchShow();
    fetchVideos();
  }, [id, showUrl, videoUrl]);

  if (!show) return <div>Loading...</div>;

  return (
    <div className="container-b">
      <h1>{show.name}</h1>

      <dev className="image-container">
      <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
      </dev>
      <div className="details">
      <p>{show.overview}</p>
      <p>First Air Date: {show.first_air_date}</p>
      <p>Number of Seasons: {show.number_of_seasons}</p>
      <p>Runtime: {show.episode_run_time[0]} minutes (per episode)</p>
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

export default SeriesDetail;
