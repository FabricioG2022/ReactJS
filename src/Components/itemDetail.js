import React from "react";

export const itemDetail = ({datas}) => {
    return(
        <div className="container">
            <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2022/10/analisis-nvidia-rtx-4090-founders-edition-2839429.jpg?itok=5UQW-sc6" alt=""/>
            <h2>{datas.title}</h2>
            <p>{datas.description}</p>
            <p>{datas.price}</p>
        </div>
    );
}

export default itemDetail;
