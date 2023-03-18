import React from 'react'
import List from '../List';
import { Link } from "react-router-dom";
import Viewclient from './Viewclient';
import f317 from "./Images/Frame 317.png"



export default function Home() {
    return (
        <div className="home">
            <div className="home1">
                <h1>Company name</h1>
                <div className="d-flex">
                    <i class="fa fa-solid fa-magnifying-glass"></i>
                    <input class="form-control me-2" type="search" placeholder="Search modules" aria-label="Search modules" />
                </div>
                {/* <img src="/Images/input field.png" alt="" /> */}
                <h3> Client Master</h3>
                <p><Link to="/home" className="client" >View Clients</Link> </p>
                <p><Link to="/Addclient" className="client" >Add Clients</Link></p>
                <img className="user" src={f317} alt="error" />
            </div>
            <Viewclient />
        </div>
    )
}
