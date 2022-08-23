import "./style.scss"
import logo from "../../../assets/logo.png"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { authContext } from "../../../contexts/authContext"
import { logout } from '../../../functions/auth'

export const SideBar = () => {
    const navigate = useNavigate();
    const { isLoggedIn, updateUser } = useContext(authContext)

    const logoutUser = () => {
        logout()
        updateUser()
        navigate('/login')
    }

    return (
        <div className="sidebar">
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <NavLink to="" className="nav-link" style={({ isActive }) => isActive ? {color: 'white'} : null}>Home</NavLink>
                <NavLink to="/serviceman-admin-page" className="nav-link" style={({ isActive }) => isActive ? {color: 'white'} : null}>New Serviceman</NavLink>
                <NavLink to="/shop-admin-page" className="nav-link" style={({ isActive }) => isActive ? {color: 'white'} : null}>New Shop</NavLink>
                <NavLink to="/shop-and-servicemen-list-admin-page" className="nav-link" style={({ isActive }) => isActive ? {color: 'white'} : null}>Servicemen and Shops</NavLink>
            </div>
            <div className="bottom-section">
                {isLoggedIn ?
                        <button onClick={() => logoutUser()} className="logout">Logout</button> : 
                    <>
                        <Link to="/login" className="link">Login</Link>
                        <Link to="/register" className="link">Register</Link>
                    </>
                }
                
            </div>
        </div>
    )
}