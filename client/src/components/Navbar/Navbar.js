import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider.js";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar({user_email,handleTheme, theme}) {
    const {handleLogout } = useAuthContext();
    const handleLogoutClick = () => {
      handleLogout();
    };

  return (
    <div className="navbar">
      <div className='menu'>

      <div className='menu-div-3'>
      <button 
          className={`theme-button-${theme === `dark` ? `dark` : `light`}`}
          onClick={handleTheme}>{theme === `dark` ? <FontAwesomeIcon className="dark-icon" icon={icon({name: 'sun'})}/> : <FontAwesomeIcon className="light-icon" icon={icon({name: 'moon'})}/>}
       </button>       
      <NavLink className="logout-link" to="/login" onClick={handleLogoutClick}>Logout</NavLink>
      </div>

      <div className="menu-div-2">
        <h4 className="app-name-link" to="/">Task Manager</h4>
        <p className="slogan">Slogan</p>
      </div>

     <div className='menu-div-1'>
        <p className="user-email"> {user_email}</p>
        <FontAwesomeIcon className="user-icon" icon={icon({name: 'user'})}/>
      </div>
      

       </div>
    </div>
  );
}

export default Navbar;