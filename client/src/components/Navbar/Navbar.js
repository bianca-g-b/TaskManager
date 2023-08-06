import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider.js";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar({user_email}) {
    const {handleLogout } = useAuthContext();
    const handleLogoutClick = () => {
      handleLogout();
    };

  return (
    <div className="navbar">
        <p className="user-email"> <FontAwesomeIcon className="user-icon" icon={icon({name: 'user'})}/>{user_email}</p>
       <NavLink className="logout-link" to="/login" onClick={handleLogoutClick}>Logout</NavLink>
    </div>
  );
}

export default Navbar;