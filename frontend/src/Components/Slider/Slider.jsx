import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows
  };

  return (
    <div className='sliderforwhole'>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="../../public/slider1.jpg" alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src="../../public/slider2.jpg" alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src="../../public/slider3.jpg" alt="Slide 3" className="slider-image" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default SliderComponent;
