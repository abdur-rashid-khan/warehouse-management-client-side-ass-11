import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Forgot from './Components/Page/Forgot/Forgot';
import Home from './Components/Page/Home/Home';
import Login from './Components/Page/Login/Login';
import SignUp from './Components/Page/SignUp/SignUp';

import TotalProducts from './Components/Page/TotaolPorducts/TotalProducts';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventories" element={<TotalProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-forgot" element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
