

import ImagemApresentacaoPage from '../ImagemApresentacaoPage'
import Informacoes from '../Informacoes'
import logoTeste from '../../assets/logo_furniro.png'
import trash from '../../assets/cart/trash.png'

const Cart = () => {
  return (
    <div>
        <ImagemApresentacaoPage title="Cart" />
        <section className='my-14 flex md:flex-row md:gap-8 flex-col justify-center w-full'>

            <div className='flex flex-col md:w-6/12 w-full'>

                <div className='bg-pink_fundo flex justify-center mb-12 py-4 '>
                    <ul className='flex'>
                        <li className='font-semibold mr-16'>Product</li>
                        <li className='font-semibold mr-24'>Price</li>
                        <li className='font-semibold mr-8'>Quantity</li>
                        <li className='font-semibold'>Subtotal</li>
                    </ul>
                </div>

                <div className='flex md:flex-row flex-col-reverse items-center'>
                    <img className='h-18 rounded-lg bg-pink_fundo mr-8 ' src={logoTeste} alt="" />
                    <div className='flex items-center'>
                        <span className='text-sm text-zinc-500 mr-12'>Asgard sofa</span>
                        <span className='text-sm text-zinc-500 mr-14'>Rs 500.000</span>
                        <div className='border border-zinc-400 rounded-lg h-fit flex gap-4 py-1.5 w-fit px-2 mr-16'>
                            <button>-</button> 1 <button>+</button>
                        </div>
                        <span className='text-sm mr-8'>Rs 500.000</span>
                        <img className='h-4 cursor-pointer' src={trash} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-pink_fundo flex flex-col items-center w-80 pt-5 pb-14 h-fit '>
                <h2 className='font-bold text-2xl mb-10'>Cart Totals</h2>

                <div className='flex flex-col gap-5 mb-8'>
                    <div className='flex gap-10'>
                        <span className='font-semibold'>Subtotal</span>
                        <span className='text-sm text-zinc-500'>Rs 500.000</span>
                    </div>
                    <div className='flex gap-10'>
                        <span className='font-semibold'>total</span>
                         <span className='text-lg font-semibold text-yellow-600'>Rs. 500.000</span>
                    </div>
                </div>

                <button className='py-2 px-10 max-w-fit border border-black rounded-xl'>Check out</button>
            </div>

        </section>

        <Informacoes />
    </div>
  )
}

export default Cart