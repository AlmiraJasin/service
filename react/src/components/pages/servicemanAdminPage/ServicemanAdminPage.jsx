import { ServicemanCreationForm } from "../../organisms/servicemanCreationForm/ServicemanCreationForm"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.scss"

export const ServicemanAdminPage = () => {
    const navigate = useNavigate();

    const onCreateServiceman = ({servicemanName, servicemanSurname, setServicemanSpecialty, shop}) => {
        axios.post('http://localhost:3003/admin/servicemen', { servicemanName, servicemanSurname, setServicemanSpecialty, shop })
        .then(res => {
            navigate("/shop-and-servicemen-list-admin-page")
        })
    }

    return (
        <div className="serviceman-admin">
            <ServicemanCreationForm onCreateServiceman={onCreateServiceman} />
        </div>
    )
}