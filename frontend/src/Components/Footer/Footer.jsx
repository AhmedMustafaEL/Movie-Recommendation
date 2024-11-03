import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footercont'>
    <div className="container1">
      <h1>
       W<span style={{ color: "#008CBA" }}>atchNest</span>
      </h1>
      <p>
        Fmovies is a top free streaming website where you can watch movies online without
        registration. With a big database and great features, we're confident
        that FMovies is the best free movies plateform you simply can't miss!
      </p>
      <p>
        <a href="#"><i className="fab fa-twitter"></i> Connect with us on Twitter</a>
      </p>
      <div className="links">
        <ul>
          <li><strong>Links</strong></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Top IMDB</a></li>
        </ul>
        <ul>
          <li><a href="#">Action Movies</a></li>
          <li><a href="#">Horror Movies</a></li>
          <li><a href="#">Sci-fi Movies</a></li>
          <li><a href="#">Thriller Movies</a></li>
        </ul>
        <ul>
          <li><a href="#">Android App</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="footer">
        <p>
          This site does not store any files on our server; we only link to media hosted on third-party services.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
