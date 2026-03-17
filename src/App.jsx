import { Outlet } from 'react-router';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  )
}

export default App
