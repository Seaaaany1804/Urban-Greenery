import React from 'react'
import newOne from '../assets/newOne.png';
import newTwo from '../assets/newTwo.png';
import newThree from '../assets/newThree.png';
import newFour from '../assets/newFour.png';
import newFive from '../assets/newFive.png';
import newSix from '../assets/newSix.png';

function ProductPage() {
  return (
    <div className='h-screen bg-white px-[100px]'>
      <div className='relative flex justify-center'>
        <h1 className='font-dm-serif text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold text-primary '> Our Products </h1>
        <div className='absolute bottom-[-10px] sm:w-[50%] w-[10%] border-2 border-secondary'>  </div>
      </div>

      <div className='mt-16 font-poppins tracking-widest text-primary flex justify-center md:justify-center lg:justify-start space-x-4'>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full text-[14px] py-1 px-4'> WHAT'S NEW </button>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full text-[14px] py-1 px-4'> BEST SELLERS </button>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full text-[14px] py-1 px-4'> CUSTOMER FAVORITES </button>
      </div>

      <div className='hidden flex flex-wrap justify-center items-center mt-10'>
        <div className='grid grid-cols-4 gap-24'>
          <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newOne} alt="Plant One" className='w-[180px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

          <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newTwo} alt="Plant Two" className='w-[200px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

          <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newThree} alt="Plant Three" className='w-[220px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

          <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newFour} alt="Plant Three" className='w-[220px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

        </div>
      </div>

      <div className='hidden flex justify-center items-center mt-8'>
        <div className='grid grid-cols-4 gap-24'>
        <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newFive} alt="Plant One" className='w-[180px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

          <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newSix} alt="Plant Two" className='w-[200px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

          <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newOne} alt="Plant Three" className='w-[180px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

          <div>
          <div className='flex justify-center items-center w-[300px] h-[280px] bg-gray rounded-3xl hover:bg-secondary'>
            <img src={newTwo} alt="Plant Three" className='w-[180px]'/>
          </div>
          <div className='font-poppins tracking-wider mt-2 ml-2'>
            <h1> Homalomena Rubescens</h1>
            <h1 className='text-tertiary font-bold'> $4.00</h1>
          </div>
          </div>

          </div>
      </div>
      </div>
  )
}

export default ProductPage
