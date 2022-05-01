import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Forgot from './Components/Page/Forgot/Forgot';
import Home from './Components/Page/Home/Home';
import Login from './Components/Page/Login/Login';
import RequireAuth from './Components/Page/RequireAuth/RequireAuth';
import SignUp from './Components/Page/SignUp/SignUp';
import SingleProduct from './Components/Page/SingleProduct/SingleProduct';
import TotalProducts from './Components/Page/TotaolPorducts/TotalProducts';
import ManageProducts from './Components/Page/ManageProducts/ManageProducts';
import AddProducts from './Components/Page/AddProducts/AddProducts';
import Update from './Components/Page/Update/Update';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventories" element={
          <RequireAuth>
            <TotalProducts />
          </RequireAuth>
        } />
        <Route path="/product/:id" element={
          <RequireAuth>
            <SingleProduct />
          </RequireAuth>
        } />
        <Route path="/manage-products" element={
          <RequireAuth>
            <ManageProducts />
          </RequireAuth>
        } />
        <Route path="/add-products" element={
          <RequireAuth>
            <AddProducts />
          </RequireAuth>
        } />
        <Route path="/update" element={
          <RequireAuth>
            <Update/>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-forgot" element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
