import Itemlist from '../Components/itemList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const items = [
    {
        id: 1,
        title: "Nvidia RTX 4090",
        price: "USS 1500",
        pictureUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2022/10/analisis-nvidia-rtx-4090-founders-edition-2839429.jpg?itok=5UQW-sc6"
    },
    {
        id: 2,
        title: "Nvidia RTX 4080",
        price: "USS 1250",
        pictureUrl: "https://elchapuzasinformatico.com/wp-content/uploads/2022/09/RTX-4080-Doble-Rendimiento.jpg"
    },
    {
        id: 3,
        title: "Nvidia RTX 3090",
        price: "USS 1000",
        pictureUrl: "https://www.comeros.com.ar/wp-content/uploads/2022/02/Comeros-ZOTAC-ZT-A30900J-10P-8.jpg"
    },
    {
        id: 4,
        title: "Nvidia RTX 3080",
        price: "USS 737",
        pictureUrl: "https://dlcdnwebimgs.asus.com/gain/d592f557-a735-4900-bc46-6793546a2a64/"
    },

];

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
        if (id) {
            getData.then(res => setData(res.filter(items => items.id === id)))
        } else {
            getData.then(res => setData(res));
        }
    }, [id])
    return (
        <div className="container"><Itemlist data={data} /></div>
    );
}
export default ItemListContainer;