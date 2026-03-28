import { useState, useEffect } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import ReactDom from 'react-dom';
import '../Styles/Cart.css';

const Cart = ( { isOpen, onClose } ) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const clearCart = () => {
        console.log('clearing cart');
    }

    useEffect(() => {
        if(isOpen) { setIsLoaded(true); }
        else { setIsLoaded(false); }
    }, [isOpen]);

    if (!isOpen) return null
    return ReactDom.createPortal(
        <>
            <div className={`overlay ${isLoaded ? 'overlay-transition': ''}`}/>
            <div className={`modal ${isLoaded ? 'modal-transition' : ''}`}>
                <button onClick={onClose}>X</button>
                <button onClick={clearCart}>Clear</button>
                <h2>Fancy Modal!</h2>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Cart;