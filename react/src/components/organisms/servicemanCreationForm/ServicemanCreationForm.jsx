import { useEffect } from "react";
import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { TextField } from "../../atoms/textField/TextField";
import axios from "axios"
import "./style.scss"

export const ServicemanCreationForm = ({onCreateServiceman}) => {
    const [shops, setShops] = useState('')
      
    const [servicemanName, setServicemanName] = useState('');
    const [servicemanSurname, setServicemanSurname] = useState('');
    const [setServicemanSpecialty, setSetServicemanSpecialty] = useState('');
    const [shop, setShop] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3003/admin/shops')
            .then(res => setShops(res.data))
    }, [])

    return (
        <div className="serviceman-creation-form">
            <TextField label="Enter Serviceman name" name="servicemanName" value={servicemanName} onChange={e => setServicemanName(e.target.value)}/>
            <TextField label="Enter Serviceman surname" name="servicemanSurname" value={servicemanSurname} onChange={e => setServicemanSurname(e.target.value)}/>
            <TextField label="Enter Serviceman specialty" name="setServicemanSpecialty" value={setServicemanSpecialty} onChange={e => setSetServicemanSpecialty(e.target.value)}/>
            <label className="label">Choose Shop</label>
                <select onChange={e => setShop(e.target.value)} value={shop}>
                        <option value="0">Choose shop</option>
                        {
                            shops ? shops.map(shop => <option key={shop.id} value={shop.id}>{shop.shop_name}</option>) : null
                        }
                </select>
            <Button variant="secondary" onClick={() => onCreateServiceman({servicemanName, servicemanSurname, setServicemanSpecialty, shop})}>Register Serviceman</Button>
        </div>
    );
}