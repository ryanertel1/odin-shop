import { Outlet, useOutletContext, useNavigate } from 'react-router';
import { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Cart from './Components/Cart.jsx';

function App() {
  const [searchInput, setSearchInput] = useState();
  const [isCartOpen, setIsCartOpen ] = useState(false);
  const navigate = useNavigate();

  const handleSearchInput = (searchData) => {
    const searchWords = searchData.toLowerCase().split(' ');
    setSearchInput(searchWords);
    navigate('/shop');
  }

  const handleCartClick = () => {
    setIsCartOpen(true);
  }

  const handleCartClose = () => {
    setIsCartOpen(false);
  }

  return (
    <>
      <Navbar onSearchInput={handleSearchInput} onCartClick={handleCartClick}></Navbar>
      <Cart isOpen={isCartOpen} onClose={handleCartClose}>Fancy Modal!</Cart>
      <Outlet context={searchInput}/>
    </>
  )
}

export default App
