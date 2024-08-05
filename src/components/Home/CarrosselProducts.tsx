import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";


const CarrosselProducts = ({ images }) => {

  const carrossel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carrossel.current) {
      setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
    }
  }, []);


  return (
    <div className="flex items-center">
      <button className="bg-white w-10 h-10 rounded-full">
        <i className="fas fa-arrow-left custom-arrow text-yellow-700"></i>
      </button> 
        <div>

          <div>
            <div className='text-content'>
              <div className='bg-white py-8 px-6'>
                <span className='mb-1'>01 - Bed Room</span>
                <h1 className='font-bold text-2xl'>Inner Peace</h1>
              </div>
              <button className='px-4 w-fit py-2 bg-amber-600'>
                <i className="fas fa-arrow-right text-white"></i>
              </button>
            </div>
            <img src="" alt="" />
          </div>
          
        </div>
        <button className="bg-white w-10 h-10 rounded-full">
        <i className="fas fa-arrow-right custom-arrow text-yellow-700"></i>
      </button>
    </div>
  );
};



export default CarrosselProducts;

