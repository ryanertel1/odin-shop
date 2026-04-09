import '../Styles/Navbar.css';
import { NavLink, useLocation } from 'react-router';
import Searchbar from './Searchbar';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = ({ ...props }) => {
    const location = useLocation();

    return (
        <nav>
            <div className='nav-buttons'>
                <NavLink to='/'
                    className={ ({isActive}) => (
                        isActive ? 'selected-link' : undefined
                    )}
                >
                    Home
                </NavLink>
                <NavLink to='shop'
                    className={ ({isActive}) => (
                        isActive ? 'selected-link' : undefined
                    )}
                >
                    Shop
                </NavLink>
            </div>
            <Searchbar className='searchbar' onSearchInput={props.onSearchInput}/>
            <div className='cart-button'>
                { (props.cartNumber > 0) && <span className='cart-number'>{props.cartNumber}</span> }
                <MdOutlineShoppingCart className='cart-symbol' onClick={ props.onCartClick }/>
            </div>
        </nav>
    )
}

export default Navbar;