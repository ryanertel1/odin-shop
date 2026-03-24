import { Outlet, useOutletContext, useNavigate } from 'react-router';
import { useState } from 'react';
import Navbar from './Components/Navbar.jsx';

function App() {
  const [searchInput, setSearchInput] = useState();
  const navigate = useNavigate();

  const handleSearchInput = (searchData) => {
    const searchWords = searchData.toLowerCase().split(' ');
    setSearchInput(searchWords);
    navigate('/shop');
  }

  return (
    <>
      <Navbar onSearchInput={handleSearchInput}></Navbar>
      <Outlet context={searchInput}/>
    </>
  )
}

export default App
