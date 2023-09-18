import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navber'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer />
    </>
  )
};

export default App
