import '../Styles/Navbar.css';
import { Link } from 'react-router';
import Searchbar from './Searchbar';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = ({ ...props }) => {
    return (
        <nav>
            <div className='nav-buttons'>
                <Link to='/'>Home</Link>
                <Link to='shop'>Shop</Link>
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