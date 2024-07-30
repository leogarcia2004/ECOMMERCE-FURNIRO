

import React from 'react'
import { useState } from 'react'
import bag from '../assets/bag_shopping.png'

interface Product {
  id: number,
  title: string,
  description: string,
  short: string,
  normalPrice: number,
  salePrice: number,
  images: string,
  new: boolean
  sku: string
}

interface CarrinhoProps {
  products: Product[];
  isOpen: boolean;
  setCarrinhoOpen?: () => void;

}

const Carrinho: React.FC<CarrinhoProps> = ({ products, isOpen, setCarrinhoOpen }) => {


  const [clicked, setClicked] = useState(true);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});


  let valorTotal = products.reduce((acc, product) => {
    const quantity = quantities[product.id] || 1;
    const price = product.new ? product.salePrice : product.normalPrice;
    return acc + (price * quantity);
  }, 0);

  


  const handleClick = () => {
      setClicked(!clicked)                          
 
    }

  return (
    <div  className={isOpen ? 'fixed top-0 right-0 z-50 items-center pt-8 bg-white duration-300 border-l border-text-slate-200 flex flex-col pb-5 px-4 justify-between h-screen md:w-[400px] w-72 ' : 'fixed top-0 right-[-500px] z-50 bg-white duration-300 border-l  flex flex-col pb-5 px-4 justify-between h-screen md:w-[400px] md-72' }>
        
          <div className='flex w-fit gap-16'>
            <div className='border-spacing-x-28 border-b border-zinc-300 pb-6 pr-20 '>
              <h3 className='text-2xl font-bold'>Shopping Cart</h3>
            </div>
            <img src={bag} onClick={setCarrinhoOpen} alt="Logo bag" className='cursor-pointer h-5' />
          </div>
    
          <div className='h-3/5 w-full overflow-y-auto flex flex-col gap-2'>
          { clicked ?
          products.map(product => ( 
              <div key={product.id} className='flex items-center w-full justify-between p-1.5 px-6 rounded-lg'>
                <img src={product.images.mainImage} alt="" className='h-20 bg-pink_fundo rounded-md' />

                <div className='flex flex-col justify-center gap-2 '>
                  <h3 className='text-neutral-900 '> {product.title} </h3>
                  <p className='text-sm'><span className='text-base'>{quantities[product.id] || 1}</span> X <span className='text-yellow-600 text-sm'>{ product.new ? product.salePrice : product.normalPrice}</span></p>
                </div>

                <i onClick={handleClick} className='fa-solid text-gray-400 fa-circle-xmark cursor-pointer'></i>     
              </div>
            ))
           :
          null  
        }
            
        </div>
    
          <span className='w-full flex gap-36 pl-5 rounded-sm'>Subtotal <span className='text-yellow-600 font-medium'>{valorTotal.toFixed(2)}</span> </span>
           
          <div className='flex text-sm gap-4'>
            <button className='w-fit py-1 px-7 border border-black rounded-2xl text-neutral-900'>Cart</button>
            <button className='w-fit py-1 px-6 border border-black rounded-2xl text-neutral-900'>Checkout</button>
            <button className='w-fit py-1 px-6 border border-black rounded-2xl text-neutral-900'>Comparison</button>
          </div>
        </div>
  )
}

export default Carrinho