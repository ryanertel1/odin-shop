import '../Styles/Navbar.css';
import { Link } from 'react-router';
import Searchbar from './Searchbar';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = ({ ...props }) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='shop'>Shop</Link>
            <Searchbar onSearchInput={props.onSearchInput}/>
            <MdOutlineShoppingCart className='cart-symbol' onClick={ props.onCartClick }/>
        </nav>
    )
}

export default Navbar;