import React from "react";
import Slider from "react-slick";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const compareImages = [
    { before: "img/room1.jpg", after: "img/room2.jpg" },
    { before: "img/room2.jpg", after: "img/room3.jpg" },
    { before: "img/room1.jpg", after: "img/room2.jpg" },
    { before: "img/room3.jpg", after: "img/room1.jpg" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {compareImages.map((item, index) => (
          <div key={index} className="slide">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={item.before} alt="Before" />}
              itemTwo={<ReactCompareSliderImage src={item.after} alt="After" />}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
