import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import { TbTimeDuration30 } from "react-icons/tb";
import planty from '../assets/planty.png';
import planties from '../assets/planties.png';

function ShopPage() {
  return (
    <div className='h-screen bg-primary'>
      <div className='h-[40%] bg-primary'>
        <div className='grid grid-cols-3 place-items-center'>
          
          {/* First Column */}
          <div className='relative flex justify-center items-center h-[40vh] w-full'>
            <div className='absolute right-0 h-[50%] border-r-[1px] border-white'></div>
            <div className='flex space-x-8 text-white '>
              <LiaShippingFastSolid className='text-[60px] text-white'/>
              <div className='tracking-wider'>
                <h1 className='font-dm-serif text-[20px] '> Free Delivery </h1>
                <h1 className='font-poppins'> Free shipping around the world <br/> for all orders over ₱500. </h1>
              </div>
            </div>
          </div>

          {/* Placeholder for Second Column */}
          <div className='relative items-center flex justify-center w-full h-[40vh]'>
          <div className='absolute right-0 h-[50%] border-r-[1px] border-white'></div>
            <div className='flex space-x-8 text-white'>
          <CiCreditCard1 className='text-[60px] text-white'/>
            <div className='tracking-wider'>
                <h1 className='font-dm-serif text-[20px] '> Secure Payment </h1>
                <h1 className='font-poppins'> Our payment gateway ensures, <br/> your information is safe and protected. </h1>
            </div>
            </div>  
          </div>

          
          <div>  
          <div className='flex space-x-8 text-white'>
          <TbTimeDuration30 className='text-[60px] text-white'/>
            <div className='tracking-wider'>
                <h1 className='font-dm-serif text-[20px] '> Customer Care </h1>
                <h1 className='font-poppins'> Every order comes with a 30-day return <br/> guarantee for your peace of mind. </h1>
            </div>
            </div>  
          </div>

        </div>
      </div>

      <div className='flex space-x-12 justify-center items-center h-[60%] bg-white'>
        <div className='w-[500px] h-[300px] bg-gray rounded-3xl'>
            <div className='grid grid-cols-2 h-full'>
                <div className='flex flex-col justify-center items-center '>
                  <div>
                    <h1 className='font-dm-serif text-[20px] text-primary font-bold'> Featured Deals</h1>
                    <h1 className='font-poppins text-[30px] text-black my-6'> Indoor <br/> Plants </h1>
                    <button className='font-poppins text-[18px] text-tertiary underline'> SHOP NOW </button>
                    </div>
                </div>

                <div className='relative'>
                <img src={planty} alt="Plant User" className='absolute bottom-0 w-[250px] '/>
                </div>
            </div>
        </div>

        <div className='w-[500px] h-[300px] bg-gray rounded-3xl'>
          <div className='grid grid-cols-2 h-full'>
                  <div className='flex flex-col justify-center items-center '>
                    <div>
                      <h1 className='font-dm-serif text-[20px] text-primary font-bold'> Best Sellers</h1>
                      <h1 className='font-poppins text-[30px] text-black my-6'> Herbal <br/> Plants </h1>
                      <button className='font-poppins text-[18px] text-tertiary underline'> SHOP NOW </button>
                      </div>
                  </div>

                  <div className='relative'>
                  <img src={planties} alt="Plant User" className='absolute bottom-0 w-[250px] '/>
                  </div>
              </div>
        </div>




      </div>
    </div>
  );
}

export default ShopPage;
