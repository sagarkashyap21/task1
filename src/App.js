import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from './Contact';
import Navbar from './Navbar';
import Home from "./Component/Home"
import Login from './Login';
import Addclient from './Component/Addclient';
import Viewclient from './Component/Viewclient';
import Profile from './Component/Profile';
import Payment from './Component/Payment';
import Theme from './Component/Theme';
import Module from './Component/Module';

export default function App() {

  return (
    <>
      <div className="main">
        <Router>

          <Routes>
            <Route exact path="*" element={<Login />} />

            <Route exact path="/Navbar" element={<Navbar />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Addclient" element={<Addclient />}>
              <Route exact path="/Addclient/profile" element={<Profile />} />
              <Route exact path="/Addclient/payment" element={<Payment />} />
              <Route exact path="/Addclient/theme" element={<Theme />} />
              <Route exact path="/Addclient/module" element={<Module />} />
            </Route>
            <Route exact path="/Viewclient" element={<Viewclient />} />
            {/* <Route exact path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  )
}
