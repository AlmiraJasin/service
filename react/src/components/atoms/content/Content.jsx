import {
    Routes,
    Route,
} from "react-router-dom";
import { LoginPage } from "../../pages/loginPage/LoginPage";
import { MainPage } from "../../pages/mainPage/MainPage";
import { RegistrationPage } from "../../pages/registrationPage/RegistrationPage"
import { RegistrationSuccessPage } from "../../pages/registrationSuccessPage/RegistrationSuccessPage"
import "./style.scss"

export const Content = () => {
    return (     
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/registration-success" element={<RegistrationSuccessPage />} />
            <Route path="" element={<MainPage />} />
        </Routes>
    )
}
//<Route path="/" element={<RequireAuth role="user"><Front/></RequireAuth>} />
//<Route path="/admin" element={<RequireAuth role="admin"><Back show="admin" /></RequireAuth>} />