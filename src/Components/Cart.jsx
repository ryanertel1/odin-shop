import { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import '../Styles/Cart.css';

const Cart = ( { isOpen, onClose, onClear } ) => {
    const [isLoaded, setIsLoaded] = useState(false);

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
                <button onClick={onClear}>Clear</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Cart;