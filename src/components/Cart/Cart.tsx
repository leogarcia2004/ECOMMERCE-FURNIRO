

import ImagemApresentacaoPage from '../ImagemApresentacaoPage'
import Informacoes from '../Informacoes'
import logoTeste from '../../assets/logo_furniro.png'
import trash from '../../assets/cart/trash.png'

const Cart = () => {
  return (
    <div>
        <ImagemApresentacaoPage title="Cart" />
        <section className='my-14 flex flex-col md:flex-row md:gap-8 justify-center w-full'>
  <div className='flex flex-col w-full md:w-6/12'>
    <div className='bg-pink_fundo flex justify-center mb-12 py-4'>
      <ul className='flex flex-col md:flex-row md:gap-8 gap-4'>
        <li className='font-semibold'>Product</li>
        <li className='font-semibold'>Price</li>
        <li className='font-semibold'>Quantity</li>
        <li className='font-semibold'>Subtotal</li>
      </ul>
    </div>

    <div className='flex flex-col md:flex-nowrap flex-wrap gap-3 md:gap-0 md:flex-row mb-6 items-center'>

      <img className='h-18 rounded-lg bg-pink_fundo mb-4 md:mb-0 md:mr-8' src={logoTeste} alt="" />
      <div className='flex flex-col md:flex-row items-center w-full md:gap-8 gap-4'>
        <span className='text-sm text-zinc-500'>Asgard sofa</span>
        <span className='text-sm text-zinc-500'>Rs 500.000</span>
        <div className='border border-zinc-400 rounded-lg flex items-center gap-4 py-1.5 px-2'>
          <button>-</button> 1 <button>+</button>
        </div>
        <span className='text-sm'>Rs 500.000</span>
        <img className='h-4 cursor-pointer' src={trash} alt="logo lixo" />
      </div>
    </div>
  </div>

  <div className='bg-pink_fundo flex flex-col items-center w-full md:w-80 pt-5 pb-14 h-fit'>
    <h2 className='font-bold text-2xl mb-10'>Cart Totals</h2>

    <div className='flex flex-col gap-5 mb-8'>
      <div className='flex justify-between gap-6 w-full'>
        <span className='font-semibold'>Subtotal</span>
        <span className='text-sm text-zinc-500'>Rs 500.000</span>
      </div>
      <div className='flex justify-between gap-6 w-full'>
        <span className='font-semibold'>Total</span>
        <span className='text-lg font-semibold text-yellow-600'>Rs. 500.000</span>
      </div>
    </div>

    <button className='py-2 px-10 border border-black rounded-xl'>Check out</button>
  </div>
</section>

        <Informacoes />
    </div>
  )
}

export default Cart