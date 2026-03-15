import '../Styles/Navbar.css';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='shop'>Shop</Link>
        </nav>
    )
}

export default Navbar;