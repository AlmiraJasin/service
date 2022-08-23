import { ServicemanCreationForm } from "../../organisms/servicemanCreationForm/ServicemanCreationForm"
import "./style.scss"

export const ServicemanAdminPage = () => {
    return (
        <div className="serviceman-admin">
            <ServicemanCreationForm />
        </div>
    )
}