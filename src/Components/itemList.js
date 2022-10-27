
import Item from '../Components/item';
import React from 'react';


const itemList = ({data = []}) => {
    return(
        data.map(items => <Item key={items.id} info={items}/> )
    );
} 

export default itemList;
