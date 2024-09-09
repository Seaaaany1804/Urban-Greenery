import React from 'react'
import fullPlant from '../assets/fullplant.png';
import instaOne from '../assets/insta-1.png';
import instaTwo from '../assets/insta-2.png';
import instaThree from '../assets/insta-3.png';
import instaFour from '../assets/insta-4.png';
import instaFive from '../assets/insta-5.png';
import { FaCircleArrowRight } from "react-icons/fa6";

function BlogPage() {
  return (
    <div className='h-screen bg-white'>
      <div className='h-3/6 bg-white'>
        <div className='flex justify-center items-center h-full'>
            <div className='flex w-[1200px] h-[400px] bg-gray rounded-3xl mt-[-100px]'>
                <div>
                    <img src={fullPlant} alt="Full Plants" className='h-[400px] rounded-l-3xl' />
                </div>
                
                <div className='flex justify-center w-[70%] mt-8'> 
                    <div>
                        <h1 className='text-primary tracking-widest font-bold font-poppins text-[30px]'> 
                            Come with us  how to grow your <br/> plants to 
                        be better and healthier</h1>
                        <div className='mt-8'>
                            <h1 className='font-poppins tracking-widest'> Join us on a journey to learn the art of growing healthier and <br/> 
                            more vibrant plants. We're here to share tips and insights that <br/>
                            will help you nurture your garden to its fullest potential. Come <br/>
                            along with us, and let's explore the simple yet effective ways to <br/>
                            make your plans thrive, naturally. </h1>
                        </div>
                        <button type="button" className='flex items-center text-[14px] text-white font-poppins mt-8 bg-tertiary p-4 px-8 rounded-full'> Read More  
                            <FaCircleArrowRight className='ml-4 text-[20px] text-white '/>
                            </button>
                    </div>
                </div>



                
            </div>
        </div>
      </div>

      <div className='h-3/6 bg-gray'>
        <div>
            <h1 className='font-dm-serif text-primary text-[30px] pt-8 tracking-wide font-semibold text-center'> Follow us on Instagram </h1>
        </div>

        <div className='flex justify-center items-center h-[40vh] space-x-8'>
            <img src={instaOne} alt="Instagram Pic1" className='w-[220px] h-[220px] rounded-2xl ring-2 ring-white'/>
            <img src={instaTwo} alt="Instagram Pic1" className='w-[220px] h-[220px] rounded-2xl ring-2 ring-white'/>
            <img src={instaThree} alt="Instagram Pic1" className='w-[220px] h-[220px] rounded-2xl ring-2 ring-white'/>
            <img src={instaFour} alt="Instagram Pic1" className='w-[220px] h-[220px] rounded-2xl ring-2 ring-white'/>
            <img src={instaFive} alt="Instagram Pic1" className='w-[220px] h-[220px] rounded-2xl ring-2 ring-white'/>
        </div>
      </div>    
    </div>
  )
}

export default BlogPage
