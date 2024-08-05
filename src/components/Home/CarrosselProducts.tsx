import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useCarrinho } from '../../contexts/CarrinhoContext';

const CarrosselProducts = () => {

  const {products} = useCarrinho()

  const carrossel = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carrossel.current) {
      setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
    }
  }, []);


  return (
    <div className="flex items-center">
      <button className="bg-white w-10 h-10 rounded-full">
        <i className="fas fa-arrow-left custom-arrow text-yellow-700"></i>
      </button> 

        <div className=''>
          <motion.div ref={carrossel}
              className="overflow-hidden"
              whileTap={{ cursor: "grabbing" }}>
            <motion.div  drag="x"
                dragConstraints={{ right: 0, left: -width }} className='flex gap-6'>
                  {products.map((product, index) => (
                    <div key={index} className={`relative w-64`}>
                      <div className='text-content w-40 bottom-2 right-2 z-0 absolute'>
                        <div className='bg-white py-8 px-6'>
                          <span className='mb-1'>01 - Bed Room</span>
                          <h1 className='font-bold text-2xl'>Inner Peace</h1>
                        </div>
                          <button className='px-4 w-fit py-2 bg-amber-600'>
                            <i className="fas fa-arrow-right text-white"></i>
                          </button>
                      </div>
                      <img src={product.images.mainImage} className='h-80' alt="" />
                    </div>
                  ))}
          
            </motion.div>
          </motion.div>
        </div>

        <button className="bg-white w-10 h-10 rounded-full">
        <i className="fas fa-arrow-right custom-arrow text-yellow-700"></i>
      </button>
    </div>
  );
};



export default CarrosselProducts;

