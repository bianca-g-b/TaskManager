import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider.js";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar({user_email,handleTheme, theme}) {
    const [showMenu, setShowMenu] = useState(false);
    const {handleLogout } = useAuthContext();
    const handleLogoutClick = () => {
      handleLogout();
    };

    const handleMenuClick = () => {
      setShowMenu(!showMenu);
    };

  return (
    <div className="navbar">
      <div className='menu'>

      <div className="app-name-div">
        <h4 className="app-name-link" to="/">Task Manager</h4>
        <p className="slogan">Slogan</p>
      </div>


     {/* Menu  */}
    <button id="menu-button" onClick={handleMenuClick}>
      <FontAwesomeIcon className="menu-icon" icon={icon({name: 'user'})}/>
    </button>


    <div className={`dropdown-items ${showMenu ? `show-menu` : `hide-menu`}`}>

    <div className='dropdown-username'>
        <FontAwesomeIcon className="user-icon" icon={icon({name: 'user'})}/>
        <p className="user-email"> {user_email}</p>
      </div>

      <button className={`theme-button-${theme === `dark` ? `dark` : `light`}`}
          onClick={handleTheme}>{theme === `dark` ? "Change to light theme" : "Change to dark theme"}
      </button>

        <NavLink className="logout-link" to="/login" onClick={handleLogoutClick}>Logout</NavLink>
    </div> 

    </div>
    </div>
  );
}

export default Navbar;