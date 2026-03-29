import { Outlet, useNavigate } from 'react-router';
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

  const handleCartClear = () => {
    console.log('clearing cart in app.jsx');
  }

  const handleCartAdd = (addId, addQty) => {
    console.log(`adding ${addQty} of item: ${addId} to cart`);
  }

  return (
    <>
      <Navbar onSearchInput={handleSearchInput} onCartClick={handleCartClick}></Navbar>
      <Cart isOpen={isCartOpen} onClose={handleCartClose} onClear={handleCartClear}></Cart>
      <Outlet context={{searchInput, handleCartAdd}}/>
    </>
  )
}

export default App
