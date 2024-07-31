


import { useEffect, useState } from 'react'
import Products from '../Home/Products'
import BotaoShowMore from '../BotaoShowMore'

const ProductSelected = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const productsFunc = async () => {

         const response = await fetch('http://localhost:3000/products')

         const data = await response.json()
         setProducts(data)
        //  setProducts(data.find((product) => product.id === 1))
    }
    productsFunc()
}, [])
  return (


    <>

    <section className='bg-pink_fundo pl-20 flex gap-4 items-center w-full h-24'>
      <div className='flex items-center gap-3.5 py-2 pr-4 h-fit border-r border-black text-zinc-400'>
        Home <i className="fas fa-chevron-right text-black"></i> Shop <i className="fas fa-chevron-right text-black"></i>
        
      </div>
      <span >asgaard sofa</span>
    </section>

      <section className="container mx-auto my-10">
        <div className="flex md:flex-row flex-col md:pl-0 pl-12 gap-8">
          <div className='flex'>
            <div className="flex flex-col gap-5 mt-4">
              <img src="caminho_para_a_miniatura_1.jpg" alt="Miniatura 1" className="w-20 h-20 object-cover"/>
              <img src="caminho_para_a_miniatura_2.jpg" alt="Miniatura 2" className="w-20 h-20 object-cover"/>
              <img src="caminho_para_a_miniatura_3.jpg" alt="Miniatura 3" className="w-20 h-20 object-cover"/>
              <img src="caminho_para_a_miniatura_4.jpg" alt="Miniatura 4" className="w-20 h-20 object-cover"/>
            </div>
            <img src="caminho_para_a_imagem_principal.jpg" alt="Sofá Asgaard" className="w-full h-96 object-cover"/>
          </div>

          <div>
            <h1 className="text-4xl font-semibold mb-2">Asgaard Sofa</h1>
            <p className="text-gray-400 text-lg font-medium mb-3">Rs. 250,000.00</p>
            <div className="flex  text-zinc-400 ">
                <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                <i className="fas fa-star h-10 mr-1.5 text-yellow-300"></i>
                <i className="fas fa-star h-10 mr-5 text-yellow-300 "></i>
                
                5 costumer Review
          </div>

          <p className="text-gray-700 md:w-3/6 w-9/12">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>   

          <div className="flex flex-col gap-4 mb-8 mt-4">
            <div className='flex flex-col gap-3'>
              <span className="text-zinc-400 font-semibold">Size:</span>

                <ul className='flex gap-3'>
                  <li><button className="py-2 px-4 rounded-lg bg-pink_fundo text-center">L</button></li>
                  <li><button className="py-2 px-3 rounded-lg bg-pink_fundo text-center">XL</button></li>
                  <li><button className="py-2 px-3 rounded-lg bg-pink_fundo text-center">XS</button></li>
                </ul>
            </div>

            <div className='flex flex-col gap-3'>
                <span className="text-zinc-400 font-semibold">Color:</span>

                <ul className='flex gap-4'>
                  <li><button className='p-4 rounded-full bg-blue-800'></button></li>
                  <li><button className='p-4 rounded-full bg-blue-800'></button></li>
                  <li><button className='p-4 rounded-full bg-blue-800'></button></li>
                </ul>
            </div>

              
          </div>

          <div className="flex items-center gap-4 mb-8 mt-4">
            <div className='border border-zinc-400 rounded-lg flex items-center gap-4 py-2 px-2'>
            <button>-</button> 1 <button>+</button>
            </div>
            <button className="border border-zinc-400 rounded-lg flex items-center gap-4 py-2 px-3.5">
              Add To Cart
            </button>
          </div>

          <div className="mt-4 flex w-1/2 border-t pt-10 border-zinc-300 flex-col gap-3 text-zinc-400">
            <p>SKU   : 55001</p>
            <p>Category   : Sofas</p>
            <p>Tags   : Sofa, Chair, Home, Shop</p>
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
        <h1 className='md:text-xl text-lg font-medium cursor-pointer'>Description</h1>
        <h1 className='md:text-xl text-lg text-zinc-400 cursor-pointer'>Additional Information</h1>
        <h1 className='md:text-xl text-lg text-zinc-400 cursor-pointer'>Reviews [5]</h1>
      </div>

      <div className='text-zinc-400 text-justify flex flex-col gap-8 items-center w-full'>
        <p className='w-9/12'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

        <p className='w-9/12'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>

      <div className='flex md:flex-row flex-col items-center justify-center mt-8 gap-10'>
        <img className='bg-pink_fundo h-60 w-96' src="" alt="" /> 
        <img className='bg-pink_fundo h-60 w-96' src="" alt="" />
      </div>
    </section>

    <section className=' border-t flex flex-col items-center pt-16 pb-16 border-zinc-300'>
        <h1 className='text-2xl font-medium mb-4'>Related products</h1>
        <div className='flex items-center md:flex-wrap md:flex-row gap-6 flex-col '>
          <Products products={products.slice(0,4)} />
        </div>
        <BotaoShowMore />
    </section>
    </>
    
  )
}

export default ProductSelected