import {createContext, useContext, useEffect, useState} from 'react';
import supabase from "../supabase.js";
import { useNavigate } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
import Homepage from "../components/Homepage/Homepage.js";
import Login from "../components/Login/Login.js";


const AuthContext = createContext();


export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await supabase.auth.signOut();
            setUser(null);
            setSession(null);
            navigate("/")
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };


    useEffect(() => {
            try {
            supabase.auth.getSession()
            .then(({ data: { session } }) => {
                setSession(session);
                setUser(session?.user ?? null);
            });
        } catch (error) {
            console.log(error);
        }

         const { data: {subscription} } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
        });
        return () => subscription.unsubscribe()
    }, [])


    if (!user || !session) {
        return (
            <Routes>
                <Route path="/login" element={<Login supabaseClient={supabase} />} />
                <Route path = "/" element={<Homepage />} />
            </Routes>
        )
    } else {
    return (
        <AuthContext.Provider value={{user, session, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}
}

export function useAuthContext() {
    return useContext(AuthContext);
}
