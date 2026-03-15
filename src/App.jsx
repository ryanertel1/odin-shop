import { Outlet } from 'react-router'

import './App.css'
import './Components/Navbar.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  )
}

export default App
