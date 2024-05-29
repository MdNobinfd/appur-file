
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Menu from '../menu/Menu'
import { ScrollRestoration } from "react-router-dom";

const Leyout = () => {
  return (
    <>
   <Menu/>
   <Outlet/>
   <ScrollRestoration />
   <Footer/>
   </>
  )
}

export default Leyout