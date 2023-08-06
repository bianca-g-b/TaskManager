import "./Login.css";
import supabase from "../../supabase.js";
import { Auth } from '@supabase/auth-ui-react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider.js"


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
            navigate("/")
        } else {
            navigate("/login")
        } 
    }, [user, navigate])


    return (
        <div className="login-container">
            {/* <div className="login-form"> */}
                <Auth supabaseClient={supabase}  />
            {/* </div> */}
        </div>
    )
}

export default Login;