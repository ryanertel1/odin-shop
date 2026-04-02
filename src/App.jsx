import { Outlet, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.jsx';
import Cart from './Components/Cart.jsx';

function App() {
  const [searchInput, setSearchInput] = useState();
  const [isCartOpen, setIsCartOpen ] = useState(false);
  const [cartItemList, setCartItemList] = useState([]);
  const navigate = useNavigate();

  const findCartItem = (findId) => {
    let i = cartItemList.length - 1;

    while (i >= 0) {
      if(cartItemList[i][0].id === findId) {
        return(i);
      }
      i--;
    }
    return -1;


  }
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

  const handleCartAdd = (addItem, addQty) => {
    let newItems = [...cartItemList];

    newItems.push([addItem, addQty]);
    setCartItemList(newItems);
  }

  const handleCartRemove = (removeId, index=-1) => {
    if (index === -1) {
      index = findCartItem(removeId);
    }

    let newList = [...cartItemList];
    newList.splice(index, 1);
    console.log(`initial list: ${cartItemList}\n\nnew list: ${newList}`);
    return(newList);
  }

  const handleCartQtyAdjust = (adjustId, adjustDiff) => {
    let newList = [...cartItemList];
    let index = findCartItem(adjustId);

    if (index !== -1) {
      let newQty = cartItemList[index][1] + (adjustDiff);
      if (newQty > 99) {
        newQty = 99;
      } else if (newQty <= 0) {
        newList = handleCartRemove(adjustId, index);
      } else {
        let newItem = [cartItemList[index][0], newQty];
        newList[index] = newItem;
      }

      setCartItemList(newList);
    }
  }

  const handleCartClear = () => {
    console.log('clearing cart');
    setCartItemList([]);
  }

  return (
    <>
      <Navbar onSearchInput={handleSearchInput} onCartClick={handleCartClick} />
      <Cart
        isOpen={isCartOpen}
        onClose={handleCartClose}
        cartItems={cartItemList}
        onRemove={handleCartRemove}
        onQtyAdjust={handleCartQtyAdjust}
        onClear={handleCartClear}
      />
      <Outlet context={{searchInput, handleCartAdd}} />
    </>
  )
}

export default App
