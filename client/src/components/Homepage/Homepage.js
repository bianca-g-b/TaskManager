import "./Homepage.css";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

function Homepage() {
    return (
        <div className="about-app-div">
            <h1>About</h1>
            <h4 className="about-app">Breezy Online Planner is a simple, easy-to-use task management app.</h4>
            <ReactPlayer 
                url="https://youtu.be/VhPmzDGQTHY"
                controls={true}
                quality="720p"
            />

            <NavLink className ="homepage-login" to="/login">Login here</NavLink>
          
        </div>
    )
}

export default Homepage;