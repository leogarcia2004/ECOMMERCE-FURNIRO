

import React from 'react'
import trophy from '../../assets/shop/trophy.png'
import checked from '../../assets/shop/checked.png'
import truck from '../../assets/shop/shipping.png'
import support from '../../assets/shop/customer-support.png'

const Informacoes = () => {
  return (
    <div className='bg-pink_fundo flex justify-center items-center gap-10 w-full h-44'>
        
            <div className='flex gap-3'>
                <img className='h-12' src={trophy} alt="Logo troféu" />
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl mb-1'>High Quality</span>
                    <span className='font-semibold text-sm text-zinc-400'>crafted from top materials</span>
                </div>
            </div>

            <div className='flex gap-3'>
                <img className='h-12' src={checked} alt="logo verificado" />
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl mb-1'>Warranty Protection</span>
                    <span className='font-semibold text-xs text-zinc-400'>Over 2 years</span>
                </div>
            </div>

            <div className='flex gap-3'>
                <img className='h-12' src={truck} alt="logo baú" />
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl mb-1'>Free Shipping</span>
                    <span className='font-semibold text-xs text-zinc-400'>Order over 150 $</span>
                </div>
            </div>

            <div className='flex gap-3'>
                <img className='h-12' src={support} alt="logo support" />
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl mb-1'>24 / 7 Support</span>
                    <span className='font-semibold text-xs text-zinc-400'>Dedicated support</span>
                </div>
            </div>
        
    </div>
  )
}

export default Informacoes