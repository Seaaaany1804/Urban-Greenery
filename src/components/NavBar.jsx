import React, { useState } from 'react';
import plantIcon from '../assets/plant.png'; 
import heartIcon from '../assets/heart.png';
import userIcon from '../assets/user.png';
import shoppingIcon from '../assets/shopping-bag.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Shop", path: "shop" },
    { link: "About", path: "about" },
    { link: "Blog", path: "blog" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="flex items-center justify-between h-28 px-6 md:px-24 lg:px-48 bg-gray-800">
      <div className='flex items-center'>
        <img src={plantIcon} alt="Plant Icon" className="w-8 h-8 md:w-10 md:h-10 mr-2"/> 
        <h1 className="tracking-wider font-poppins text-[18px] md:text-[24px] font-bold text-white">Urban Greenery</h1>
      </div>
      
      <div className="md:hidden">
        {/* Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden xl:flex flex-1 justify-center ${isOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex space-x-8 lg:space-x-32"> 
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.path}`} className="tracking-widest font-poppins text-[14px] md:text-[16px] text-white hover:text-black">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-20 left-0 w-full bg-gray-800`}>
        <ul className="flex flex-col items-center space-y-6 py-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.path}`} className="tracking-widest font-poppins text-[16px] text-white hover:text-black">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex justify-between space-x-5">
        <img src={heartIcon} alt="Heart Icon" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"/> 
        <img src={shoppingIcon} alt="Shopping Icon" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"/> 
        <img src={userIcon} alt="User Icon" className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"/> 
      </div>
    </nav>
  );
}

export default NavBar;
