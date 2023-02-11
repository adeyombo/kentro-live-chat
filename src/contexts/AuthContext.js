import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

//create auth context 
const AuthContext = React.createContext();

//create use auth context hook
export const useAuth = () => useContext(AuthContext);

//create auth provider (wraps around entire ui to manage state globally)
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if(user) history.push("/chats");
        })
    }, [user, history])

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}