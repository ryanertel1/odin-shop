import { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import CartItem from '../Components/CartItem';
import '../Styles/Cart.css';

const Cart = ( { isOpen, onClose, cartItems, onRemove, onQtyAdjust, onClear } ) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if(isOpen) { setIsReady(true); }
        else { setIsReady(false); }
    }, [isOpen]);

    const handleEnd = () => {
        if(isOpen) { setIsLoaded(true); }
        else { setIsLoaded(false); }
    }

    if (!isOpen && !isLoaded) return null;
    return ReactDom.createPortal(
        <>
            <div className={`modal ${isReady ? 'modal-transition-in' : 'modal-transition-out'}`} onTransitionEnd={handleEnd}>
                <button className='close-button' onClick={onClose}>X</button>
                <button className='clear-button' onClick={onClear}>Clear</button>
                {cartItems.length > 0 && <div className='cart-contents'>
                    {cartItems.map(item => (
                        <CartItem
                            key={item[0].id}
                            id={item[0].id}
                            title={item[0].title}
                            price={item[0].price}
                            image={item[0].image}
                            qty={item[1]}
                            onRemove={onRemove}
                            onQtyAdjust={onQtyAdjust}
                        />
                    ))}
                </div>}
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Cart;