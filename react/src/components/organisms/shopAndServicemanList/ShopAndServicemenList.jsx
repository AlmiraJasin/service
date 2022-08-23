import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.scss'

export const ServiceList = () => {

    const [shops, setShops] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3003/admin/shops')
            .then(res => setShops(res.data))
    }, [])

    return (<div className="table">
        <div className="headers">
            <div>name</div>
            <div>address</div>
        </div>
        <div className="table">
            {shops.map(shop => (
                <div className="listItem">
                    <div>{shop.shop_name}</div>
                    <div>{shop.address}</div>
                </div>
                )
            )}
        </div>
    </div>)
}
