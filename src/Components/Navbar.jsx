import '../Styles/Navbar.css';
import { Link } from 'react-router';
import Searchbar from './Searchbar';
import Cart from './Cart';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='shop'>Shop</Link>
            <Searchbar />
            <Cart />
        </nav>
    )
}

export default Navbar;