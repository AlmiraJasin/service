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

    useEffect(() => {
        axios.get('http://localhost:3003/admin/shops')
            .then(res => setShops(res.data))
    }, [])

    return (
        <div className="serviceman-creation-form">
            <TextField label="Enter Serviceman name" name="servicemanName" value={servicemanName} onChange={e => setServicemanName(e.target.value)}/>
            <TextField label="Enter Serviceman surname" name="servicemanSurname" value={servicemanSurname} onChange={e => setServicemanSurname(e.target.value)}/>
            <TextField label="Enter Serviceman specialty" name="setServicemanSpecialty" value={setServicemanSpecialty} onChange={e => setSetServicemanSpecialty(e.target.value)}/>
            <label>Choose Shop</label>
                    <select onChange={e => setShops(e.target.value)} value={shops}>
                        <option value="0">Choose shop</option>
                        {
                            shops ? shops.map(shop => <option key={shop.id} value={shop.id}>{shop.id}</option>) : null
                        }
                    </select>
                    <small className="form-text text-muted">Select category here.</small>
            <Button variant="secondary" onClick={() => onCreateServiceman({servicemanName, servicemanSurname, setServicemanSpecialty})}>Register Serviceman</Button>
        </div>
    );
}