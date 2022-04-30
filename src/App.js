import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Page/Home/Home';
import Product from './Components/Page/product/Product';
import TotalProducts from './Components/Page/TotaolPorducts/TotalProducts';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<TotalProducts />} />
      </Routes>
    </>
  );
}

export default App;
