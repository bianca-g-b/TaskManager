import React from "react";
import "./Homepage.css";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider.js";

function Homepage() {
    const  user  = useAuthContext();
    return (
        <div className="about-app-div">
            <div className="title-description-container">
            <h1>About</h1>
            <h4 className="about-app">Breezy Online Planner is a simple, easy-to-use task management app.</h4>
            </div>
            <ReactPlayer 
                url="https://youtu.be/VhPmzDGQTHY"
                controls={true}
            />

            <NavLink className ={user ? "homepage-login-logged": "homepage-login"} to="/login">Login here</NavLink>
          
        </div>
    )
}

export default Homepage;