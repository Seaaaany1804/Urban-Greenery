import React from 'react'
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function ContactPage() {
  return (
    <div className='hidden h-[65vh] bg-primary'>
      <div>
        <h1 className='text-white text-center font-dm-serif text-[30px] pt-8 tracking-wider'> 
            Stay In The Loop With Special Offers, <br/>
        Plant Parenting Tips, & More. </h1>
      </div>

      <div className='relative flex justify-center space-x-4 mt-8'>
        <input type="email" name="Email" placeholder='Email' id="1" className='bg-[#385444] p-4 w-[23%] text-white rounded-md font-poppins'/>
        <button type="button" className='bg-tertiary px-2 rounded-md'> <BiLogoTelegram className='text-[40px] text-white'/>  </button>
        <div className='absolute bottom-[-50px] w-[80%] border-[1px] border-white'>  </div>
      </div>

      <div className='mt-20 grid grid-cols-[1fr_2fr_1fr] place-items-center'>
        <div className='relative'> 
            <h1 className='text-white font-poppins ml-[120px]'> 123 Hello Street <br/>
            3024, Philippines <br/> <br/>
            +639912345678 <br/>
            example@gmail.com</h1>
            <div className='absolute right-[-100px] top-[-30px] h-[160px] border-[1px] border-white'>  </div>
        </div>

        <div className='relative text-center flex flex-col justify-center'>
            <h1 className='text-white font-semibold font-poppins tracking-wider text-[26px]'> URBAN GREENERY </h1>
            <h1 className='text-white tracking-widest text-[16px] mt-4'> Caring for plants enhances your space with life. <br/>
            Whether it's a small herb garden or thriving jungle, nurturing your plants <br/>
            rewards you with greenery and serenity.</h1>
                <div className='flex justify-center space-x-10 mt-4'>
                    <FaFacebook className='text-white text-[40px]' />
                    <FaInstagram className='text-white text-[40px]' />
                    <FaYoutube className='text-white text-[42px]' />
                </div>
            <div className='absolute right-[-100px] top-[0px] h-[160px] border-[1px] border-white'>  </div>
        </div>

        <div>
            
                <h1 className='text-white text-[20px] font-poppins tracking-wider font-semibold mr-[200px]'> Pages </h1>
                <div className='flex flex-col text-white font-poppins tracking-wider mt-4'>
                    <a href="Home" className='hover:underline'> Home </a>
                    <a href="Shop" className='hover:underline'> Shop </a>
                    <a href="About" className='hover:underline'> About </a>
                    <a href="Blog" className='hover:underline'> Blog </a>
                    <a href="Contact" className='hover:underline'> Contact </a>
                </div>
            
        </div>        
      </div>

      
      <div className='flex justify-center relative'>
        <div className='absolute mt-8 w-[80%] border-[1px] border-white'>  </div>
        <h1 className='mt-16 text-center text-white font-poppins tracking-widest text-[14px]'> © 2023 URBAN GREENERY | ALL RIGHTS RESERVED <br/>
        MADE BY SEAN DEXTER LAGMAY </h1>
      </div>
    </div>
  )
}

export default ContactPage
