import React, { useState, useEffect } from 'react';
import newOne from '../assets/newOne.png';
import newTwo from '../assets/newTwo.png';
import newThree from '../assets/newThree.png';
import newFour from '../assets/newFour.png';
import newFive from '../assets/newFive.png';
import newSix from '../assets/newSix.png';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function ProductPage() {
  const products = [
    { id: 1, name: 'Homalomena Rubescens', price: '$4.00', img: newOne },
    { id: 2, name: 'Homalomena Rubescens', price: '$4.00', img: newTwo },
    { id: 3, name: 'Homalomena Rubescens', price: '$4.00', img: newThree },
    { id: 4, name: 'Homalomena Rubescens', price: '$4.00', img: newFour },
    { id: 5, name: 'Homalomena Rubescens', price: '$4.00', img: newFive },
    { id: 6, name: 'Homalomena Rubescens', price: '$4.00', img: newSix },
    { id: 7, name: 'Homalomena Rubescens', price: '$4.00', img: newOne },
    { id: 8, name: 'Homalomena Rubescens', price: '$4.00', img: newTwo },
    { id: 9, name: 'Homalomena Rubescens', price: '$4.00', img: newThree },
    { id: 10, name: 'Homalomena Rubescens', price: '$4.00', img: newFour },
    { id: 11, name: 'Homalomena Rubescens', price: '$4.00', img: newFive },
    { id: 12, name: 'Homalomena Rubescens', price: '$4.00', img: newSix },
    { id: 13, name: 'Homalomena Rubescens', price: '$4.00', img: newOne },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(1);

  useEffect(() => {
    const updateProductsPerPage = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setProductsPerPage(10); // XL and above: 10 products per page
      } else if (width >= 1024) {
        setProductsPerPage(6); // LG: 6 products per page
      } else if (width >= 768) {
        setProductsPerPage(4); // MD: 4 products per page
      } else if (width >= 640) {
        setProductsPerPage(2); // SM: 2 products per page
      } else {
        setProductsPerPage(1); // Default: 1 product per page
      }
    };

    updateProductsPerPage();
    window.addEventListener('resize', updateProductsPerPage);

    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='h-screen bg-white px-[100px]'>
      <div className='relative flex justify-center'>
        <h1 className='font-dm-serif text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-center font-bold text-primary'>
          Our Products
        </h1>
        <div className='absolute bottom-[-10px] border-2 w-[10%] border-secondary'></div>
      </div>

      <div className='mt-12 font-poppins tracking-widest text-primary flex justify-center md:justify-center lg:justify-start space-x-4'>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full text-[14px] py-1 px-4'>
          WHAT'S NEW
        </button>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full text-[14px] py-1 px-4'>
          BEST SELLERS
        </button>
        <button type="button" className='bg-white hover:bg-primary hover:text-white border-primary border-2 rounded-full text-[14px] py-1 px-4'>
          CUSTOMER FAVORITES
        </button>
      </div>

      {/* Updated Grid for Horizontal Layout */}
      <div className='place-items-center xl:place-items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10'>
        {currentProducts.map(product => (
          <div key={product.id} className='mb-6'>
            <div className='flex justify-center items-center w-[250px] h-[230px] bg-gray rounded-3xl hover:bg-secondary'>
              <img src={product.img} alt={product.name} className='w-[140px]' />
            </div>
            <div className='font-poppins tracking-wider mt-2 ml-2'>
              <h1>{product.name}</h1>
              <h1 className='text-tertiary font-bold'>{product.price}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center gap-12 mt-6'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='px-2 py-2 border border-primary rounded-full hover:bg-primary hover:text-white'
        >
          <FaAngleLeft className='text-2xl'/>
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(products.length / productsPerPage)}
          className='px-2 py-2 border border-primary rounded-full hover:bg-primary hover:text-white'
        >
          <FaAngleRight className='text-2xl'/>
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
