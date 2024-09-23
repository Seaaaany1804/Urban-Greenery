import React from 'react';
import NavBar from '../components/NavBar';
import { FaCircleArrowRight } from "react-icons/fa6";
import plantUser from '../assets/plant-icon.png';

function Home() {
  return ( 
    <div className='h-screen bg-gradient-to-bl from-primary via-primary to-green-800'>
      <NavBar/>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-[80%]'>
        <div className='flex flex-col items-center justify-center space-y-4 sm:justify-start md:justify-center'>
          <div className='text-white flex flex-col items-center text-center md:text-start lg:text-start'>
            <h1 className='font-dm-serif text-[48px] md:ml-[20px] md:text-[48px] md:w-[420px] lg:w-[500px] lg:ml-0 lg:text-[60px] xl:text-[68px]'>
              Nature At Your Door Step
            </h1>

            <h1 className='font-poppins tracking-widest text-[14px] mx-[50px] mt-[20px] md:text-[18px] md:mx-[20px] lg:text-[20px] lg:w-[500px]'>
              Transform your space with our indoor plants.
              Invite the soothing presence of nature into your home.
            </h1>

            <div className="flex justify-center md:ml-[25px] md:justify-start w-full">
              <button type="button" className='flex font-poppins mt-8 bg-tertiary p-4 px-10 rounded-full'>
                Discover Now
                <FaCircleArrowRight className='ml-4 text-[28px]' />
              </button>
            </div>
          </div>
        </div>


        <div className='hidden sm:flex justify-center items-center relative'>
          <div className='sm:w-[370px] md:w-[400px] lg:w-[480px] xl:w-[80%] absolute sm:bottom-[-39px] xl:bottom-[-75px] md:bottom-[-39px] bg-white rounded-t-[360px] pt-12 md:pt-24'>
            <img src={plantUser} alt="Plant User" className='w-full'/>
          </div>

          <div className='hidden 2xl:block absolute left-[40px]'>
            <h1 className='font-poppins font-bold text-[20px] tracking-widest text-white bg-primary ring-2 ring-white p-8 px-10 rounded-full flex flex-col items-center justify-center'>
              Price 
              <span className='text-[24px] font-extrabold text-white'>$12</span>
            </h1>
          </div>

          
          </div>
        </div>



    </div>
  );
}

export default Home;
