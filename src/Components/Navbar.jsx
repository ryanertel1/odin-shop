import '../Styles/Navbar.css';
import { Link } from 'react-router';
import Searchbar from './Searchbar';
import Cart from './Cart';

const Navbar = ({onSearchInput}) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='shop'>Shop</Link>
            <Searchbar onSearchInput={onSearchInput}/>
            <Cart />
        </nav>
    )
}

export default Navbar;