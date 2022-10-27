import { useEffect, useState } from 'react';
import ItemDetail from '../Components/itemDetail';
import React from 'react';

const tarjetas = {
    title: "Nvidia RTX 4090",
    price: "USS 1500",
    pictureUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2022/10/analisis-nvidia-rtx-4090-founders-edition-2839429.jpg?itok=5UQW-sc6",
    description: "NVIDIA® GeForce RTX® 4090 es la GPU GeForce definitiva. Brinda un gran salto en rendimiento, eficiencia y gráficos impulsados ​​​​por IA. Experimenta juegos de rendimiento ultra alto, mundos virtuales increíblemente detallados, productividad sin precedentes y nuevas formas de crear. Está impulsada por la arquitectura NVIDIA Ada Lovelace y viene con 24 GB de memoria G6X para brindar la mejor experiencia para jugadores y creadores."
};

export const ItemDetailContainer = () => {
    const [datas,setDatas] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve (tarjetas);
            }, 2000);
            
        });
        getData.then(res => setDatas(res));
    },[])
    
    return (
        <ItemDetail datas={datas}/>
    );
}

export default ItemDetailContainer;