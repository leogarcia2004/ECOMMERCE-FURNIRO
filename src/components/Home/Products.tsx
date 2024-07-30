

import selo_new from '../../assets/shop/selo_new.png'
import selo_desconto from '../../assets/shop/selo_descount.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carrinho from '../Carrinho'
import { IProduct, productsProps } from '../PropsProduct'

const Products:React.FC<productsProps> = ({ products}) => {

  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [carrinhoOpen, setCarrinhoOpen] = useState<boolean>(true);

  const handleBuy = (id: number) => {
    
    const product = products.find((product) => product.id === id);
    if (product) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, product]); 
      console.log(product);
      console.log(cartProducts);
    }
  }

  const navigate = useNavigate()

  const navigateClick = () => {
        navigate('/productselected')
    }

  return (
      <>
        {products.map((product) => (
        
        product.new ?
        <div onClick={navigateClick} className='card-father cursor-pointer'>

              <div className='bg-slate-200 flex w-52 h-90 flex-col card-product'>
                <div key={product.id}  className='w-full relative'>
                  <img className='absolute top-4 right-4 h-10' src={selo_new} alt="Selo new" />
                  <img className='h-40 w-full' src={product.images.mainImage} alt={product.images.mainImage} /> 
                </div>
                <div className='flex flex-col px-2 gap-1 '>
                  <span className='font-semibold text-lg'>{product.title}</span>
                  <span className='text-sm text-zinc-500 overflow-y-auto max-h-16'>{product.description.short}</span>
                  <span className='font-semibold text-base'> Rp {product.normalPrice}</span>
                </div>
              </div>

          <div className=' bg-black hover:z-10 bg-opacity-70  flex-col gap-3 justify-center items-center w-52 h-90 card-add'>

              <button onClick={() => handleBuy(product.id)} className=' bg-white px-6 py-2 w-fit text-yellow-600 rounded-sm font-semibold md:mt-2 mt-6"'>Add to cart</button>
              <div className='flex justify-center gap-2 text-xs text-white font-semibold'>
                <div className='flex gap-1'>
                  <i></i>
                  Share
                </div>
                <div className='flex gap-1'>
                  <i></i>
                  Compare
                </div>
                <div className='flex gap-1'>
                  <i></i>
                  Like
                </div>
              </div>
            </div>
            
               
        </div>
        :
        <div onClick={navigateClick} className='card-father cursor-pointer'>
            
            <div className='bg-slate-200 flex w-52 h-90 flex-col card-product'>
              <div key={product.id} className='w-full relative'>
                <img className='absolute top-4 right-4 h-10' src={selo_desconto} alt="Selo desconto" />
                <img className='h-40 w-full' src={product.images.mainImage} alt={product.images.mainImage} />
              </div>
              <div className='flex flex-col px-2 gap-1 '>
                <span className='font-semibold text-lg'>{product.title}</span>
                <span className='text-sm text-zinc-500 overflow-y-auto h-14'>{product.description.short}</span>
                <div className='flex gap-6'>
                  <span className='font-semibold text-base'> Rp {product.salePrice}</span>
                  <span className=' text-sm text-zinc-500 line-through'> Rp {product.normalPrice}</span>
                </div>
              </div>

              
            </div>

            <div className=' bg-black bg-opacity-70 flex flex-col gap-3 justify-center items-center w-52 h-90 card-add'>

                <button onClick={() => handleBuy(product.id)} className=' bg-white px-6 py-2 w-fit text-yellow-600 rounded-sm font-semibold md:mt-2 mt-6"'>Add to cart</button>
                  <div className='flex justify-center gap-2 text-xs text-white font-semibold'>
                    <div className='flex gap-1'>
                      <i></i>
                      Share
                    </div>
                    <div className='flex gap-1'>
                      <i></i>
                      Compare
                    </div>
                    <div className='flex gap-1'>
                      <i></i>
                      Like
                    </div>
                  </div>
              
            </div>   
        </div>
      ))}

      <Carrinho products={cartProducts} isOpen={carrinhoOpen} setCarrinhoOpen={() => setCarrinhoOpen(!carrinhoOpen)} />
      </>
      
    
  )
}

export default Products