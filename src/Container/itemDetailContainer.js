import { useEffect, useState } from 'react';
import ItemDetail from '../Components/itemDetail';
import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
    {
        id: 1,
        title: "Nvidia RTX 4090",
        price: "USS 1500",
        pictureUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2022/10/analisis-nvidia-rtx-4090-founders-edition-2839429.jpg?itok=5UQW-sc6",
        description: "NVIDIA® GeForce RTX® 4090 es la GPU GeForce definitiva. Brinda un gran salto en rendimiento, eficiencia y gráficos impulsados ​​​​por IA. Experimenta juegos de rendimiento ultra alto, mundos virtuales increíblemente detallados, productividad sin precedentes y nuevas formas de crear. Está impulsada por la arquitectura NVIDIA Ada Lovelace y viene con 24 GB de memoria G6X para brindar la mejor experiencia para jugadores y creadores."
    },
    {
        id: 2,
        title: "Nvidia RTX 4080",
        price: "USS 1250",
        pictureUrl: "https://elchapuzasinformatico.com/wp-content/uploads/2022/09/RTX-4080-Doble-Rendimiento.jpg",
        description:"NVIDIA® GeForce RTX® 4080 ofrece el ultra rendimiento y las funciones que demandan los jugadores y creadores entusiastas. Haz que tus juegos y proyectos creativos cobren vida con el ray tracing y los gráficos basados ​​en IA. Está impulsada por la arquitectura ultra eficiente NVIDIA Ada Lovelace y 16 GB de memoria G6X superrápida."
    },
    {
        id: 3,
        title: "Nvidia RTX 3090",
        price: "USS 1000",
        pictureUrl: "https://www.comeros.com.ar/wp-content/uploads/2022/02/Comeros-ZOTAC-ZT-A30900J-10P-8.jpg",
        description:"Las GeForce RTX™ 3090 Ti y 3090 son implacables GPUs (BFGPU) con rendimiento de clase TITAN. Impulsadas con tecnología Ampere, la arquitectura RTX de segunda generación de NVIDIA, duplican el ray tracing y el rendimiento de la IA con núcleos de trazado de rayos mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuentan con 24 GB de asombrosa memoria G6X para ofrecer la experiencia de juego definitiva a jugadores y creadores."
    },
    {
        id: 4,
        title: "Nvidia RTX 3080",
        price: "USS 737",
        pictureUrl: "https://dlcdnwebimgs.asus.com/gain/d592f557-a735-4900-bc46-6793546a2a64/",
        description:"Las tarjetas gráficas GeForce RTX™ 3080 Ti y RTX 3080 ofrecen el alto rendimiento que buscan los gamers. Basado en Ampere, la segunda generación de la arquitectura RTX de NVIDIA, cuentan con Núcleos RT mejorados y Núcleos Tensor, nuevos multiprocesadores de transmisión y memorias GDDR6X súper rápidas, para una experiencia de juego simplemente increíble."
    },

];

const ItemDetailContainer = () => {
    const [datas,setDatas] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getDatas = new Promise(resolve => {
            setTimeout (() => {
                resolve (items);
            }, 2000);
            
        });
        getDatas.then(res => setDatas(res.find(items => items.id === parseInt(detalleId) )));
    },[detalleId])
    
    return (
        <ItemDetail datas={datas}/>
    );
}

export default ItemDetailContainer;