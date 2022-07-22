import React from 'react';
import Logo from '../../img/LogoT.png';

const Navbar = () => {
 
  return (
    <div className="navbar bg-base-100 p-6 sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li tabindex="0">
          <a className="justify-between">
          Sportswear
          </a>
        </li>
        <li><a>Footwear</a></li>
        <li><a>Outfits</a></li>
      </ul>
    </div>
    <img className="btn btn-ghost normal-case text-xl" src={Logo} width={100} height={100} alt='logo' />
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li tabindex="0">
        <a>
        Sportswear
        </a>
      </li>
      <li><a>Footwear</a></li>
      <li><a>Outfits</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Log In</a>
  </div>
</div>
  )
}

export default Navbar