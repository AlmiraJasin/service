import { RegistrationForm } from "../../organisms/registrationForm/RegistrationForm"
import "./style.scss"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const RegistrationPage = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const onRegister = ({username, password, passwordRepeat}) => {
        axios.post('http://localhost:3003/register', { username, password, passwordRepeat })
        .then(res => {
            navigate("/registration-success")
        }).catch(res => {
            setError(res.response.data.msg)
        })
    }

    return (
        <div className="registration-section">
            <RegistrationForm onRegister={onRegister}/>
            {error && <div className="error-container"><div>{error}</div></div>}
        </div>
    )
}