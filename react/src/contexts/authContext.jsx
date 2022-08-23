import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    const updateUser = () => {
        const token = localStorage.getItem('session')
        const user = localStorage.getItem('user')
        if(token && user){
            setIsLoggedIn(true)
            setUser(JSON.parse(user))
        } else {
            setIsLoggedIn(false)
            setUser({})
        }
    }

    useEffect(() => {
        updateUser()
    }, [])

    return <authContext.Provider value={{ isLoggedIn, updateUser, isAdmin: user.is_admin}}>{children}</authContext.Provider>
}