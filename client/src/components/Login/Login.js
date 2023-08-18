import "./Login.css";
import supabase from "../../supabase.js";
import { Auth } from '@supabase/auth-ui-react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider.js";
import { NavLink } from "react-router-dom";

function Login() {
    const  user  = useAuthContext();

    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null)
            }, 3000)
        }
    }, [error])

    useEffect(() => {
        if (user) {
            navigate("/tasks")
        } else {
            navigate("/login")
        } 
    }, [user, navigate])


    return (
        <div className="login-container">
                <Auth supabaseClient={supabase}  />
                <div className="about-link-div">
                <NavLink className="about-link-homepage" to="/">Go back to the about page</NavLink>
                </div>
        </div>
    )
}

export default Login;