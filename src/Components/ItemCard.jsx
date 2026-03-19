import { useState } from 'react';

const ItemCard = ( {...props} ) => {
    return (
        <div className='item-card'>
            <h3>{props.title}</h3>
            <img src={props.image}></img>
            <h4>${props.price}</h4>
        </div>
    )
}

export default ItemCard;