import { useState } from 'react';
import '../Styles/ItemCard.css';

const ItemCard = ( {...props} ) => {
    const [itemQty, setItemQty] = useState(0);
    const itemInfo = {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
    }

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
                <button onClick={handleQtyDecrement} className='decrement-button'>-</button>
                <input
                    className='quantity-input'
                    type='number'
                    value={itemQty}
                    onChange={handleQtyChange}>
                </input>
                <button onClick={handleQtyIncrement} className='increment-button'>+</button>
            </div>
            <button onClick={() => props.handleCartAdd(itemInfo, itemQty)}>Add to cart</button>
        </div>
    )
}

export default ItemCard;