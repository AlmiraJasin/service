import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { TextField } from "../../atoms/textField/TextField";
import "./style.scss"

export const ServicemanCreationForm = ({onCreateServiceman}) => {
      
    const [shopName, setShopName] = useState('');
    const [shopAddress, setShopAddress] = useState('');

    return (
        <div className="serviceman-creation-form">
            <TextField label="Enter Serviceman name" name="shopName" value={shopName} onChange={e => setShopName(e.target.value)}/>
            <TextField label="Enter Serviceman surname" name="shopAddress" value={shopAddress} onChange={e => setShopAddress(e.target.value)}/>
            <TextField label="Enter Serviceman specialty" name="shopAddress" value={shopAddress} onChange={e => setShopAddress(e.target.value)}/>
            <Button variant="secondary" onClick={() => onCreateServiceman({shopName, shopAddress})}>Register Serviceman</Button>
        </div>
    );
}