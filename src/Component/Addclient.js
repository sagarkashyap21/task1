import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Module from './Module';
import Payment from './Payment';
import Profile from './Profile';
import Theme from './Theme';


export default function Addclient() {
    return (
        <>

            <div className="home">
                <div className="home1">
                    <h1>Company name</h1>
                    {/* <img src="/Images/input field.png" alt="" /> */}
                    <div className="d-flex">
                        <i class="fa fa-solid fa-magnifying-glass"></i>
                        <input class="form-control me-2" type="search" placeholder="Search modules" aria-label="Search modules" />
                    </div>
                    <h3> Client Master</h3>
                    <p><Link to="/home" className="client" >View Clients</Link> </p>
                    <p><Link to="/Addclient" className="client" >Add Clients</Link></p>
                    <img className="user" src="/Images/Frame 317.png" alt="" />
                </div>
                <div className="addclient">
                    <div className="header">
                        <h2>Add Client</h2>
                        <i class=" fa fa-light fa-bell"></i>
                    </div>
                    <p>Client Master/Add Client <span style={{ color: "gray" }}>/Create Profile</span></p>
                    <div className="container">
                        <ul>
                            <Link style={{ textDecoration: "none" }} to="/Addclient/profile"><li> 01 Create Profile</li></Link>
                            <Link style={{ textDecoration: "none" }} to="/Addclient/payment"><li>02 Payment Setup</li></Link>
                            <Link style={{ textDecoration: "none" }} to="/Addclient/theme"><li>03 Theme Setup</li> </Link>
                            <Link style={{ textDecoration: "none" }} to="/Addclient/module"><li>04 modules Setup</li></Link>

                        </ul>
                        <hr />
                        {/* <Profile /> */}
                        <Routes>
                            <Route exact path="*" element={<Profile />} />
                            <Route exact path="/payment" element={<Payment />} />
                            <Route exact path="/theme" element={<Theme />} />
                            <Route exact path="/module" element={<Module />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}
