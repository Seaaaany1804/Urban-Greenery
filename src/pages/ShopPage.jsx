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
            <div className='flex flex-col justify-center items-center text-white xl:flex-row xl:space-x-8 xl:items-start'>
              <LiaShippingFastSolid className='text-[42px] text-white sm:text-[48px] md:text-[54px] lg:text-[60px]'/>
              <div className='tracking-wider'>
                <h1 className='font-dm-serif text-[20px] text-center sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[20px] xl:text-start'> Free Delivery </h1>
                <h1 className='hidden font-poppins xl:block xl:w-[280px]'> Free shipping around the world for all orders over ₱500. </h1>
              </div>
            </div>
          </div>

          {/* Placeholder for Second Column */}
          <div className='relative items-center flex justify-center w-full h-[40vh]'>
          <div className='absolute right-0 h-[50%] border-r-[1px] border-white'></div>
            <div className='flex flex-col justify-center items-center text-white xl:flex-row xl:space-x-8 xl:items-start'>
          <CiCreditCard1 className='text-[42px] text-white sm:text-[48px] md:text-[54px] lg:text-[60px]'/>
            <div className='tracking-wider'>
                <h1 className='font-dm-serif text-[20px] text-center sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[20px] xl:text-start '> Secure Payment </h1>
                <h1 className='hidden font-poppins xl:block xl:w-[320px]'> Our payment gateway ensures, your information is safe and protected. </h1>
            </div>
            </div>  
          </div>

          
          <div>  
          <div className='flex flex-col justify-center items-center text-white xl:flex-row xl:space-x-8 xl:items-start'>
          <TbTimeDuration30 className='text-[42px] text-white sm:text-[48px] md:text-[54px] lg:text-[60px]'/>
            <div className='tracking-wider'>
                <h1 className='font-dm-serif text-[20px] text-center sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[20px] xl:text-start '> Customer Care </h1>
                <h1 className='hidden font-poppins xl:block xl:w-[350px]'> Every order comes with a 30-day return guarantee for your peace of mind. </h1>
            </div>
            </div>  
          </div>

        </div>
      </div>

      <div className='flex flex-wrap gap-4 md:gap-4 lg:gap-12 sm:gap-2 pt-4 justify-center items-center h-[60%] bg-white'>
        <div className='w-[500px] h-[180px] sm:w-[500px] sm:h-[200px] md:w-[350px] md:h-[220px] lg:w-[480px] lg:h-[300px] bg-gray rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
                <div className='flex flex-col justify-center items-center '>
                  <div className='text-center lg:text-start'>
                    <h1 className='font-dm-serif text-[20px] md:text-[18px] text-primary font-bold'> Featured Deals</h1>
                    <h1 className='font-poppins text-[30px] lg:text-start md:text-[24px] text-black my-6 lg:w-[100px]'> Indoor Plants </h1>
                    <button className='font-poppins text-[18px] lg:text-start md:text-[16px] text-tertiary underline'> SHOP NOW </button>
                    </div>
                </div>

                <div className='hidden lg:block relative'>
                <img src={planty} alt="Plant User" className='absolute bottom-0 w-[250px] '/>
                </div>
            </div>
        </div>

        <div className='w-[500px] h-[180px] sm:w-[500px] sm:h-[200px] md:w-[350px] md:h-[220px] lg:w-[480px] lg:h-[300px] bg-gray rounded-3xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2  h-full'>
                  <div className='flex flex-col justify-center items-center '>
                  <div className='text-center lg:text-start'>
                      <h1 className='font-dm-serif text-[20px] md:text-[18px] text-primary font-bold'> Best Sellers</h1>
                      <h1 className='font-poppins text-[30px] lg:text-start md:text-[24px] text-black my-6 lg:w-[100px]'> Herbal Plants </h1>
                      <button className='font-poppins text-[18px] lg:text-start md:text-[16px] text-tertiary underline'> SHOP NOW </button>
                      </div>
                  </div>

                  <div className='hidden lg:block relative'>
                  <img src={planties} alt="Plant User" className='absolute bottom-0 w-[250px] '/>
                  </div>
              </div>
        </div>




      </div>
    </div>
  );
}

export default ShopPage;
