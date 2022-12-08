import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './views/homePage/Home';
import HotelLists from "./views/HotelLists/HotelLists"
import SingleHotel from './views/singleHotelPage/SingleHotel';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<HotelLists />} />
          <Route path='/hotels/:id' element={<SingleHotel />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App