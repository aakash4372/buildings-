import React from "react";
import Slider from "react-slick";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
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
    {
      before: "img/room1.jpg",
      after: "img/room2.jpg",
      heading: "Single image",
    },
    {
      before: "img/room2.jpg",
      after: "img/room3.jpg",
      heading: "Single image",
    },
    {
      before: "img/room1.jpg",
      after: "img/room2.jpg",
      heading: "Single image",
    },
    {
      before: "img/room3.jpg",
      after: "img/room1.jpg",
      heading: "Single image",
    },
  ];

  return (
    <div className="slider-container">
        <h2 className="main-about-title text-center pb-5 pt-5">Our Works</h2>
      <div className="container">
        <Slider {...settings}>
          {compareImages.map((item, index) => (
            <div key={index} className="slide">
              <div className="image-heading">{item.heading}</div>
              <ReactCompareSlider
                itemOne={
                  <div className="compare-image">
                    <ReactCompareSliderImage src={item.before} alt="Before" />
                    <div className="compare-text compare-left">Before</div>
                  </div>
                }
                itemTwo={
                  <div className="compare-image">
                    <ReactCompareSliderImage src={item.after} alt="After" />
                    <div className="compare-text compare-right">After</div>
                  </div>
                }
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      border: "2px solid white",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                }
              />
            </div>
          ))}
        </Slider>

        {/* View More Text at Bottom Right */}
        <div className="view-more-text text-end">
          <a
            href="https://www.dropbox.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
