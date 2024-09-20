import React from 'react'
import newOne from '../assets/newOne.png';
import newTwo from '../assets/newTwo.png';
import newThree from '../assets/newThree.png';
import newFour from '../assets/newFour.png';
import newFive from '../assets/newFive.png';
import newSix from '../assets/newSix.png';

function ProductPage() {
  return (
    <div className='hidden h-screen bg-white'>
      <div className='relative flex justify-center'>
        <h1 className='font-dm-serif text-[40px] font-bold text-primary mt-[-20px]'> Our Products </h1>
        <div className='absolute bottom-[-10px] w-[8%] border-2 border-secondary'>  </div>
      </div>

      <div className='mt-16 ml-48 font-poppins tracking-widest text-primary flex space-x-4'>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full py-1 px-4'> WHAT'S NEW </button>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full py-1 px-4'> BEST SELLERS </button>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full py-1 px-4'> CUSTOMER FAVORITES </button>
      </div>

      <div className='flex justify-center items-center mt-10'>
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

      <div className='flex justify-center items-center mt-8'>
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
