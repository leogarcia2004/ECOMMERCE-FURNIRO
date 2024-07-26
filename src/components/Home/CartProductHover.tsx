

import React from 'react'
import ButtonAddCart from './ButtonAddCart'

const CartProductHover = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <ButtonAddCart />
            <div className='text-white font-semibold'>
                <span>share</span>
                <span>Compare</span>
                <span>like</span>
            </div>
        </div>
    </div>
  )
}

export default CartProductHover