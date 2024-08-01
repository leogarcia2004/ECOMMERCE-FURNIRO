

import { useEffect, useState } from 'react'
import BotaoShowMore from '../BotaoShowMore'
import { useLocation } from 'react-router-dom'
import { productsProps } from '../PropsProduct'
import RelatedProducts from './RelatedProducts'

const ProductSelected:React.FC<productsProps> = () => {

  const location = useLocation();
  const product = location.state?.product;

  const [products, setProducts] = useState([])
  const [clickDescription, setClickDescription] = useState<boolean>(true)

  useEffect(() => {
    const productsFunc = async () => {
         const response = await fetch('http://localhost:3000/products')
         const data = await response.json()
         setProducts(data)
    }
    productsFunc()
  }, [])

  return (
    <>
      {
        product ? (
          <>
              <section className='bg-pink_fundo pl-20 flex gap-4 items-center w-full h-24'>
                <div className='flex items-center gap-3.5 py-2 pr-4 h-fit border-r border-black text-zinc-400'>
                  Home <i className="fas fa-chevron-right text-black"></i> Shop <i className="fas fa-chevron-right text-black"></i>
                </div>
                <span >{product.title}</span>
              </section>
              <section className="container flex justify-center md:pl-10 w-full my-10">
                <div className="flex justify-center md:flex-row flex-col md:gap-6">
                  <div className='flex  gap-10 w-5/12'>
                    <div className="flex flex-col gap-5 mt-4">
                      {
                        product.images.gallery.map((image, index) => (
                          <ul>
                            <li key={index}>
                              <img src={image} alt="Miniatura móvel" className="w-24 h-24 bg-orange-100 object-cover cursor-pointer"/>
                            </li>
                          </ul>
                        ))

                      }
                    </div>
                    <img src={product.images.mainImage} alt="Sofá Asgaard" className="w-96 h-[500px] "/>
                  </div>

                  <div className='flex flex-col w-full md:w-1/2 pl-12'>
                    <h1 className="text-4xl font-semibold mb-2">{product.title}</h1>
                    <p className="text-gray-400 text-lg font-medium mb-3">Rs. {product.new ? product.normalPrice : product.salePrice}</p>
                    <div className="flex  text-zinc-400 ">
                        <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                        <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                        <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                        <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                        <i className="fas fa-star h-10 mr-5 text-yellow-300"></i>
                        5 costumer Review
                  </div>

                  <p className="text-gray-700 w-full pr-4">
                  {product.description.long}</p>

                  <div className="flex flex-col gap-4 mb-8 mt-4">
                      <div className='flex flex-col gap-3'>
                        <span className="text-zinc-400 font-semibold">Size:</span>
                          <ul className='flex gap-3'>
                            {
                              product.sizes.map((size) => (
                                <li><button className="py-2 px-4 rounded-lg bg-orange-100 text-center">{size}</button></li>
                              ))
                            }
                          </ul>
                      </div>

                      <div className='flex flex-col gap-3'>
                          <span className="text-zinc-400 font-semibold">Color:</span>
                          <ul className='flex gap-4'>
                            {
                              product.colors.map((color) => (
                                <li><button className='p-4 rounded-full' style={{backgroundColor: color.hex}} ></button></li>
                              ))
                            }
                          </ul>
                      </div> 
                    </div>

                    <div className="flex items-center gap-4 mb-8 ">
                      <div className='border border-zinc-400 rounded-lg flex items-center gap-4 py-2 px-2'>
                      <button>-</button> 1 <button>+</button>
                      </div>
                      <button className="border border-zinc-400 rounded-lg flex items-center gap-4 py-2 px-3.5">
                        Add To Cart
                      </button>
                    </div>

                    <div className="mt-4 flex w-full border-t pt-10 border-zinc-300 flex-col gap-3 text-zinc-400">
                      <p>SKU   : {product.sku}</p>
                      <p>Category   : {product.category}</p>
                      <p>Tags   : {product.tags.map((tag) => tag)}</p>
                      <p className='flex items-center gap-3'>Share   : 
                      <ul className='flex gap-3'>
                        <i className='fab fa-facebook text-black'></i>
                        <i className='fab fa-linkedin text-black'></i>
                        <i className='fab fa-twitter text-black'></i>  
                      </ul>
                      </p>
                    </div>
                  </div>
                </div>
            </section>

            <section className='border-t mb-10 border-zinc-300'>
              <div className='flex justify-center my-10 gap-6'>
                <h1 onClick={() => setClickDescription(true)} className={ clickDescription ? 'md:text-xl text-lg font-medium cursor-pointer' : 'md:text-xl text-lg text-zinc-400 font-medium cursor-pointer'}>Description</h1>
                <h1 onClick={() => setClickDescription(!clickDescription)} className={ clickDescription ? 'md:text-xl text-lg text-zinc-400 font-medium cursor-pointer' : 'md:text-xl text-lg  font-medium cursor-pointer'}>Additional Information</h1>
                <h1 className='md:text-xl text-lg text-zinc-400 font-medium cursor-pointer'>Reviews [5]</h1>
              </div>

              <div className='text-zinc-400 text-justify flex flex-col gap-8 items-center w-full h-42'>
                {
                  clickDescription ? 
                  <>
                    <p className='w-9/12'>{product.description.long}</p>
                    <p className='w-9/12'>{product.description.short}</p>
                  </>  
                  :
                  <>
                    <textarea name="text" placeholder='Additional Information' className='w-3/5 h-full pt-4 pl-6 text-black border boder-zinc-500 rounded-md focus:outline-none' id="text"></textarea>
                  </>
                }
              </div>
              <div className='flex md:flex-row flex-col items-center justify-center mt-8 gap-20'>
                {
                  product.images.gallery.slice(0,2).map((image) => (
                    <img className='bg-pink_fundo h-72 w-96' src={image} alt="Imagem móvel" />
                  ))
                }
              </div>
            </section>

            <section className=' border-t flex flex-col items-center pt-16 pb-16 border-zinc-300'>
                <h1 className='text-2xl font-medium mb-4'>Related products</h1>
                <div className='flex items-center md:flex-wrap md:flex-row gap-6 flex-col '>
                  <RelatedProducts products={products.slice(0,4)} />
                </div>
                <BotaoShowMore />
            </section>
        </>
        )
        :
        ''
      }
    </> 
  )
}

export default ProductSelected