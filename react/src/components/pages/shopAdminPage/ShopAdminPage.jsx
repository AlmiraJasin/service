import { ShopCreationForm } from "../../organisms/shopCreationForm/ShopCreationForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./style.scss"

export const ShopAdminPage = () => {
    const navigate = useNavigate();

    const onCreateShop = ({shopName, shopAddress}) => {
        axios.post('http://localhost:3003/admin/shops', { shopName, shopAddress })
        .then(res => {
            navigate("/shop-and-servicemen-list-admin-page")
        })
    }

    return (
        <div className="shop-admin">
            <ShopCreationForm onCreateShop={onCreateShop} />
        </div>
    )
}