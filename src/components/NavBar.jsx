import React from 'react';
import plantIcon from '../assets/plant.png'; 
import heartIcon from '../assets/heart.png';
import userIcon from '../assets/user.png';
import shoppingIcon from '../assets/shopping-bag.png';

const NavBar = () => {
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Shop", path: "shop" },
    { link: "About", path: "about" },
    { link: "Blog", path: "blog" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="flex items-center justify-between h-28 px-48">
      <div className='flex items-center'>
        <img src={plantIcon} alt="Plant Icon" className="w-10 h-10 mr-2"/> 
        <h1 className="tracking-wider font-poppins text-[24px] font-bold text-white">Urban Greenery </h1>
      </div>
      
      <div className="flex flex-1 justify-center">
        <ul className="flex space-x-32"> 
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.path}`} className="tracking-widest font-poppins text-[16px] text-white hover:text-black">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-between space-x-5'>
      <img src={heartIcon} alt="Heart Icon" className="w-[30px] h-[30px]"/> 
      <img src={shoppingIcon} alt="Plant Icon" className="w-[30px] h-[30px]"/> 
      <img src={userIcon} alt="Plant Icon" className="w-[30px] h-[30px]"/> 
      </div>
    </nav>
  );
}

export default NavBar;
