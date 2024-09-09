import React from 'react';
import NavBar from '../components/NavBar';
import { FaCircleArrowRight } from "react-icons/fa6";
import plantUser from '../assets/plant-icon.png';

function Home() {
  return ( 
    <div className='h-screen bg-gradient-to-bl from-primary via-primary to-green-800'>
      <NavBar/>
        <div className='grid grid-cols-2 h-[80%]'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div className='text-white'>
            <h1 className='font-dm-serif text-[80px] '>
            Nature At Your <br /> Door Step
            </h1>

            <h1 className='font-poppins tracking-widest'>
            Transform your space with our indoor plants.<br/>
            Invite the soothing presence of nature into your home.
            </h1>

            <button type="button" className='flex items-center font-poppins mt-8 bg-tertiary p-4 px-10 rounded-full'> Discover Now  
              <FaCircleArrowRight className='ml-4 text-[28px]'/>
             </button>
          </div>        
        </div>


        <div className='flex justify-center items-center relative'>
          <div className='w-[80%] absolute bottom-[-75px] bg-white rounded-t-[360px] pt-12'>
            <img src={plantUser} alt="Plant User" className='w-full'/>
          </div>

          <div className='absolute left-[10px]'>
            <h1 className='font-poppins font-bold text-[24px] tracking-widest text-white bg-primary ring-2 ring-white p-10 px-12 rounded-full flex flex-col items-center justify-center'>
              Price 
              <span className='text-[40px] font-extrabold text-white'>$12</span>
            </h1>
          </div>

          
          </div>
        </div>



    </div>
  );
}

export default Home;
