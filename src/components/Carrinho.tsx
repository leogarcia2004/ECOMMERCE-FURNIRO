

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bag from '../assets/bag_shopping.png'
import { useCarrinho } from '../contexts/CarrinhoContext'

const Carrinho: React.FC = () => {

  const {carrinhoOpen, setCarrinhoOpen, cartProducts, amount, quantities} = useCarrinho();

  const [clicked, setClicked] = useState(true);
  
  const handleClick = () => {
      setClicked(!clicked)                          
  }

  const navigate = useNavigate();

  const navigateCart = () => {
    navigate('/cart')
  }

  const navigateCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div  className={carrinhoOpen ? 'fixed top-0 right-0 z-50 items-center pt-8 bg-white duration-300 border-l border-text-slate-200 flex flex-col pb-5 px-4 justify-between h-screen md:w-[400px] w-full ' : 'fixed top-0 right-[-700px] z-50 bg-white duration-300 border-l flex flex-col pb-5 px-4 justify-between h-screen md:w-[400px] md-72' }>
        
          <div className='flex w-fit gap-16'>
            <div className='border-spacing-x-28 border-b border-zinc-300 pb-6 pr-20 '>
              <h3 className='text-2xl font-bold'>Shopping Cart</h3>
            </div>
            <img src={bag} onClick={() => setCarrinhoOpen(!carrinhoOpen)} alt="Logo bag" className='cursor-pointer h-5' />
          </div>
    
          <div className='h-3/5 w-full overflow-y-auto flex flex-col gap-2'>
          { clicked ?
          cartProducts.map(product => ( 
              <div key={product.id} className='flex items-center w-full justify-between p-1.5 px-6 rounded-lg'>
                <img src={product.images.mainImage} alt="" className='h-20 mr-2 bg-pink_fundo rounded-md' />

                <div className='flex flex-col justify-center gap-2 '>
                  <h3 className='text-neutral-900 '> {product.title} </h3>
                  <p className='text-sm'><span className='text-base'>{quantities[product.id] || 1}</span> X <span className='text-yellow-600 text-sm'>{ product.new ? product.normalPrice : product.salePrice}</span></p>
                </div>

                <i onClick={handleClick} className='fa-solid text-gray-400 fa-circle-xmark cursor-pointer'></i>     
              </div>
            ))
           :
          null  
        }
            
        </div>
    
          <span className='w-full flex gap-36 pl-5 rounded-sm'>Subtotal <span className='text-yellow-600 font-medium'>{amount.toFixed(2)}</span> </span>
           
          <div className='flex text-sm gap-4'>
            <button onClick={navigateCart} className='w-fit py-1 px-7 border border-black rounded-2xl text-neutral-900'>Cart</button>
            <button onClick={navigateCheckout} className='w-fit py-1 px-6 border border-black rounded-2xl text-neutral-900'>Checkout</button>
            <button className='w-fit py-1 px-6 border border-black rounded-2xl text-neutral-900'>Comparison</button>
          </div>
        </div>
  )
}

export default Carrinho