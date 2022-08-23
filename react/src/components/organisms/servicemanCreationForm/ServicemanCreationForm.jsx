import { useEffect } from "react";
import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { TextField } from "../../atoms/textField/TextField";
import axio
import "./style.scss"

export const ServicemanCreationForm = ({onCreateServiceman}) => {
      
    const [shopName, setShopName] = useState('');
    const [shopAddress, setShopAddress] = useState('');

    useEffect(() => {
        
    }, [])

    return (
        <div className="serviceman-creation-form">
            <TextField label="Enter Serviceman name" name="shopName" value={shopName} onChange={e => setShopName(e.target.value)}/>
            <TextField label="Enter Serviceman surname" name="shopAddress" value={shopAddress} onChange={e => setShopAddress(e.target.value)}/>
            <TextField label="Enter Serviceman specialty" name="shopAddress" value={shopAddress} onChange={e => setShopAddress(e.target.value)}/>
            <label>Choose Shop</label>
                    <select onChange={e => setShop(e.target.value)} value={shop}>
                        <option value="0">Choose shop</option>
                        {
                            shops ? shops.map(shop => <option key={shop.id} value={shop.id}>{shop.id}</option>) : null
                        }
                    </select>
                    <small className="form-text text-muted">Select category here.</small>
            <Button variant="secondary" onClick={() => onCreateServiceman({shopName, shopAddress})}>Register Serviceman</Button>
        </div>
    );
}