import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { TextField } from "../../atoms/textField/TextField";
import "./style.scss"

export const ShopCreationForm = ({onCreate}) => {
      
    const [shopName, setShopName] = useState('');
    const [shopAddress, setShopAddress] = useState('');

    return (
        <div className="shop-creation-form">
            <TextField label="Enter Shop Name" name="shopName" value={shopName} onChange={e => setShopName(e.target.value)}/>
            <TextField label="Enter shop address" name="shopAddress" value={shopAddress} onChange={e => setShopAddress(e.target.value)}/>
            <Button variant="secondary" onClick={() => onCreate({shopName, shopAddress})}>Create Shop</Button>
        </div>
    );
}