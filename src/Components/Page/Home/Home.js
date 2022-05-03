import React from 'react';
import Slider from '../Banner/Slider';
import Dealership from '../Delership/Dealership';
import Footer from '../Footer/Footer';
import LatestProducts from '../LatestProducts/LatestProducts';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <LatestProducts></LatestProducts>
      <Products></Products>
      <Dealership></Dealership>
      <Footer></Footer>
    </div>
  );
};

export default Home;