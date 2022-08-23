import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { authContext } from "../../../contexts/authContext"
import { saveLoggedInUser } from "../../../functions/auth"
import { LoginForm } from "../../organisms/loginForm/LoginForm"
import "./style.scss"

export const LoginPage = () => {
    const navigate = useNavigate();
    const { updateUser } = useContext(authContext)

    const onLogin = ({username, password}) => {
        axios.post('http://localhost:3003/login', { username, password })
        .then(res => {
            console.log(res)
            saveLoggedInUser(res.data.key, res.data.user)
            updateUser()
            navigate('/')
        })
    }

    return (
        <div className="login-section">
            <LoginForm onLogin={onLogin}/>
        </div>
    )
}