import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsection from './Page/Navbar'
import SwiperComponent from './Page/Swipercarosel';
import AboutUs from './Page/About';
import Perspective from './Page/Perspective';
import ImageSlider from './Page/Imagecomparison';

export default function App() {
  return (
    <div>
      <Navbarsection/>
      <SwiperComponent/>
      <AboutUs/>
      <Perspective/>  
      <ImageSlider/>
    </div>
  )
}
