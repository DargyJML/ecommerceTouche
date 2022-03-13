
import React, { useState } from 'react'
import logo from '../../assets/zlogo.png'
import MenuIcon from '../../assets/bars-solid.svg'
import CloseIcon from '../../assets/window-close-regular.svg'
import shopingCard from '../../assets/car.png'

export default function Nav() {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

  const showSideMenu = () => {
    (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
  }

  return (
    <div className="relative w-full h-13 text-2xl bg-rose-100 text-gray-900 flex flex-row justify-between items-center">

      <ul className="hidden menu-list md:flex  md:flex-row  font-bold">
        <li className="menu-list-item px-2 "><a href="#">Somos</a></li>
        <li className="menu-list-item px-2"><a href="#">Talleres</a></li>
      </ul>
      <img src={logo} alt="logo" className='w-1/3 justify-content: center'
      />
      <ul className="hidden menu-list md:flex md:flex-row font-bold">
        <li className="menu-list-item px-2"><a href="#">Destacados</a></li>
        <li className="menu-list-item px-2"><a href="#">Productos</a></li>

      </ul>
      <ul>
        <button> <img src={shopingCard} className="w-10 h-8" alt="shopingCard"></img> </button>

        <button onClick={() => { showSideMenu() }} className="md:hidden menu-button">
          {(isSideMenuOpen) ? <img src={CloseIcon} className="w-10 h-10 px" alt="close"></img> : <img src={MenuIcon} className="w-10 h-8 px" alt="menu"></img>}
        </button>
      </ul>

      {(isSideMenuOpen) ? SideMenu() : ''}
    </div>
  )

}

function SideMenu() {
  return (
    <div className="absolute text-rose-100 text-2xl h-screen w-1/2 sm:w-1/4 md:hidden bg-gray-800 top-0 z-40">
      <ul className="menu-list flex flex-col font-bold ">
        <li className="menu-list-item py-2 hover:bg-rose-100 hover:text-gray-800"><a href="#">Somos</a></li>
        <li className="menu-list-item py-2 hover:bg-rose-100 hover:text-gray-800"><a href="#">Talleres</a></li>
        <li className="menu-list-item py-2 hover:bg-rose-100 hover:text-gray-800"><a href="#">Destacados</a></li>
        <li className="menu-list-item py-2 hover:bg-rose-100 hover:text-gray-800"><a href="#">Productos</a></li>


      </ul>
    </div>
  )
}







