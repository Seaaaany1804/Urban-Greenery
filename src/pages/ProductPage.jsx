import React, { useState, useEffect } from 'react';
import newOne from '../assets/newOne.png';
import newTwo from '../assets/newTwo.png';
import newThree from '../assets/newThree.png';
import newFour from '../assets/newFour.png';
import newFive from '../assets/newFive.png';
import newSix from '../assets/newSix.png';

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
    { id: 11, name: 'Homalomena Rubescens', price: '$4.00', img: newFour },
    { id: 12, name: 'Homalomena Rubescens', price: '$4.00', img: newFour },
    { id: 13, name: 'Homalomena Rubescens', price: '$4.00', img: newFour },
  ];

  // State to handle the current page and products per page
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(1);

  // Detect the screen size and adjust products per page
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

  // Logic to get current products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Split products into two columns if showing more than 4 products
  const half = Math.ceil(currentProducts.length / 2);
  const firstColumn = currentProducts.slice(0, half);
  const secondColumn = currentProducts.slice(half);

  // Handle pagination click
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

      <div className='flex flex-wrap'>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10 grid-flow-row`}>
          <div className="flex-1">
            {firstColumn.map(product => (
              <div key={product.id} className="mb-6">
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
          <div className="flex-1">
            {secondColumn.map(product => (
              <div key={product.id} className="mb-6">
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
        </div>
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-between mt-6'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='px-4 py-2 border border-primary rounded-full'
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(products.length / productsPerPage)}
          className='px-4 py-2 border border-primary rounded-full'
        >
          Next
        </button>
      </div>



      {/* <div className='flex flex-wrap justify-start items-center mt-10'>
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
      </div> */}

      {/* <div className='flex justify-start items-center mt-8'>
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
      </div> */}
      </div>
  )
}

export default ProductPage
