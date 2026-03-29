import { useState } from 'react';

const ItemCard = ( {...props} ) => {
    const [itemQty, setItemQty] = useState(0);

    const handleQtyChange = (e) => {
        const newQty = Math.floor(e.target.value);
        if (newQty > 99) { setItemQty(99) }
        else if (newQty < 0) { setItemQty(0) }
        else { setItemQty(newQty) }
    }

    const handleQtyDecrement = () => {
        if (itemQty > 0) { setItemQty(itemQty - 1) }
    }

    const handleQtyIncrement = () => {
        if (itemQty < 99) { setItemQty(itemQty + 1) }
    }
    return (
        <div className='item-card'>
            <h3>{props.title}</h3>
            <img src={props.image}></img>
            <h4>${props.price}</h4>
            <div className='quantity-buttons'>
                <button onClick={handleQtyDecrement}>-</button>
                <input
                    type='number'
                    value={itemQty}
                    onChange={handleQtyChange}>
                </input>
                <button onClick={handleQtyIncrement}>+</button>
            </div>
            <button onClick={() => props.handleCartAdd(props.id, itemQty)}>Add to cart</button>
        </div>
    )
}

export default ItemCard;