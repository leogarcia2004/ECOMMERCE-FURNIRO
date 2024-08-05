
import { useState } from 'react'
import BotaoShowMore from '../BotaoShowMore'
import { useLocation } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'
import { useCarrinho } from '../../contexts/CarrinhoContext'

const ProductSelected:React.FC  = () => {

  const location = useLocation();
  const product = location.state?.product;
  const [clickDescription, setClickDescription] = useState<boolean>(true)
  const [seletedImage, setSeletedImage] = useState<string>(product.images.mainImage)
  const [seletedColor, setSeletedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null);

  const {products, handleBuy, quantities, addQuantity, decreaseQuantity} = useCarrinho()


  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSeletedColor(color);
  }

  const handleImageClick = (image) => {
    setSeletedImage(image.target.src)
  }

  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-yellow-300"></i>);
      } else {
        stars.push(<i key={i} className="fas fa-star text-gray-300"></i>);
      }
    }
    return stars;
  };

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
                        product.images.gallery.map((image) => (
                          <ul>
                            <li key={image}>
                              <img src={image} alt="Miniatura móvel" className={"w-24 h-24 bg-orange-100 object-cover cursor-pointer"} onClick={handleImageClick}/>
                            </li>
                          </ul>
                        ))

                      }
                    </div>
                    <img src={seletedImage} alt="Sofá Asgaard" className="w-96 h-[500px] "/>
                  </div>

                  <div className='flex flex-col w-full md:w-1/2 pl-12'>
                    <h1 className="text-4xl font-semibold mb-2">{product.title}</h1>
                    <p className="text-gray-400 text-lg font-medium mb-3">Rs. {product.new ? product.normalPrice : product.salePrice}</p>
                    <div className="flex  text-zinc-400 ">
                        {renderStars(product.rating)}
                        <span className='ml-1.5'>{product.rating} Costumer Review</span>
                  </div>

                  <p className="text-gray-700 w-full pr-4">
                  {product.description.long}</p>

                  <div className="flex flex-col gap-4 mb-8 mt-4">
                      <div className='flex flex-col gap-3'>
                        <span className="text-zinc-400 font-semibold">Size: </span>
                          <ul className='flex gap-3'>
                            {
                            product.sizes[0].height && product.sizes[0].width && product.sizes[0].depth ?
                            <>
                              <li>
                                
                                <button className={`py-2 px-4 rounded-lg text-center ${selectedSize === product.sizes[0].height ? 'bg-yellow-700 text-white' : 'bg-orange-100 text-black'}`} onClick={() => handleSizeClick(product.sizes[0].height)}
                                  >                                   
                                  H: {product.sizes[0].height}
                                </button>
                              </li>

                              <li>
                                <button className={`py-2 px-4 rounded-lg text-center ${selectedSize === product.sizes[0].width ? 'bg-yellow-700 text-white' : 'bg-orange-100 text-black'}`} onClick={() => handleSizeClick(product.sizes[0].width)}
                                  >
                                  W: {product.sizes[0].width}
                                </button>
                              </li>
                              
                              <li>
                                <button className={`py-2 px-4 rounded-lg text-center ${selectedSize === product.sizes[0].depth ? 'bg-yellow-700 text-white' : 'bg-orange-100 text-black'}`} onClick={() => handleSizeClick(product.sizes[0].depth)}
                                  >
                                  D: {product.sizes[0].depth}
                                </button>
                              </li>
                            </>                                                                                

                              :
                              product.sizes.map((size) => (
                                <>
                                  <li key={size}><button  className={`py-2 px-4  rounded-lg text-center ${selectedSize === size ? 'bg-yellow-700 text-white' : 'bg-orange-100 text-black'}`}
                                  onClick={() => handleSizeClick(size)}>{size}</button></li>
                                </> 
                              ))
                            }
                          </ul>
                      </div>

                      <div className='flex flex-col gap-3'>
                          <span className="text-zinc-400 font-semibold">Color:</span>
                          <ul className='flex gap-4'>
                            {
                              product.colors.map((color) => (
                                <li key={color.name}><button className={`p-4 rounded-full ${seletedColor === color ? 'border border-black' : 'border-none'}`} style={{backgroundColor: color.hex}} onClick={() => handleColorClick(color)}></button></li>
                              ))
                            }
                          </ul>
                      </div> 
                    </div>

                    <div className="flex items-center gap-4 mb-8 ">
                      <div className='border border-zinc-400 rounded-lg flex items-center gap-4 py-2 px-2'>
                      <button onClick={() => decreaseQuantity(product.id)}>-</button> {quantities[product.id] || 1} <button onClick={() => addQuantity(product.id)}>+</button>
                      </div>
                      <button onClick={() => handleBuy(product.id)} className="border border-zinc-400 rounded-lg flex items-center gap-4 py-2 px-3.5">
                        Add To Cart
                      </button>
                    </div>

                    <div className="mt-4 flex w-full border-t pt-10 border-zinc-300 flex-col gap-3 text-zinc-400">
                      <p>SKU   : {product.sku}</p>
                      <p>Category   : {product.category}</p>
                      <p>Tags   : {product.tags.map((tag) => tag)}</p>
                      <span className='flex items-center gap-3'>Share   : 
                        <ul className='flex gap-3'>
                          <li><i className='fab fa-facebook text-black'></i></li>
                          <li><i className='fab fa-linkedin text-black'></i></li>
                          <li><i className='fab fa-twitter text-black'></i></li>  
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
            </section>

            <section className='border-t mb-10 border-zinc-300'>
              <div className='flex justify-center my-10 gap-6'>
                <h1 onClick={() => setClickDescription(true)} className={ clickDescription ? 'md:text-xl text-lg font-medium cursor-pointer' : 'md:text-xl text-lg text-zinc-400 font-medium cursor-pointer'}>Description</h1>
                <h1 onClick={() => setClickDescription(!clickDescription)} className={ clickDescription ? 'md:text-xl text-lg text-zinc-400 font-medium cursor-pointer' : 'md:text-xl text-lg  font-medium cursor-pointer'}>Additional Information</h1>
                <h1 className='md:text-xl text-lg text-zinc-400 font-medium cursor-pointer'>Reviews [{product.rating}]</h1>
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
                    <textarea name="text" placeholder='Additional Information' className='w-3/5 h-full pt-4 pl-6 text-black border-2 boder-neutral-900 rounded-md focus:outline-none' id="text"></textarea>
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
                <h1 className='text-2xl font-medium mb-8'>Related products</h1>
                <div className='flex items-center md:flex-wrap md:flex-row gap-6 flex-col '>
                  <RelatedProducts products={products} category={product.category} />
                </div>
                <BotaoShowMore />
            </section>
        </>
        )
        :
        <section className='flex justify-center pt-20'>
          <h1 className='text-3xl font-bold'>Produto não encontrado!</h1>
        </section>
      }
    </> 
  )
}

export default ProductSelected