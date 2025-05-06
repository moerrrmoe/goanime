import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

function Header() {
  const menuHandler = () => {
    const menuElement = document.getElementById('menu')
    if(menuElement.style.display == "none"){
      menuElement.style.display = "block"
    }else{
      menuElement.style.display = "none"
    }
  }
  return (
    <div className='mb-15'>
    <div className='header-container z-999 border-b-2 border-white fixed top-0 w-[100%] flex flex-row bg-black h-15 text-white items-center justify-between'>
        <div onClick={()=>menuHandler()} className='menu-container'>
            <GiHamburgerMenu size='50'/>
        </div>
        <div className='logo-container'>

        </div>
        <div className='search-container mt-1 mr-2 order-last'>
            <FaSearch size='40' />
        </div>
    </div>
    <div id='menu' style={{display:"none"}} className='menu z-999 fixed top-15 bg-black text-white text-2xl w-[100vw]'>
      <div className='border-b-2 p-3 border-white'>
        Home
      </div>
      <div className='border-b-2 p-3 border-white'>
        Animes
      </div>
      <div className='border-b-2 p-3 rounded-b-2xl border-white'>
        Contact Us
      </div>
    </div>
    </div>
  )
}

export default Header