import React from 'react'
import growPlant1 from '../assets/grow-plant-1.png';
import growPlant2 from '../assets/grow-plant-2.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import { TbSpray } from "react-icons/tb";
import { HiMiniScissors } from "react-icons/hi2";


function AboutPage() {
  return (
    <div className='h-screen bg-white'>
      <div className='h-2/6 bg-primary'>
      <div className='flex justify-center items-center h-full'>
        <div className='grid grid-cols-3 gap-8 place-items-center'>
          <div className='tracking-wider text-[50px] font-dm-serif text-white'>
            Grow Plant For <br/> A Better Life
          </div>

          <div className='relative'>
            <div className='absolute bottom-0 left-[-90px] inline-block px-8 bg-white rounded-full ring-2 ring-black'>
            <img src={growPlant1} alt="Grow Plant" className='w-[65px]' />
            </div>

            <div className='inline-block px-12 py-4 bg-white rounded-full ring-2 ring-black'>
            <img src={growPlant2} alt="Grow Plant" className='w-[100px]' />
            </div>
          </div>

          <div className='tracking-widest text-[16px] text-white font-poppins '>
            <h1> Cultivating plants enhances well-being <br/>
            and contributes to a healthier environment, <br/>
            fostering a more fulfilling life. </h1>
            <button type="button" className='flex items-center text-[14px] font-poppins mt-8 bg-tertiary p-4 px-8 rounded-full'> Read More  
              <FaCircleArrowRight className='ml-4 text-[20px]'/>
             </button>
          </div>
          
        </div>
        </div>
      </div>


      <div className='h-4/6 pt-12'>
        <div className='flex justify-center'>
          <h1 className='text-primary font-dm-serif text-[40px]'> Step to start taking care of your plants </h1>
        </div>
        
        <div className='flex justify-center'>
        <h1 className='text-black font-poppins tracking-wider mt-4 text-[16px]'> The right solution for the care of green and smart plants</h1>
        </div>

        <div className='pt-8 flex justify-center h-4/6'>
        <div className='grid grid-cols-3 place-items-center gap-52 mx-24'>

          {/* First Grid */}
          <div className='flex flex-col items-center space-x-4'>
              <div className='bg-primary rounded-full p-2'>
                <IoWaterOutline className='text-[60px] text-white'/>
              </div>   

              <div className='mt-4'>
                <h1 className='text-[22px] font-bold font-poppins'> Humidity Control</h1>
              </div> 

              <div className='text-center text-[16px] tracking-wider font-poppins mt-4'>
                <h1> Effective humidity control <br/> is essential
                  for properly <br/> caring for plants, ensuring <br/> optimal
                  growth and overall health. </h1>
              </div>
          </div>

          <div className='flex flex-col items-center space-x-4'>
              <div className='bg-primary rounded-full p-2'>
                <TbSpray className='text-[60px] text-white'/>
              </div>   

              <div className='mt-4'>
                <h1 className='text-[22px] font-bold font-poppins'> Pest Anticipation</h1>
              </div> 

              <div className='text-center text-[16px] tracking-wider font-poppins mt-4'>
                <h1> Implementing proactive <br/> pest anticipation measures <br/> 
                is issential to safeguard <br/> and nurture the well-being of plants. </h1>
              </div>
          </div>

          <div className='flex flex-col items-center space-x-4'>
              <div className='bg-primary rounded-full p-2'>
                <HiMiniScissors className='text-[60px] text-white'/>
              </div>   

              <div className='mt-4'>
                <h1 className='text-[22px] font-bold font-poppins'> Pruning Weeds </h1>
              </div> 

              <div className='text-center text-[16px] tracking-wider font-poppins mt-4'>
                <h1> Taking care of plants <br/> involves diligently
                managing <br/> unwanted growth <br/> to ensure their well-being. </h1>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
