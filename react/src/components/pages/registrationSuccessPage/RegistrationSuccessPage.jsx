import { NavLink } from "react-router-dom"
import "./style.scss"

export const RegistrationSuccessPage = () => {
    return (
        <div className="registration-success">
            <span className="text">Your registration was successful, please click
            <NavLink to="/login" className="link"> here </NavLink>
            to login</span>
        </div>
    )
}