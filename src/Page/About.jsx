import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Content */}
          <div className="col-md-6">
            <h2 className="mb-4">About Us – Rainpic Infotech</h2>
            <p className="lead">
              At Rainpic Infotech, we turn ordinary real estate photos into extraordinary visuals that sell. With a perfect blend of creativity and cutting-edge editing techniques, we enhance property images to captivate buyers and maximize impact.
            </p>
            <p>
              From flawless color correction and sky enhancements to virtual staging and HDR blending, our expert team ensures that every photo tells a compelling story. We understand that in real estate, first impressions are everything—and that’s why we deliver stunning, high-quality images with speed and precision.
            </p>
            <p>
              Whether you're a realtor, photographer, or agency, Rainpic Infotech is your trusted partner in making every property stand out. Let us bring your listings to life with unmatched clarity and brilliance!
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src="img/group.png" // Replace with your image URL
              alt="About Rainpic Infotech"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;