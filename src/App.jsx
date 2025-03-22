import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsection from './Page/Navbar'
import SwiperComponent from './Page/Swipercarosel';
import AboutUs from './Page/About';

export default function App() {
  return (
    <div>
      <Navbarsection/>
      <SwiperComponent/>
      <AboutUs/>
    </div>
  )
}
