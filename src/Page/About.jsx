import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="main-about-title text-center pb-5 pt-5">
              About Us
            </h2>
      <div className="container">
        <div className="row align-items-center">
          {/* Image on Top for md and below */}
          <div className="col-md-6 order-md-1 order-1 text-center">
            <img
              src="img/group.jpg" // Replace with your image URL
              alt="About Rainpic Infotech"
              className="img-fluid rounded about-image"
            />
          </div>

          {/* Content Below Image on md and below */}
          <div className="col-md-6 order-md-2 order-2">
            
            <h2 className="about-title mb-4">
              Rainpic Infotech
            </h2>
            <p className="about-text">
              At Rainpic Infotech, we turn ordinary real estate photos into extraordinary visuals that sell. With a perfect blend of creativity and cutting-edge editing techniques, we enhance property images to captivate buyers and maximize impact.
            </p>
            <p className="about-text">
              From flawless color correction and sky enhancements to virtual staging and HDR blending, our expert team ensures that every photo tells a compelling story. We understand that in real estate, first impressions are everything—and that’s why we deliver stunning, high-quality images with speed and precision.
            </p>
            <p className="about-text">
              Whether you're a realtor, photographer, or agency, Rainpic Infotech is your trusted partner in making every property stand out. Let us bring your listings to life with unmatched clarity and brilliance!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
