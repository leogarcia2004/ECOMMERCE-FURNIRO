import { useEffect, useState } from "react"
import AmostraFotos from "../../assets/home/Images.png"
import CarrosselProducts from "./CarrosselProducts"
import CategoriasHome from "./CategoriasHome"
import Products from "./Products"
import BotaoShowMore from "../BotaoShowMore"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

     const [products, setProducts] = useState([])
     
     useEffect(() => {
          const productsFunc = async () => {

               const response = await fetch('http://localhost:3000/products')
     
               const data = await response.json()
               setProducts(data)
          }
          productsFunc()
     }, [])

     const navigate = useNavigate()

     const navigateClick = () => {
          navigate('/shop')
     }

  return (

    <>
      <section className="bg-slate-200 bg-imagem_homepage bg-cover bg-center h-180 flex justify-end items-center pr-20">

     <div className='bg-orange-100 md:w-5/12 h-fit pl-5 pt-10 pb-6 '>
        <span className='font-semibold mb-6'>new arrival</span>
        <h1 className='text-4xl font-bold text-amber-600 mb-6'>Discover Our <br /> New Collection</h1>
        <p className='font-semibold mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem omnis iure corporis, ratione ipsum laborum.</p>
        <button onClick={navigateClick} className='bg-amber-600 text-white px-14 py-4 font-semibold'>Buy now</button>
     </div>
     </section>
     
     <section className=" mt-10 flex flex-col  items-center">
          <h2 className="text-xl font-bold mb-1">Browse The Range</h2>
          <p className="text-sm text-zinc-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <CategoriasHome />
     </section>

     <section className=" mt-10 flex flex-col  items-center">
          <h2 className="text-xl font-bold mb-1">Our Products</h2>

          <div className="flex md:flex-wrap pt-6 gap-6 flex-col max-w-screen-xl md:h-[820px]">
               <Products products={products.slice(0,8)} />
          </div>
          
          <BotaoShowMore />
     </section>

     <section className="bg-orange-100 mt-10 flex gap-8 items-center pl-16 py-8 ">
          <div className="w-1/3">
            <h1 className="text-3xl font-bold mb-1">50+ Beautiful rooms <br /> inspiration</h1>
            <p className="text-sm text-zinc-600 mb-4 font-semibold">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className=" px-8 py-2 text-white bg-amber-600 border text-sm rounded-sm hover:bg-amber-300 hover:text-white font-semibold">Explore More</button>
          </div>
          <CarrosselProducts />
     </section>

     <section className="mt-12 flex flex-col items-center">
          <span className="font-semibold text-zinc-600">Share your setup with</span>
          <h1 className="font-bold text-3xl">#FuniroFurniture</h1>
          <img className="mb-16" src={AmostraFotos} alt="Fotos" />
     </section>
    </>
    
  )
}

export default HomePage