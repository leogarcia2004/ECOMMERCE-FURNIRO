import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const CarrosselProducts = ({images}) => {

  const carrossel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carrossel.current) {
      setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
    }
  }, []);


  return (
    <div className="flex items-center">

        <div className=''>
          <motion.div ref={carrossel}
              className="overflow-hidden "
              whileTap={{ cursor: "grabbing" }}>
            <motion.div  drag="x"
                dragConstraints={{ right: 0, left: -width }} className=' flex gap-6'>
                  {images.map((image, index) => (
                    <div key={index} className={`relative w-40`}>
                      {
                        index === 0 && (
                          <div className='text-content w-44 bottom-2 right-2 z-0 absolute'>
                            <div className='bg-white py-8 px-6'>
                              <span className='mb-1'>01 - Bed Room</span>
                              <h1 className='font-bold text-2xl'>Inner Peace</h1>
                            </div>
                            <button className='px-4 w-fit py-2 bg-amber-600'>
                              <i className="fas fa-arrow-right text-white"></i>
                            </button>
                          </div>
                        )
                      }
                      
                      <img src={image}  alt="" />
                    </div>
                  ))}
          
            </motion.div>
          </motion.div>
        </div>

    </div>
  );
};



export default CarrosselProducts;

