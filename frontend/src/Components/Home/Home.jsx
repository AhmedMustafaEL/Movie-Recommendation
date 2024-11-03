import React from 'react';
import './Home.css';
import Sliders from '../Slider/Slider';
import Movies from './Movies';
import Series from './Series';
import Anime from './Anime';


const Home = () => {
  return (
    <div className='homecontainer'>
    <Sliders/>
    <Movies/>
    <Anime/>
    <Series/>
    
    </div>
  );
};

export default Home;
