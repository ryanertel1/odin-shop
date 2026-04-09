const CartItem = ({ ...props }) => {
    const imageStyles = {
        maxWidth: '100px',
    }

    return (
        <div className='cart-item'>
            <img src={props.image} style={imageStyles}></img>
            <div className='cart-item-info'>
                <span>{props.title}</span>
                <div className='cart-item-info-qty'>
                    <button onClick={() => props.onQtyAdjust(props.id, -1)}>-</button>
                    <span>{props.qty}</span>
                    <button onClick={() => props.onQtyAdjust(props.id, +1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;