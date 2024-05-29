import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {  //this children represents app.jsx component
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null  // to transform string to object
    );
    const navigate = useNavigate()

    const login = async (inputs) => {
        const res = await axios.post('https://blog-api-side.onrender.com/api/auth/login', inputs,
        // const res = await axios.post('http://localhost:8800/api/auth/login', inputs,
            {
                withCredentials: true
            }
        );
        setCurrentUser(res.data)
    };

    const logout = async () => {
        await axios.post('https://blog-api-side.onrender.com/api/auth/logout', {},
        // await axios.post('http://localhost:8800/api/auth/logout', {},
            {
                withCredentials: true
            });
        setCurrentUser(null)
        navigate('/')
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))    // to transform object to string
    }, [currentUser]);


    return (
        // sending props for global state usage
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider> //this children represents app.jsx component
    )
};
