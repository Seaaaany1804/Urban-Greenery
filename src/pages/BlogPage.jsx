import React from 'react'
import fullPlant from '../assets/fullplant.png';
import instaOne from '../assets/insta-1.png';
import instaThree from '../assets/insta-3.png';
import instaFour from '../assets/insta-4.png';
import instaFive from '../assets/insta-5.png';
import { FaCircleArrowRight } from "react-icons/fa6";

function BlogPage() {
  return (
    <div className='h-screen bg-white'>
      <div className='h-3/6 bg-white'>
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col sm:flex-row w-[30%] h-[110%] sm:w-[90%] sm:h-[55%] md:h-[70%] lg:h-[90%] bg-gray rounded-3xl mt-[-100px]'>
                <div>
                    <img src={fullPlant} alt="Full Plants" className='lg:h-[100%] lg:w-[700px] sm:h-[100%] md:h-[100%] rounded-t-3xl sm:rounded-l-3xl' />
                </div>
                
                <div className='flex justify-center text-center w-[100%] mt-8 '> 
                    <div className='flex flex-col lg:items-start justify-center lg:w-[90%] 2xl:w-[80%] px-[20px]'>
                        <h1 className='text-center sm:text-start text-primary tracking-widest font-bold font-poppins lg:w-[80%] xl:w-[100%] text-[18px] lg:text-[30px]'> 
                            Come with us  how to grow your plants to 
                        be better and healthier</h1>
                        <div className='mt-8'>
                            <h1 className='hidden xl:block font-poppins tracking-widest lg:text-start'> Join us on a journey to learn the art of growing healthier and 
                            more vibrant plants. We're here to share tips and insights that 
                            will help you nurture your garden to its fullest potential. Come 
                            along with us, and let's explore the simple yet effective ways to
                            make your plans thrive, naturally. </h1>
                        </div>
                        <div className='hidden sm:block'>
                        <button type="button" className=' xl:mt-4 2xl:mt-8 flex items-center w-[180px] text-[14px] text-white font-poppins bg-tertiary p-4 px-8 rounded-full'> Read More  
                            <FaCircleArrowRight className='ml-4 text-[20px] text-white '/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>

      <div className='h-3/6 bg-gray'>
        <div>
            <h1 className='font-dm-serif text-primary text-[30px] pt-8 tracking-wide font-semibold text-center'> Follow us on Instagram </h1>
        </div>

        <div className='flex flex-wrap justify-center items-center h-[40vh] gap-12'>
            <img src={instaOne} alt="Instagram Pic1" className='w-[130px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px]  h-[130px] lg:w-[220px] lg:h-[220px] rounded-2xl ring-2 ring-white'/>
            <img src={instaThree} alt="Instagram Pic1" className='w-[130px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px]  h-[130px] lg:w-[220px] lg:h-[220px] rounded-2xl ring-2 ring-white'/>
            <img src={instaFour} alt="Instagram Pic1" className='w-[130px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px]  h-[130px] lg:w-[220px] lg:h-[220px] rounded-2xl ring-2 ring-white'/>
            <img src={instaFive} alt="Instagram Pic1" className='w-[130px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px]  h-[130px] lg:w-[220px] lg:h-[220px] rounded-2xl ring-2 ring-white'/>
        </div>
      </div>    
    </div>
  )
}

export default BlogPage
