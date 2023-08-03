import {Navigate} from "react-router-dom";
import {useAuthContext} from "../context/AuthProvider.js";

function PrivateRoute({children}) {
    const {user, session} = useAuthContext();

    return (  
        session && user ? children: <Navigate to="/login" /> 
    )
}

export default PrivateRoute;