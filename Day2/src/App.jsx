import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import Profile from './pages/users/Profile';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Services from './pages/Services';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Book from './pages/Book';
import FoodMenu from './pages/FoodMenu';
import Admin from './pages/Admin';
import About from './pages/About';
import EditTheme from './pages/EditTheme';
import AdminLogin from './pages/AdminLogin';
import UserInfo from './pages/UserInfo';
import CreateTheme from './pages/CreateTheme';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';

function userRoutes(){
  return(
    <Routes>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const tokenExpiration = sessionStorage.getItem("tokenexpiration");
      if (Date.now() < tokenExpiration) {
        setIsLoggedIn(true);
      }
    }
  }, []); 
  function adminRoutes()
  {

  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/service" element={<Services />} />
      <Route path="/success" element={<Success />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/food" element={<FoodMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/createTheme" element={<CreateTheme />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/book" element={<Book />} />
      <Route path="/userinfo" element={<UserInfo />} />
      <Route path="/edittheme" element={<EditTheme />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/user/*" element={isLoggedIn?userRoutes():<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
