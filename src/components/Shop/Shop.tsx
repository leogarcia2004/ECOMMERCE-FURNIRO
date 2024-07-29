import Products from "../Home/Products"
import ImagemApresentacaoPage from "../ImagemApresentacaoPage"
import { useEffect, useState } from "react"
import Informacoes from "../Informacoes"
import filter from "../../assets/shop/filtering.png"
import vector from "../../assets/shop/vectorr.png"
import vector_1 from "../../assets/shop/vectorr_1.png"
const Shop = () => {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<number>(0)
  const PRODUCTS_PER_PAGE = search;

     useEffect(() => {
          const productsFunc = async () => {

               const response = await fetch('http://localhost:3000/products')
     
               const data = await response.json()
               setProducts(data)
          }
          productsFunc()
     }, [])

     const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

     const nextPage = () => {
       if (currentPage < totalPages) {
         setCurrentPage((prev) => prev + 1);
       }
     };

     const prevPage = () => {
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
    };
   
     const setPage = (pageNum) => {
       if (pageNum > 0 && pageNum <= totalPages) {
         setCurrentPage(pageNum);
       }
     };
   
     const getVisibleProducts = () => {
       const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
       return products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
     };

     const getPageButtons = () => {
      let startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, startPage + 2);
  
        if (endPage - startPage < 2) {
          startPage = Math.max(1, endPage - 2);
        }
  
      return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };  


  return (
    <div>
      <ImagemApresentacaoPage title="Shop" />
      <section className='bg-pink_fundo flex justify-around items-center gap-10 w-full h-36'>
        <div className="flex">
          
            <ul className="flex items-center gap-6 pr-8">
              <li className="flex gap-3 items-center font-medium text-lg cursor-pointer">
                <img className="h-5" src={filter} alt="Logo filter" />
                Filter
              </li>

              <li>
                <img className="cursor-pointer" src={vector} alt="logo vector" />
              </li>

              <li>
                <img className="cursor-pointer" src={vector_1 }alt="logo vector_1" />
              </li>
            </ul>

          <span className=' pl-8 pt-2 pb-2 border-l flex items-center border-black text-sm font-medium'>Showing 1–16 of 32 results</span>
        </div>

        <div className='flex gap-6 font-medium'>
          <div className='flex gap-2'>
            Show
            <input className='appearance-none w-8 h-8 text-center items-center pl-1 text-zinc-400 focus:outline-none' value={search} min={4} max={16} onChange={(e) => setSearch(e.target.value)} type="number" name="number" id="number" />
          </div>

          <div className='flex gap-2'>
            Short by
            <input className='appearance-none w-20 h-8 text-center text-zinc-400 focus:outline-none' type="text" />
          </div>
        </div>
    </section>

      <section className="flex justify-center">
        <div className="flex items-center md:flex-wrap gap-6 flex-col md:max-h-[1600px]">
          <Products products={getVisibleProducts()}/>
        </div>
      </section>

      <div className="flex gap-6 justify-center mt-8 mb-12">
       {
          currentPage !== 1 && <button
          className="bg-pink_fundo px-4 rounded-md py-2 font-semibold"
          onClick={prevPage}
        >
          Previous
        </button>
       } 
      
        <div className="flex gap-4">
        {getPageButtons().map((page) => (
            <button
              key={page}
              className={`bg-pink_fundo px-4 rounded-md py-2 font-semibold ${currentPage === page ? 'bg-yellow-600 text-white' : ''}`}
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button onClick={nextPage} disabled={currentPage === totalPages} className={"bg-pink_fundo px-4 rounded-md py-2 font-semibold"}>Next</button>
      </div>

      <Informacoes />
    </div>

    
  )
}

export default Shop