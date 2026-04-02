const CartItem = ({ ...props }) => {
    const imageStyles = {
        maxWidth: '100px',
    }

    return (
        <div className='cart-item'>
            <img src={props.image} style={imageStyles}></img>
            <button onClick={() => props.onQtyAdjust(props.id, -1)}>-</button>
            <span>{props.qty}</span>
            <button onClick={() => props.onQtyAdjust(props.id, +1)}>+</button>
        </div>
    )
}

export default CartItem;