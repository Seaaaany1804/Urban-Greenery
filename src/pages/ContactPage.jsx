import React from 'react'
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function ContactPage() {
  return (
    <div className='h-[70vh] bg-primary'>
      <div>
        <h1 className='text-white text-center font-dm-serif text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] pt-8 tracking-wider'> 
            Stay In The Loop With Special Offers, <br/>
        Plant Parenting Tips, & More. </h1>
      </div>

      <div className='relative flex justify-center space-x-4 mt-8'>
        <input type="email" 
          name="Email" placeholder='Email' 
          id="1" 
          className='bg-[#385444] p-2 md:p-3 xl:p-4 xl:w-[23%] w-[60%] sm:w-[40%] text-white rounded-md font-poppins'/>
        <button type="button" 
          className='bg-tertiary px-2 rounded-md'> <BiLogoTelegram className=' text-[24px] md:text-[32px] xl:text-[40px] text-white'/>  </button>
        <div className='absolute bottom-[-20px] xl:bottom-[-50px] md:bottom-[-30px] w-[80%] sm:w-[60%] lg:w-[80%] border-[1px] border-white'>  </div>
      </div>

      <div className='mt-8 grid-cols-1 grid lg:grid-cols-2 xl:grid-cols-[1fr_2fr_1fr] place-items-center'>
        {/* Information Details */}
        <div className='flex justify-center relative w-full items-center h-full'> 
            <h1 className='text-white font-poppins text-center text-[14px] 2xl:text-[18px]'> 123 Hello Street 
            3024, Philippines <br/> 
            +639912345678 <br/>
            example@gmail.com</h1>
            <div className='hidden lg:block absolute right-[0px] top-[10px] xl:top-[40px] h-[100%] xl:h-[80%] border-[1px] border-white'>  </div>
            <div className='lg:hidden absolute bottom-[-10px] xl:bottom-[-50px] md:bottom-[-10px] w-[80%] sm:w-[60%] border-[1px] border-white'></div>
        </div>

        {/* Title */}
        <div className='w-full items-center relative text-center flex flex-col justify-center'>
            <h1 className='text-white font-semibold font-poppins tracking-wider text-[20px] md:text-[26px] mt-4 xl:mt-8'> URBAN GREENERY </h1>
            <h1 className='hidden xl:block text-white tracking-widest text-[16px] mt-4 xl:w-[70%] 2xl:w-[60%]'> Caring for plants enhances your space with life. 
            Whether it's a small herb garden or thriving jungle, nurturing your plants 
            rewards you with greenery and serenity.</h1>
                <div className='flex justify-center gap-5 mt-2 2xl:mt-4'>
                    <FaFacebook className='text-white text-[30px] 2xl:text-[40px]' />
                    <FaInstagram className='text-white text-[30px] 2xl:text-[40px]' />
                    <FaYoutube className='text-white text-[32px] 2xl:text-[42px]' />
                </div>
            <div className='lg:hidden absolute bottom-[-10px] xl:bottom-[-50px] md:bottom-[-10px] w-[80%] sm:w-[60%] border-[1px] border-white'></div>    
            <div className='hidden xl:block absolute right-[0px] top-[40px] h-[80%] border-[1px] border-white'>  </div>
        </div>

        {/* Pages */}
        <div className='mt-4 lg:mt-0 xl:mt-8 lg:hidden xl:block flex flex-col items-center justify-center'>
                <h1 className='text-white text-[20px] text-[18px] md:text-[20px] text-center font-poppins tracking-wider font-semibold'> Pages </h1>
                <div className='flex gap-4 text-white font-poppins xl:flex-col xl:gap-1 tracking-wider mt-4'>
                    <a href="Home" className='hover:underline'> Home </a>
                    <a href="Shop" className='hover:underline'> Shop </a>
                    <a href="About" className='hover:underline'> About </a>
                    <a href="Blog" className='hover:underline'> Blog </a>
                    <a href="Contact" className='hover:underline'> Contact </a>
                </div>         
                
        </div>  
      </div>

      <div className='hidden lg:block xl:hidden mt-4 lg:mt-0 flex flex-col items-center justify-center'>
        <div className='relative flex justify-center'>
          <div className='absolute top-[20px] w-[80%] border-[1px] border-white'>  </div>
        </div>
                <h1 className='text-white mt-8 text-[20px] text-center font-poppins tracking-wider font-semibold'> Pages </h1>
                <div className='flex justify-center gap-4 text-white font-poppins tracking-wider mt-4'>
                    <a href="Home" className='hover:underline'> Home </a>
                    <a href="Shop" className='hover:underline'> Shop </a>
                    <a href="About" className='hover:underline'> About </a>
                    <a href="Blog" className='hover:underline'> Blog </a>
                    <a href="Contact" className='hover:underline'> Contact </a>
                </div>
        </div>  

      
      <div className='flex justify-center relative'>
        <div className='absolute mt-8 w-[80%] sm:w-[60%] xl:w-[80%] border-[1px] border-white'>  </div>
        <h1 className='mt-16 text-center text-white font-poppins tracking-widest text-[12px]'> © 2023 URBAN GREENERY | ALL RIGHTS RESERVED <br/>
        MADE BY SEAN DEXTER LAGMAY </h1>
      </div>
    </div>
  )
}

export default ContactPage
